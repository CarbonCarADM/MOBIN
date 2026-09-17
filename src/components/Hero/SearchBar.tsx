"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const bikes = [
  { id: 'himiway-cruiser', name: 'Himiway Escape Pro', year: '2024', price: 'R$18.990' },
  { id: 'himiway-cruiser', name: 'Himiway Cruiser', year: '2023', price: 'R$22.500' },
  { id: 'himiway-cruiser', name: 'Himiway Zebra', year: '2024', price: 'R$26.900' },
  { id: 'ado-a20f', name: 'Himiway Rambler', year: '2024', price: 'R$31.500' },
  { id: 'ado-a20f', name: 'Himiway Cobra', year: '2024', price: 'R$34.900' },
  { id: 'ado-a20f', name: 'Himiway Big Dog', year: '2023', price: 'R$28.700' },
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return bikes.filter(
      (bike) =>
        bike.name.toLowerCase().includes(q) ||
        bike.year.includes(q) ||
        bike.price.toLowerCase().includes(q)
    );
  }, [query]);

  function handleSelect() {
    setQuery('');
    setIsOpen(false);
  }

  return (
    <div className={styles.searchContainer}>
      <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
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
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </form>

      {isOpen && query.trim() && (
        <div className={styles.searchDropdown}>
          {results.length > 0 ? (
            <ul className={styles.searchResults}>
              {results.map((bike) => (
                <li key={bike.id + bike.name}>
                  <Link
                    href={`/bike/${bike.id}`}
                    className={styles.searchResult}
                    onClick={handleSelect}
                  >
                    <div className={styles.resultName}>{bike.name}</div>
                    <div className={styles.resultMeta}>
                      {bike.year} • {bike.price}
                    </div>
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
        <div
          className={styles.searchBackdrop}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
