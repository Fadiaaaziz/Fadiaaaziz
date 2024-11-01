import { Article, SearchResultsProps } from '@/types/article';
import ArticleCard from './ArticleCard';



export default function SearchResults({ 
  articles, 
  searchTerm 
}: SearchResultsProps) {
  return (
    <div>
      <div className="text-sm text-gray-600 mb-4">
        {articles.length} {articles.length === 1 ? 'post' : 'posts'} found
      </div>
      <div className="space-y-4">
        {articles.map(article => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </div>
  );
}