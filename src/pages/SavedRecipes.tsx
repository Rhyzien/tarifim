import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getRecipeById, Recipe } from "@/data/mockRecipes";
import { Search } from "lucide-react";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    const recipes = savedIds.map((id: string) => getRecipeById(id)).filter(Boolean) as Recipe[];
    setSavedRecipes(recipes);
  }, []);

  const filteredRecipes = savedRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || recipe.title.toLowerCase().includes(categoryFilter);
    
    let matchesDate = true;
    if (dateFilter === "recent") {
      // Simulate recent filter
      matchesDate = Math.random() > 0.5;
    } else if (dateFilter === "old") {
      matchesDate = Math.random() > 0.5;
    }
    
    return matchesSearch && matchesCategory && matchesDate;
  });

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
                <div className="text-muted-foreground flex border-none bg-secondary items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <Search className="w-6 h-6" />
                </div>
                <Input
                  placeholder="Tarif ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-l-none border-l-0 pl-2"
                />
              </div>
            </label>
          </div>

          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Kategoriler</SelectItem>
                <SelectItem value="ana-yemek">Ana Yemek</SelectItem>
                <SelectItem value="ara-sicaklar">Ara Sıcaklar</SelectItem>
                <SelectItem value="tatli">Tatlı</SelectItem>
                <SelectItem value="corba">Çorba</SelectItem>
                <SelectItem value="salata">Salata</SelectItem>
                <SelectItem value="aperatif">Aperatif</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Paylaşım Tarihi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Tarihler</SelectItem>
                <SelectItem value="recent">En Yeni</SelectItem>
                <SelectItem value="old">En Eski</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="p-4 text-center">
              <p className="text-muted-foreground">
                {searchQuery ? "Arama sonucu bulunamadı" : "Henüz kayıtlı tarifiniz yok"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {filteredRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipe/${recipe.id}`}
                  className="flex flex-col gap-3 pb-3"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg hover:scale-105 transition-transform"
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
                </Link>
              ))}
            </div>
          )}
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