'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Bio.module.css';
import globals from '../components/globals.css';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';


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
      <Header />
	<main>
      {/* Sekcja główna z efektem Parallax */}
      <header className={styles.bioHeader} id="bioHeader">
        <h1>BIO</h1>
        <p>A Post-Rock Journey Through the Depths of Psychedelia and Dreams</p>
      </header>
		<article className={styles.bioContent}>
      {/* Sekcja treści biografii */}
		<section>
			<h2>Formation and Early Days</h2>
			<p>Red Pine Mushroom is a Polish trio that masterfully blends elements of post-rock, psychedelic rock, and desert rock. The band consists of Konrad Kisło on drums, Michał Czarnecki on electric guitar, and Michał Kosałka on bass. Their musical journey began in 2018, rooted in a long-standing friendship dating back to their school years. During this time, they started performing their first concerts, laying the foundation for their artistic collaboration.</p>
		</section>
		<section>	
			<h2>Reunion and Debut EP &quot;Vagrant&quot;</h2>
			<p>After a hiatus, the trio reunited in 2022, fueled by a renewed passion for creating original music. This led to the release of their debut EP, Vagrant—a project born out of pure dedication, featuring a cohesive sound while allowing each member&apos;s individuality to shine. The reception of Vagrant exceeded their expectations, opening the door for a tour across major Polish cities. Their live performances received high praise, further solidifying their presence in the music scene.</p>
		</section>
        <section>
			<h2>Exploration with &quot;Enki&quot;</h2>
			<p>Building on the success of Vagrant, Red Pine Mushroom embarked on a more introspective journey with their second EP, Enki. This release delved deeper into personal and artistic exploration, reflecting the band’s growth and maturity.</p>
		</section>
		<section>
			<h2>Upcoming EP &quot;The Mine Valley&quot;</h2>
			<p>Currently, the band is finalizing their next EP, The Mine Valley. While details remain under wraps, anticipation is high for what promises to be another captivating chapter in their discography.</p>
		</section>
		<section>
			<h2>Musical Style and Influences</h2>
			<p>Red Pine Mushroom’s sound is characterized by atmospheric textures, dynamic rhythms, and evocative melodies. Their music invites listeners on a journey through expansive sonic landscapes, drawing inspiration from both the vastness of the desert and the depths of human emotion. The band cites Pink Floyd, Tides From Nebula, and Earthless as some of their biggest influences, blending these inspirations into a unique, immersive sound.</p>
		</section>
        <section>
			<h2>Live Performances</h2>
			<p>Known for their mesmerizing live shows, Red Pine Mushroom captivates audiences with their energy and musicianship. Each performance is unique—driven by the band&apos;s love for sonic experimentation and improvisation. No two concerts are ever the same, making every show an intense and unpredictable musical experience.</p>
		</section>
		<section>
			<h2>Looking Ahead</h2>
			<p>With The Mine Valley on the horizon, Red Pine Mushroom continues to push the boundaries of their artistry. Their commitment to exploration and authenticity makes them a band worth following as they carve out their own unique space in the post-rock world.</p>
		</section>
	  </article>
	  <br/>
	</main>  
    <Footer />
    </>
  );
}
