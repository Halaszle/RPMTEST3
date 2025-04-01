'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Music.module.css';
import globals from '../components/globals.css';
import Footer from '../components/Footer';

export default function Bio() {

  useEffect(() => {
    function updateAnimationSpeed() {
      const screenWidth = window.innerWidth;
      let baseDuration = 15; // Podstawowy czas animacji (np. dla 1400px)
      let reductionFactor = 5; // O ile sekund wolniejsza animacja na każde 100px mniej
      let minWidth = 600; // Minimalna szerokość, poniżej której animacja się nie spowalnia

      let newDuration = baseDuration + Math.max(0, (1400 - screenWidth) / 100 * reductionFactor);

      // Zapobiegamy zbyt wolnej animacji
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
      <Head>
        <title>Bio - Red Pine Mushroom</title>
        <meta name="description" content="Poznaj historię zespołu Red Pine Mushroom." />
      </Head>

      <Header />

      {/* Sekcja główna z efektem Parallax */}
      <section className={styles.musicHeader} id="bioHeader">
        <h1>MUSIC</h1>
        <p>Let&lsquo;s dive to the psychedelic world</p>
      </section>

      {/* Sekcja treści biografii */}
      <section className={styles.musicContent}>
		<h2>EPs</h2>
		
			<div className={styles.EPs}>
			  <iframe
				style={{ borderRadius: '12px', maxWidth: '600px', width: '100%' }}
				src="https://open.spotify.com/embed/album/6UyvOns9zLSdTbgkYAbvbJ?utm_source=generator"
				width="100%"
				height="352"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			  ></iframe>
			</div>
			<div className={styles.EPs}>
			  <iframe
				style={{ borderRadius: '12px', maxWidth: '600px', width: '100%' }}
				src="https://open.spotify.com/embed/album/2Og9haC6ccuHdIGi0FDmxw?utm_source=generator"
				width="100%"
				height="352"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			  ></iframe>
			</div>

					<h2>Singles</h2>

			
			<div className={styles.Singles}>
			  <iframe
				style={{ borderRadius: '12px',width: '100%' }}
				src="https://open.spotify.com/embed/album/715YFZolt5bP3sSNoQsb6E?utm_source=generator"
				width="100%"
				height="152"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			  ></iframe>
			</div>
			<div className={styles.Singles}>
			  <iframe
				style={{ borderRadius: '12px', width: '100%' }}
				src="https://open.spotify.com/embed/album/0InfvRixZIhrMbav8eRHEl?utm_source=generator"
				width="100%"
				height="152"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			  ></iframe>
			</div>
			<div className={styles.Singles}>
			  <iframe
				style={{ borderRadius: '12px', width: '100%' }}
				src="https://open.spotify.com/embed/track/5ggKjL00WXB0Vj7IkPcOkD?utm_source=generator"
				width="100%"
				height="152"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			  ></iframe>
			</div>						
      </section>
      <Footer />

    </>
  );
}
