export interface Article {
    id: number;
    title: string;
    date: string;
    excerpt: string;
  }
export interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onClear: () => void;
  }
export interface HighlightedTextProps {
    text: string;
    searchTerm: string;
  }
export interface ArticleCardProps {
    article: Article;
    searchTerm: string;
  }
export interface SearchResultsProps {
    articles: Article[];
    searchTerm: string;
  }
