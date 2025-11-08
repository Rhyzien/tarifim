import { useState, useEffect } from "react";
import Header from "@/components/Header";
import RecipeCarousel from "@/components/RecipeCarousel";
import RecipeGrid from "@/components/RecipeGrid";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState<any[]>([]);
  const [popularRecipes, setPopularRecipes] = useState<any[]>([]);
  const [newRecipes, setNewRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecipes();
    
    // Reload recipes when user navigates back to this page
    const handleFocus = () => {
      loadRecipes();
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const loadRecipes = async () => {
    try {
      const { data: recipes, error } = await supabase
        .from('recipes')
        .select(`
          *,
          profiles:user_id (
            name
          )
        `)
        .order('created_at', { ascending: false })
        .limit(12);

      if (error) throw error;

      const formattedRecipes = (recipes || []).map((r: any) => ({
        id: r.id,
        title: r.title,
        author: r.profiles?.name || "Kullanıcı",
        imageUrl: r.image_url
      }));

      // Split into categories
      setFeaturedRecipes(formattedRecipes.slice(0, 3));
      setPopularRecipes(formattedRecipes.slice(3, 6));
      setNewRecipes(formattedRecipes.slice(6, 9));
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error("Error loading recipes:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
          <div className="max-w-[960px] mx-auto text-center py-20">
            <p className="text-muted-foreground">Tarifler yükleniyor...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <h1 className="text-foreground text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            Bugün Ne Pişireceksiniz?
          </h1>
          
          {featuredRecipes.length > 0 && <RecipeCarousel recipes={featuredRecipes} />}
          {popularRecipes.length > 0 && <RecipeGrid title="Popüler Tarifler" recipes={popularRecipes} />}
          {newRecipes.length > 0 && <RecipeGrid title="Yeni Eklenenler" recipes={newRecipes} />}
          
          {featuredRecipes.length === 0 && popularRecipes.length === 0 && newRecipes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Henüz tarif eklenmemiş. İlk tarifi siz ekleyin!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
