import Header from "@/components/Header";
import RecipeCarousel from "@/components/RecipeCarousel";
import RecipeGrid from "@/components/RecipeGrid";
import { mockRecipes } from "@/data/mockRecipes";

// Split recipes into categories
const featuredRecipes = mockRecipes.slice(0, 3).map(r => ({
  id: r.id,
  title: r.title,
  author: r.author,
  imageUrl: r.imageUrl
}));

const popularRecipes = mockRecipes.slice(3, 6).map(r => ({
  id: r.id,
  title: r.title,
  author: r.author,
  imageUrl: r.imageUrl
}));

const newRecipes = mockRecipes.slice(6, 9).map(r => ({
  id: r.id,
  title: r.title,
  author: r.author,
  imageUrl: r.imageUrl
}));

const recommendedRecipes = mockRecipes.slice(9, 12).map(r => ({
  id: r.id,
  title: r.title,
  author: r.author,
  imageUrl: r.imageUrl
}));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <h1 className="text-foreground text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            Bugün Ne Pişireceksiniz?
          </h1>
          
          <RecipeCarousel recipes={featuredRecipes} />
          
          <RecipeGrid title="Popüler Tarifler" recipes={popularRecipes} />
          
          <RecipeGrid title="Yeni Eklenenler" recipes={newRecipes} />
          
          <RecipeGrid title="Önerilenler" recipes={recommendedRecipes} />
        </div>
      </main>
    </div>
  );
};

export default Index;
