import React from 'react'
import './style.css'
interface CategorySelectProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

  const categories = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'newest', label: 'Newest' },
    
  ];


function Sort({ value, onChange }: CategorySelectProps) {
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

export default Sort