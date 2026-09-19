'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { defaultData } from '@/lib/data';
import type { Bike } from '@/lib/data';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [bikes, setBikes] = useState<Bike[]>(defaultData.bikes);

  useEffect(() => {
    fetch('/api/admin/data')
      .then(r => r.json())
      .then(d => { if (d?.bikes) setBikes(d.bikes); })
      .catch(() => {});
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return bikes.filter(
      b =>
        b.name.toLowerCase().includes(q) ||
        b.year.includes(q) ||
        b.price.toLowerCase().includes(q)
    );
  }, [query, bikes]);

  function handleSelect() {
    setQuery('');
    setIsOpen(false);
  }

  return (
    <div className={styles.searchContainer}>
      <form className={styles.search} onSubmit={e => e.preventDefault()}>
        <svg
          className={styles.searchIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Buscar bikes..."
          value={query}
          onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
        />
      </form>

      {isOpen && query.trim() && (
        <div className={styles.searchDropdown}>
          {results.length > 0 ? (
            <ul className={styles.searchResults}>
              {results.map(bike => (
                <li key={bike.id + bike.name}>
                  <Link
                    href={`/bike/${bike.id}`}
                    className={styles.searchResult}
                    onClick={handleSelect}
                  >
                    <div className={styles.resultName}>{bike.name}</div>
                    <div className={styles.resultMeta}>{bike.year} • R${bike.price}</div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.noResults}>Nenhuma bike encontrada</div>
          )}
        </div>
      )}

      {isOpen && (
        <div className={styles.searchBackdrop} onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
