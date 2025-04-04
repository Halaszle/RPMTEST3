'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Contact.module.css';
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
        <title>Contact - Red Pine Mushroom</title>
        <meta name="description" content="Contact us - Red Pine Mushroom" />
      </Head>

      <Header />

      {/* Sekcja główna z efektem Parallax */}
      <section className={styles.ContactHeader} id="ContactHeader">
        <h1>CONTACT</h1>
        <p>Let&lsquo;s meet together</p>
      </section>

      {/* Sekcja treści biografii */}
      <section className={styles.ContactContent}>
		<h2>MANAGER / BOOKING</h2>
			<div className={styles.kontakty}>
				<h3>E-mail:</h3>
				<p>rpine.mushroom@gmail.com</p>
				<p>konrad.kislo@gmail.com</p>
			</div>
			<div className={styles.kontakty}>
				<h3>Phone:</h3>
				<p>+48 693262420</p>
				<p>+31 612459605</p>
			</div>			
		<br></br><br></br><br></br><br></br><br></br>
				
      </section>
      <Footer />

    </>
  );
}
