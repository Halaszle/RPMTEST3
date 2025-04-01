"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/HeaderIndex.module.css";

export default function HeaderIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Sprawdza szerokość ekranu i ustawia tryb mobilny
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 884);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 100) {
        header.style.top = "-80px";
      } else {
        header.style.top = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header} id="header">
      <div className={styles.logo}>
        <a href="/">
          <Image src="/logo.png" alt="Logo" width={150} height={80} />
        </a>
      </div>

      {/* Menu dla komputerów */}
      {!isMobile && (
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/bio">BIO</a></li>
            <li className={styles.navItem}><a href="/music">MUSIC</a></li>
            <li className={styles.navItem}><a href="/video">VIDEO</a></li>
            <li className={styles.navItem}><a href="/presskit">PRESS KIT</a></li>
            <li className={styles.navItem}><a href="/contact">CONTACT</a></li>
            <li className={styles.flags}>
              <Image src="/eng.png" alt="English" width={25} height={20} />
            </li>
          </ul>
        </nav>
      )}

      {/* Hamburger menu ☰ dla urządzeń mobilnych */}
      {isMobile && (
        <>
          <button
            className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          <nav className={`${styles.mobileNav} ${isOpen ? styles.showNav : ""}`}>
		              <div className={styles.mobileLogo}>
              <a href="/">
                <Image src="/logo.png" alt="Logo" width={160} height={70} />
              </a>
            </div>
		  
            <ul>
              <li className={styles.navItem}><a href="/bio" onClick={() => setIsOpen(false)}>BIO</a></li>
              <li className={styles.navItem}><a href="/music" onClick={() => setIsOpen(false)}>MUSIC</a></li>
              <li className={styles.navItem}><a href="/video" onClick={() => setIsOpen(false)}>VIDEO</a></li>
              <li className={styles.navItem}><a href="/presskit" onClick={() => setIsOpen(false)}>PRESS KIT</a></li>
              <li className={styles.navItem}><a href="/contact" onClick={() => setIsOpen(false)}>CONTACT</a></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
