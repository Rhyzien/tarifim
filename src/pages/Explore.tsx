import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mockRecipes } from "@/data/mockRecipes";

const Explore = () => {
  const [displayedRecipes, setDisplayedRecipes] = useState(mockRecipes.slice(0, 4));
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreRecipes();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [displayedRecipes, hasMore]);

  const loadMoreRecipes = () => {
    const currentLength = displayedRecipes.length;
    const allRecipes = [...mockRecipes, ...mockRecipes, ...mockRecipes]; // Sonsuz scroll için tekrar et
    const moreRecipes = allRecipes.slice(currentLength, currentLength + 4);
    
    if (moreRecipes.length > 0) {
      setDisplayedRecipes(prev => [...prev, ...moreRecipes]);
    } else {
      setHasMore(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-foreground tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            Akışınız
          </h2>
          
          {displayedRecipes.map((recipe, index) => (
            <div key={`${recipe.id}-${index}`} className="p-4">
              <div className="flex flex-col items-stretch justify-start rounded-lg lg:flex-row lg:items-start">
                <Link to={`/recipe/${recipe.id}`} className="w-full">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ backgroundImage: `url("${recipe.imageUrl}")` }}
                  />
                </Link>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 lg:px-4">
                  <Link to={`/recipe/${recipe.id}`}>
                    <p className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] hover:text-accent transition-colors cursor-pointer">
                      {recipe.title}
                    </p>
                  </Link>
                  <div className="flex items-end gap-3 justify-between">
                    <p className="text-muted-foreground text-base font-normal leading-normal">
                      {recipe.author} tarafından
                    </p>
                    <Link to={`/recipe/${recipe.id}`}>
                      <Button
                        size="sm"
                        className="bg-accent text-foreground hover:bg-accent/80 font-medium"
                      >
                        Tarifi Görüntüle
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {hasMore && (
            <div ref={observerTarget} className="flex justify-center py-8">
              <div className="animate-pulse text-muted-foreground">Yükleniyor...</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Explore;
