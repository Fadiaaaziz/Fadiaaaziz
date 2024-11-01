import { HighlightedTextProps } from "@/types/article";

  
  export default function HighlightedText({ 
    text, 
    searchTerm 
  }: HighlightedTextProps) {
    if (!searchTerm.trim()) return <>{text}</>;
    
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    
    return (
      <>
        {parts.map((part, i) => (
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <span key={i} className="bg-yellow-200">{part}</span>
          ) : (
            part
          )
        ))}
      </>
    );
  }