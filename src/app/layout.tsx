import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { PROFILE } from '@/data/profile';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hassan-portfolio-ten-ruddy.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PROFILE.displayName} — Full Stack Developer & AI Solutions Engineer`,
    template: `%s | ${PROFILE.displayName}`,
  },
  description:
    'الموقع الشخصي للمهندس حسن محمد (Hassan Mohammed) — مطور برمجيات ومهندس حلول رقمية، متخصص في Full Stack، دمج الذكاء الاصطناعي AI، تطبيقات الهواتف Flutter، وأمن الويب.',
  keywords: [
    'Hassan Mohammed',
    'حسن محمد',
    'Full Stack Developer',
    'Full Stack Developer Yemen',
    'مطور برمجيات اليمن',
    'React Developer',
    'Next.js Developer',
    'AI Developer',
    'Flutter Developer',
    'Web Developer Yemen',
    'UI UX Designer',
    'SEO Specialist',
    'Software Engineer',
  ],
  authors: [{ name: 'Hassan Mohammed', url: siteUrl }],
  creator: 'Hassan Mohammed',
  publisher: 'Hassan Mohammed',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_YE',
    alternateLocale: ['en_US'],
    url: siteUrl,
    title: `${PROFILE.displayName} | Full Stack Developer & AI Solutions Engineer`,
    description: PROFILE.tagline.ar,
    siteName: 'Hassan Mohammed Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.displayName} | Full Stack & AI Developer`,
    description: PROFILE.tagline.en,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'ar-YE': `${siteUrl}?lang=ar`,
      'en-US': `${siteUrl}?lang=en`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.fullName.en,
    alternateName: PROFILE.displayName,
    jobTitle: PROFILE.primaryTitle,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Yemen',
    },
    email: PROFILE.socials.email,
    telephone: '+967776461892',
    url: siteUrl,
    sameAs: [
      PROFILE.socials.github,
      PROFILE.socials.whatsapp,
    ],
    knowsAbout: [
      'Full Stack Web Development',
      'Next.js',
      'React.js',
      'TypeScript',
      'Node.js',
      'Artificial Intelligence Integration',
      'Large Language Models (LLM)',
      'RAG Systems',
      'Flutter Mobile Development',
      'PostgreSQL',
      'Supabase',
      'Web Application Security',
      'OWASP',
      'UI/UX Design',
      'Technical SEO',
    ],
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hassan Mohammed - Official Portfolio',
    url: siteUrl,
    description: PROFILE.tagline.en,
    author: {
      '@type': 'Person',
      name: PROFILE.fullName.en,
    },
    inLanguage: ['ar', 'en'],
  };

  const jsonLdProfilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-10-30T08:00:00+03:00',
    mainEntity: {
      '@type': 'Person',
      name: PROFILE.fullName.en,
      alternateName: PROFILE.displayName,
      description: PROFILE.tagline.en,
    },
  };

  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfilePage) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
        {/* Skip to Content Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg font-bold"
        >
          تخطي إلى المحتوى الرئيسي / Skip to main content
        </a>

        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

