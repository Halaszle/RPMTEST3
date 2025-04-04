'use client';

import { useMemo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/Events.module.css';

const events = [
  {
    title: 'Koncert w Krakowie',
    date: '2025-04-20',
    location: 'Klub RE, Kraków',
  },
  {
    title: 'Festiwal PsyTrance',
    date: '2025-06-01',
    location: 'Las pod Warszawą',
  },
  {
    title: 'Open Stage',
    date: '2025-03-01',
    location: 'Katofonia, Katowice',
  },
];

export default function EventsPage() {
  const today = useMemo(() => new Date(), []);

  const upcomingEvents = events.filter(event => new Date(event.date) >= today);
  const pastEvents = events.filter(event => new Date(event.date) < today);

  return (
    <>
      <Header />

      <main className={styles.container}>
        <h1>Wydarzenia</h1>

        <section>
          <h2>Nadchodzące</h2>
          {upcomingEvents.length > 0 ? (
            <ul className={styles.eventList}>
              {upcomingEvents.map((e, i) => (
                <li key={i} className={styles.eventItem}>
                  <strong>{e.title}</strong><br />
                  <span>{e.date} – {e.location}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Brak nadchodzących wydarzeń.</p>
          )}
        </section>

        <section>
          <h2>Ukończone</h2>
          {pastEvents.length > 0 ? (
            <ul className={styles.eventList}>
              {pastEvents.map((e, i) => (
                <li key={i} className={styles.eventItem}>
                  <strong>{e.title}</strong><br />
                  <span>{e.date} – {e.location}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Jeszcze nie zagraliśmy nic w tym roku 😉</p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
