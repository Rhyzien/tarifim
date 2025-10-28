import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeedRecipe {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

const mockFeedRecipes: FeedRecipe[] = [
  {
    id: "feed-1",
    title: "Lezzetli Vegan Takolar",
    author: "Clara Bennett",
    imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&h=450&fit=crop"
  },
  {
    id: "feed-2",
    title: "Ev Yapımı Pestolu Makarna",
    author: "Leo Harper",
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=450&fit=crop"
  },
  {
    id: "feed-3",
    title: "Acılı Tavuk Köri",
    author: "Amelia Foster",
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=450&fit=crop"
  },
  {
    id: "feed-4",
    title: "Çikolatalı Kurabiyeler",
    author: "Owen Mitchell",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=450&fit=crop"
  }
];

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-foreground tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            Akışınız
          </h2>
          
          {mockFeedRecipes.map((recipe) => (
            <div key={recipe.id} className="p-4">
              <div className="flex flex-col items-stretch justify-start rounded-lg lg:flex-row lg:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: `url("${recipe.imageUrl}")` }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 lg:px-4">
                  <p className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">
                    {recipe.title}
                  </p>
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
        </div>
      </main>
    </div>
  );
};

export default Explore;
