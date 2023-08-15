import React from 'react'
import './style.css'
interface CategorySelectProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'art', label: 'Art' },
    { value: 'biography', label: 'Biography' },
    { value: 'computers', label: 'Computers' },
    { value: 'history', label: 'History' },
    { value: 'medical', label: 'Medical' },
    { value: 'poetry', label: 'Poetry' },
  ];

export default function Select({ value, onChange }: CategorySelectProps) {
  return (
    <div className="select-container">
      <select value={value} onChange={onChange} className="select">
      {categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
    </div>
  )
}
