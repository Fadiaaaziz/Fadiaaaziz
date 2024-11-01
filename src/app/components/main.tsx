'use client';

import { useState, useMemo } from 'react';
import { articles } from '../data/artices';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredArticles = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return term === '' ? articles : articles.filter(article => 
      article.title.toLowerCase().includes(term) ||
      article.excerpt.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Search Articles</h1>
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onClear={() => setSearchTerm('')}
        />
        
        <SearchResults 
          articles={filteredArticles}
          searchTerm={searchTerm}
        />
      </div>
    </main>
  );
}