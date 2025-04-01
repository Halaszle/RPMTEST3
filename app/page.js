'use client'
import { useLayoutEffect } from 'react';
import Head from 'next/head';
import Header from '../app/components/Header.index';
import styles from '../app/styles/Index.module.css';
import Link from "next/link";
import Image from "next/image";
import globals from '../app/styles/index.globals.css'

export default function Home() {
  useLayoutEffect(() => {
    function updateAnimationSpeed() {
      const screenWidth = window.innerWidth;
      let baseDuration = 20; 
      let reductionFactor = 5;
      let minWidth = 600;
      let newDuration = baseDuration + Math.max(0, (1400 - screenWidth) / 100 * reductionFactor);

      if (screenWidth < minWidth) {
        newDuration = baseDuration + ((1400 - minWidth) / 100 * reductionFactor);
      }

      document.documentElement.style.setProperty('--animation-duration', `${newDuration}s`);
    }

    updateAnimationSpeed();
    window.addEventListener("resize", updateAnimationSpeed);
    return () => window.removeEventListener("resize", updateAnimationSpeed);
  }, []);

  return (
    <>
      <Header />
      <section className={styles.indexHero} id="indexHero">
        <h1>RED PINE MUSHROOM TEST</h1>
        <p>POST-ROCK · DESERT ROCK · INSTRUMENTAL</p>
      </section>
	<main>
      <section className={styles.indexSocialIcons} id="indexSocialIcons">
        {[
          { href: "https://www.facebook.com/redpinemushroom", src: "/facebook.png", alt: "Facebook" },
          { href: "https://instagram.com/redpinemushroomofficial", src: "/instagram.png", alt: "Instagram" },
          { href: "https://www.youtube.com/@redpinemushroom", src: "/yt.png", alt: "YouTube" },
          { href: "https://redpinemushroom.bandcamp.com/", src: "/bandcamp.png", alt: "Bandcamp" },
          { href: "https://open.spotify.com/artist/1xwwutIpfyNvuVyWYXw2Gr?si=odDG0CRnQgC0MWwD9RCu5A", src: "/spotify.png", alt: "Spotify" },
          { href: "https://music.apple.com/us/artist/red-pine-mushroom/1673976910", src: "/apple.png", alt: "Apple Music" },
        ].map((item, index) => (
          <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer">
            <Image src={item.src} alt={item.alt} width={24} height={24} className={styles.icon} loading="lazy" />
          </Link>
        ))}
      </section>
	</main>  
    </>
  );
}
