import Header from "@/components/Header";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SavedRecipe {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

const mockSavedRecipes: SavedRecipe[] = [
  {
    id: "saved-1",
    title: "Fırında Tavuk",
    author: "Zeynep Yılmaz",
    imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop"
  },
  {
    id: "saved-2",
    title: "Sebzeli Makarna",
    author: "Emre Demir",
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop"
  },
  {
    id: "saved-3",
    title: "Mercimek Çorbası",
    author: "Ayşe Can",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop"
  },
  {
    id: "saved-4",
    title: "Elmalı Turta",
    author: "Can Kaya",
    imageUrl: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=400&fit=crop"
  },
  {
    id: "saved-5",
    title: "Kremalı Mantar",
    author: "Elif Öztürk",
    imageUrl: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=400&fit=crop"
  }
];

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    const recipes = savedIds.map((id: string) => getRecipeById(id)).filter(Boolean);
    setSavedRecipes(recipes);
  }, []);

  const filteredRecipes = savedRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-foreground tracking-light text-[32px] font-bold leading-tight">
                Kaydedilen Tarifler
              </p>
              <p className="text-muted-foreground text-sm font-normal leading-normal">
                Daha sonra denemek için kaydettiğiniz tarifler burada.
              </p>
            </div>
          </div>

          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-muted-foreground flex border-none bg-muted items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <Search className="w-6 h-6" />
                </div>
                <Input
                  placeholder="Tarif ara..."
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-foreground focus:outline-0 focus:ring-0 border-none bg-muted focus:border-none h-full placeholder:text-muted-foreground px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>
          </div>

          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <Button variant="secondary" size="sm" className="h-8 gap-2">
              <span className="text-foreground text-sm font-medium">Kategori</span>
              <ChevronDown className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="sm" className="h-8 gap-2">
              <span className="text-foreground text-sm font-medium">Beslenme</span>
              <ChevronDown className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="sm" className="h-8 gap-2">
              <span className="text-foreground text-sm font-medium">Zaman</span>
              <ChevronDown className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {mockSavedRecipes.map((recipe) => (
              <div key={recipe.id} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ backgroundImage: `url("${recipe.imageUrl}")` }}
                />
                <div>
                  <p className="text-foreground text-base font-medium leading-normal">
                    {recipe.title}
                  </p>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    {recipe.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <p className="text-muted-foreground text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
            © 2024 Tarifim.com. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SavedRecipes;
