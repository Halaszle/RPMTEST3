'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/PressKit.module.css';
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
      <section className={styles.PressKitHeader} id="PressKitHeader">
        <h1>PRESS KIT</h1>
        <p>Media information and resources</p>
      </section>

      {/* Sekcja treści biografii */}
      <section className={styles.PressKitContent}>
			<div className={styles.mediaresources}>
				<h2>PRESS PACK</h2>
					<p>Materials, photos, bios and press releases</p>
						<a href="https://drive.google.com/drive/folders/1ID5AlEBFTkSIsvJIKcwBi2cieGxV3wiz?usp=drive_link" className={styles.btnlarge}>Complete Press Pack (zip) →</a>
							<br></br><br></br>
				<h3>MEDIA RESOURCES</h3>	

				
				<div className={styles.ResourceSection}>
					<span>INFO + BIO</span>
						<div className={styles.ButtonGroup}>
							<a href="https://drive.google.com/drive/folders/1ID5AlEBFTkSIsvJIKcwBi2cieGxV3wiz?usp=drive_link" className={styles.btn}>Info & Bio (pdf) →</a>						
						</div>				
				</div>
<br></br>
				<div className={styles.ResourceSection}>
					<span>LOGO</span>
						<div className={styles.ButtonGroup}>
							<a href="https://drive.google.com/drive/folders/18Nuz46UN0yRscNfz8smDdKwMzNANplJK?usp=drive_link" className={styles.btn}>Logo (png) →</a>		
							<a href="https://drive.google.com/drive/folders/18Nuz46UN0yRscNfz8smDdKwMzNANplJK?usp=drive_link" className={styles.btn}>Logo (svg) →</a>	
							<a href="https://drive.google.com/drive/folders/18Nuz46UN0yRscNfz8smDdKwMzNANplJK?usp=drive_link" className={styles.btn}>Logo (pdf) →</a>								
						</div>				
				</div>
<br></br>
				<div className={styles.ResourceSection}>
					<span>PHOTOS</span>
						<div className={styles.ButtonGroup}>
							<a href="https://drive.google.com/drive/folders/1iy5zai1PuzJAPU9yBMxzCJEdjL7VYWvM?usp=drive_link" className={styles.btn}>Band (zip) →</a>						
						</div>				
				</div>
<br></br>
				<div className={styles.ResourceSection}>
					<span>ALBUM COVERS</span>
						<div className={styles.ButtonGroup}>
							<a href="https://drive.google.com/drive/folders/14KuU57FvF3hn5d9jWSx4CPO9iInOUdnH?usp=drive_link" className={styles.btn}>Album covers (zip) →</a>						
						</div>				
				</div>
<br></br>
				<div className={styles.ResourceSection}>
					<span>LINKS</span>
						<div className={styles.ButtonGroup}>
							<a href="https://www.facebook.com/redpinemushroom" className={styles.btn}>Facebook →</a>		
							<a href="https://instagram.com/redpinemushroomofficial" className={styles.btn}>Instagram →</a>	
							<a href="https://www.youtube.com/@redpinemushroom" className={styles.btn}>YouTube →</a>		
							<a href="https://redpinemushroom.bandcamp.com/" className={styles.btn}>Bandcamp →</a>	
							<a href="https://open.spotify.com/artist/1xwwutIpfyNvuVyWYXw2Gr?si=odDG0CRnQgC0MWwD9RCu5A" className={styles.btn}>Spotify →</a>									
						</div>				
				</div>
<br></br>

			
			</div>					
      </section>
      <Footer />

    </>
  );
}
