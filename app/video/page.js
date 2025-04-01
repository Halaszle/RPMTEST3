'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Video.module.css';
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
      <section className={styles.videoHeader} id="videoHeader">
        <h1>VIDEO</h1>
        <p>Psychedelia from graphic and video perspective</p>
      </section>

      {/* Sekcja treści biografii */}
      <section className={styles.videoContent}>
			<h2>Shadows (2025)</h2>
				<iframe width="100%" height="596" src="https://www.youtube.com/embed/66xdbXxHcUs?si=IPntHJ29XHdCoo7w"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					
					<br></br><br></br>

			<h2>Voice of the Mushroom (2025)</h2>
				<iframe width="100%" height="596" src="https://www.youtube.com/embed/wc5UhWXm3To?si=E1Ht0MKsYudtb-od" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


				
      </section>
      <Footer />

    </>
  );
}
