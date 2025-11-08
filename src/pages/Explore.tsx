import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface SimpleRecipe {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

const Explore = () => {
  const [displayedRecipes, setDisplayedRecipes] = useState<SimpleRecipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);
  const itemsPerLoad = 4;

  useEffect(() => {
    loadInitial();
    
    // Reload recipes when user navigates back to this page
    const handleFocus = () => {
      setDisplayedRecipes([]);
      loadInitial();
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const loadInitial = async () => {
    try {
      const { data, error } = await supabase
        .from('recipes')
        .select(`
          *,
          profiles:user_id (name)
        `)
        .order('created_at', { ascending: false })
        .range(0, itemsPerLoad - 1);

      if (error) throw error;

      const formatted = (data || []).map((r: any) => ({
        id: r.id,
        title: r.title,
        author: r.profiles?.name || "Kullanıcı",
        imageUrl: r.image_url
      }));

      setDisplayedRecipes(formatted);
      setHasMore(formatted.length === itemsPerLoad);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error("Error loading recipes:", error);
      }
    }
  };

  useEffect(() => {
    const loadMore = async () => {
      if (!hasMore || isLoading) return;

      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('recipes')
          .select(`
            *,
            profiles:user_id (name)
          `)
          .order('created_at', { ascending: false })
          .range(displayedRecipes.length, displayedRecipes.length + itemsPerLoad - 1);

        if (error) throw error;

        const formatted = (data || []).map((r: any) => ({
          id: r.id,
          title: r.title,
          author: r.profiles?.name || "Kullanıcı",
          imageUrl: r.image_url
        }));

        if (formatted.length > 0) {
          setDisplayedRecipes(prev => [...prev, ...formatted]);
        }
        setHasMore(formatted.length === itemsPerLoad);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error("Error loading more recipes:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [displayedRecipes, hasMore, isLoading]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-foreground tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            Akışınız
          </h2>
          
          {displayedRecipes.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Henüz tarif eklenmemiş. İlk tarifi siz ekleyin!</p>
            </div>
          )}
          
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
                      <Button className="bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813]">
                        Tarifi Görüntüle
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div ref={observerTarget} className="flex justify-center py-8">
            {isLoading && (
              <div className="animate-pulse text-muted-foreground">Yükleniyor...</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
