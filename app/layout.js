"use client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { Roboto } from 'next/font/google';

// Definiowanie czcionki Roboto
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap', // Zapewnia szybsze renderowanie czcionki
  preload: true,   // Czcionka będzie preładowana
});

export default function RootLayout({ children }, { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
     <html lang="pl" className={roboto.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* 📌 Structured Data (JSON-LD) dla SEO */}
<Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      "name": "Red Pine Mushroom",
      "genre": ["Post-Rock", "Psychedelic Rock", "Desert Rock", "Instrumental"],
      "url": "https://twojadomena.com",
      "description": "Red Pine Mushroom is an instrumental post-rock band blending elements of desert rock and psychedelic rock. Explore our albums, upcoming concerts, and exclusive content.",
      "keywords": "Red Pine Mushroom, post-rock band, desert rock, psychedelic rock, instrumental music, live concerts, music albums",
      "image": "https://twojadomena.com/images/redpine-band.jpg",
      "sameAs": [
        "https://www.facebook.com/redpinemushroom",
        "https://instagram.com/redpinemushroomofficial",
        "https://www.youtube.com/@redpinemushroom",
        "https://redpinemushroom.bandcamp.com/",
        "https://open.spotify.com/artist/1xwwutIpfyNvuVyWYXw2Gr?si=odDG0CRnQgC0MWwD9RCu5A",
		"https://music.apple.com/us/artist/red-pine-mushroom/1673976910"
      ],
      "album": [
        {
          "@type": "MusicAlbum",
          "name": "Vagrant",
          "description": "Vagrant is a sonic journey through vast landscapes, blending dreamy post-rock atmospheres with heavy desert rock riffs.",
          "datePublished": "2022-05-10",
          "url": "https://open.spotify.com/album/6UyvOns9zLSdTbgkYAbvbJ?si=v8ZP0wpRS9O8gaPUCk9z-A",
          "image": "https://twojadomena.com/images/vagrant-cover.jpg"
        },
        {
          "@type": "MusicAlbum",
          "name": "Enki",
          "description": "Inspired by ancient mythology, Enki delivers a fusion of hypnotic rhythms and psychedelic textures.",
          "datePublished": "2023-07-15",
          "url": "https://open.spotify.com/album/2Og9haC6ccuHdIGi0FDmxw?si=Kvzgc1srTymATFo45lDdRQ",
          "image": "https://twojadomena.com/images/enki-cover.jpg"
        },
        {
          "@type": "MusicAlbum",
          "name": "The Mine Valley",
          "description": "The Mine Valley takes listeners on a deep dive into experimental soundscapes, merging organic melodies with post-rock dynamism.",
          "datePublished": "2024-09-20",
          "url": "https://twojadomena.com/the-mine-valley",
          "image": "https://twojadomena.com/images/mine-valley-cover.jpg"
        }
      ],
      "track": [
        {
          "@type": "MusicRecording",
          "name": "Horseman",
          "description": "A mesmerizing instrumental piece capturing the essence of the desert through hypnotic guitar melodies and atmospheric soundscapes.",
          "inAlbum": "Vagrant",
          "url": "https://open.spotify.com/track/5ggKjL00WXB0Vj7IkPcOkD?si=eb9503a5ee8d4e5f",
          "duration": "PT8M22S"
        },
        {
          "@type": "MusicRecording",
          "name": "Enki: Ur/Water Coming from My Shoulders/ Lady of the Sea/ Ziggurat",
          "description": "An ethereal track featuring ambient textures and intricate guitar harmonies inspired by ancient Mesopotamian myths.",
          "inAlbum": "Enki",
          "url": "https://open.spotify.com/track/51o1RF0cvTURJWgo5kWbJk?si=5499ba0305e84b73",
          "duration": "PT21M20S"
        }
      ],
      "event": [
        {
          "@type": "MusicEvent",
          "name": "Red Pine Mushroom - Live in Warsaw",
          "description": "Join Red Pine Mushroom for an unforgettable night of instrumental rock, featuring tracks from their latest album, The Mine Valley.",
          "startDate": "2024-06-15T20:00",
          "location": {
            "@type": "Place",
            "name": "Palladium Club",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ul. Złota 9",
              "addressLocality": "Warsaw",
              "postalCode": "00-019",
              "addressCountry": "PL"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Red Pine Mushroom Official",
            "url": "https://twojadomena.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "50",
            "priceCurrency": "PLN",
            "availability": "https://schema.org/InStock",
            "url": "https://twojadomena.com/concerts/warsaw"
          }
        }
      ],
      "foundingDate": "2018",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Głogów",
          "addressCountry": "PL"
        }
      },
      "member": [
        {
          "@type": "Person",
          "name": "Konrad Kisło",
          "instrument": "Drums",
          "sameAs": "https://www.instagram.com/haszelele/"
        },
        {
          "@type": "Person",
          "name": "Michał Czarnecki",
          "instrument": "Electric Guitar",
          "sameAs": "https://www.instagram.com/aswatthapurusha/"
        },
        {
          "@type": "Person",
          "name": "Michał Kosałka",
          "instrument": "Bass Guitar",
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Contact",
        "email": "rpine.mushroom@gmail.com",
        "url": "https://twojadomena.com/contact"
      }
    }),
  }}
/>
        <title>Red Pine Mushroom | Official Website</title>
        <meta
          name="description"
          content="Red Pine Mushroom – Psychedelic Post-Rock from Poland. Explore the atmospheric sound of Red Pine Mushroom, a post-rock, psychedelic, and desert rock band from Głogów. Listen to our latest releases, tour dates, and exclusive content."
		  logo="https://redpinemushroom.com/logomain.png"
        />
      </head>
      <body>
        <AnimatePresence mode="wait">
          {pathname === "/" ? (
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
