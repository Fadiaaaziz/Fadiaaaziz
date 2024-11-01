import { ArticleCardProps } from '@/types/article';
import HighlightedText from './HighlightedText';



export default function ArticleCard({ 
  article, 
  searchTerm 
}: ArticleCardProps) {
  return (
    <article className="p-4 border rounded-lg mb-4 hover:shadow-md transition-all">
      <h2 className="text-xl font-semibold mb-2">
        <HighlightedText text={article.title} searchTerm={searchTerm} />
      </h2>
      <div className="text-sm text-gray-500 mb-2">{article.date}</div>
      <p className="text-gray-700">
        <HighlightedText text={article.excerpt} searchTerm={searchTerm} />
      </p>
    </article>
  );
}