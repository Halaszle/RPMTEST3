export const metadata = {
  title: 'Music | Red Pine Mushroom',
  description: 'Poznaj historię zespołu Red Pine Mushroom – polskiego tria łączącego post-rock, rock psychodeliczny i desert rock.',
  keywords: 'Red Pine Mushroom, post-rock, rock psychodeliczny, desert rock, polski zespół, muzyka instrumentalna',
  robots: 'index, follow', // Upewnij się, że Google może indeksować
  openGraph: {
    title: 'Music - Red Pine Mushroom | Post-Rock Band',
    description: 'Poznaj historię zespołu Red Pine Mushroom – polskiego tria łączącego post-rock, rock psychodeliczny i desert rock.',
    url: 'https://redpinemushroom.com/music',
    siteName: 'Red Pine Mushroom',
    type: 'website',
    images: [
      {
        url: 'https://redpinemushroom.com/logomain.png', // Upewnij się, że ten obraz istnieje
        width: 1184,
        height: 1184,
        alt: 'Red Pine Mushroom - post-rock, desert rock, psychedelic band',
      },
    ],
  },
};

export default function BioLayout({ children }) {
  return <>{children}</>;
}
