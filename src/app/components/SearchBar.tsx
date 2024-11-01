import { ChangeEvent } from 'react';
import { Search, X } from 'lucide-react';
import { SearchBarProps } from '@/types/article';

export default function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  onClear 
}: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative w-full mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search articles..."
        className="w-full p-3 border rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        {searchTerm ? (
          <button 
            onClick={onClear}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        ) : (
          <Search size={18} className="text-gray-400" />
        )}
      </div>
    </div>
  );
}
