export const metadata = {
  title: 'Contact | Red Pine Mushroom',
  description: 'Poznaj historię zespołu Red Pine Mushroom – polskiego tria łączącego post-rock, rock psychodeliczny i desert rock.',
  keywords: 'Red Pine Mushroom, post-rock, rock psychodeliczny, desert rock, polski zespół, muzyka instrumentalna',
  robots: 'index, follow', // Upewnij się, że Google może indeksować
  openGraph: {
    title: 'BIO - Red Pine Mushroom | Post-Rock Band',
    description: 'Poznaj historię zespołu Red Pine Mushroom – polskiego tria łączącego post-rock, rock psychodeliczny i desert rock.',
    url: 'https://twojadomena.com/bio',
    siteName: 'Red Pine Mushroom',
    type: 'website',
    images: [
      {
        url: 'https://twojadomena.com/images/bio-cover.jpg', // Upewnij się, że ten obraz istnieje
        width: 1200,
        height: 630,
        alt: 'Red Pine Mushroom - zespół post-rockowy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TwojTwitter',
    title: 'BIO - Red Pine Mushroom | Post-Rock Band',
    description: 'Poznaj historię zespołu Red Pine Mushroom – polskiego tria łączącego post-rock, rock psychodeliczny i desert rock.',
    images: ['https://twojadomena.com/images/bio-cover.jpg'],
  },
};

export default function BioLayout({ children }) {
  return <>{children}</>;
}
