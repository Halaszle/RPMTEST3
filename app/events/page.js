'use client';
import { useState } from 'react';
import styles from './Events.module.css';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ title: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return;
    setEvents([...events, { ...form, id: Date.now() }]);
    setForm({ title: '', date: '' });
  };

  const now = new Date();

  const upcomingEvents = events.filter(e => new Date(e.date) >= now);
  const pastEvents = events.filter(e => new Date(e.date) < now);

  return (
    <main className={styles.container}>
      <h1>Wydarzenia</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Tytuł wydarzenia"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Dodaj wydarzenie</button>
      </form>

      <section>
        <h2>Nadchodzące</h2>
        {upcomingEvents.length === 0 && <p>Brak nadchodzących wydarzeń.</p>}
        <ul>
          {upcomingEvents.map(event => (
            <li key={event.id}>{event.title} — {new Date(event.date).toLocaleDateString()}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Ukończone</h2>
        {pastEvents.length === 0 && <p>Brak ukończonych wydarzeń.</p>}
        <ul>
          {pastEvents.map(event => (
            <li key={event.id}>{event.title} — {new Date(event.date).toLocaleDateString()}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
