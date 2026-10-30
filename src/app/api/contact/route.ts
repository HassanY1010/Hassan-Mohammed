import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5; // max 5 submissions per minute

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(time => now - time < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.ip || 'anonymous';
    
    // 1. Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a moment before sending another message.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, service, message, _honey } = body;

    // 2. Honeypot check (anti-bot)
    if (_honey && _honey.trim().length > 0) {
      // Quietly reject bots without letting them know
      return NextResponse.json({ success: true, message: 'Message queued' }, { status: 200 });
    }

    // 3. Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Valid name is required (at least 2 characters).' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Valid email address is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters long.' }, { status: 400 });
    }

    // 4. Sanitization
    const sanitize = (str: string) => str.replace(/[<>]/g, '').trim();
    const sanitizedData = {
      name: sanitize(name),
      email: email.trim().toLowerCase(),
      service: service ? sanitize(service) : 'General Inquiry',
      message: sanitize(message),
      receivedAt: new Date().toISOString(),
      senderIp: ip.split(',')[0],
    };

    // 5. Output / Process (In production, could forward to Resend/SendGrid/Telegram webhook)
    console.log('[Contact Inquiry Received]:', sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received successfully. Hassan Barafah will review and reply within 24 hours.',
        data: {
          name: sanitizedData.name,
          receivedAt: sanitizedData.receivedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing your request.' },
      { status: 500 }
    );
  }
}
