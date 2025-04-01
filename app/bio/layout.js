export const metadata = {
  title: 'Bio | Red Pine Mushroom',
  description: 'Discover the journey of Red Pine Mushroom – a Polish trio blending post-rock, psychedelic rock, and desert rock.',
  keywords: 'Red Pine Mushroom, post-rock, psychedelic rock, desert rock, instrumental music, Polish band, experimental rock',
  robots: 'index, follow', // Upewnij się, że Google może indeksować
  openGraph: {
    title: 'BIO - Red Pine Mushroom | Post-Rock Band',
    description: 'Learn about Red Pine Mushroom, a Polish trio that fuses post-rock, psychedelic rock, and desert rock into a unique instrumental experience.',
    url: 'https://twojadomena.com/bio',
    siteName: 'Red Pine Mushroom',
    type: 'website',
    images: [
      {
        url: 'https://twojadomena.com/images/bio-cover.jpg', // Upewnij się, że ten obraz istnieje
        width: 1200,
        height: 630,
        alt: 'Red Pine Mushroom - post-rock band',
      },
    ],
  },
};

export default function BioLayout({ children }) {
  return <>{children}</>;
}
