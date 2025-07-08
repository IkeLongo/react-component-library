import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Skeleton } from '@heroui/skeleton';

export interface TextCarouselProps {
  texts: string[];
  speed?: number;
  className?: string;
  textClassName?: string;
  gap?: string;
  highlightWords?: string[];
  highlightColor?: string;
  showLottie?: boolean;
  lottieSize?: number;
  lottieFiles?: string[]; // Array of Lottie file paths
}

export default function TextCarousel({
  texts = ["Your text here.", "Your text here.", "Your text here.", "Your text here."],
  speed = 5,
  className = "",
  textClassName = "",
  gap = "4rem",
  highlightWords = ["here", "here", "here"],
  highlightColor = "text-yellow-500",
  showLottie = false,
  lottieSize = 50,
  lottieFiles = [
    "/assets/bench-press.lottie",
    "/assets/deadlift.lottie", 
    "/assets/squat.lottie"
  ]
}: TextCarouselProps) {

  // Function to highlight specific words
  const highlightText = (text: string) => {
    let highlightedText = text;
    
    highlightWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="${highlightColor}">${word}</span>`);
    });
    
    return highlightedText;
  };

  // Create items with text and lotties interspersed
  const createItems = () => {
    const items: React.ReactElement[] = [];
    
    texts.forEach((text, index) => {
      // Add text
      items.push(
        <span
          key={`text-${index}`}
          className={`inline-block ${textClassName}`}
          style={{ marginLeft: gap, marginRight: gap }}
          dangerouslySetInnerHTML={{ __html: highlightText(text) }}
        />
      );
      
      // Add Lottie if available and showLottie is true, otherwise show Skeleton
      if (showLottie && index < lottieFiles.length) {
        items.push(
          <span
            key={`lottie-${index}`}
            style={{ 
              marginLeft: gap, 
              marginRight: gap, 
              display: 'inline-flex', 
              alignItems: 'center' 
            }}
          >
            <DotLottieReact
              src={lottieFiles[index]}
              loop
              autoplay
              style={{ width: lottieSize, height: lottieSize }}
            />
          </span>
        );
      } else {
        // Use Skeleton as default placeholder
        items.push(
          <span
            key={`skeleton-${index}`}
            style={{ 
              marginLeft: gap, 
              marginRight: gap, 
              display: 'inline-flex', 
              alignItems: 'center' 
            }}
          >
            <Skeleton className="flex rounded-full w-12 h-12" />
          </span>
        );
      }
    });
    
    return items;
  };

  const items = createItems();
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex whitespace-nowrap animate-scroll items-center"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedItems}
      </div>
    </div>
  );
}
