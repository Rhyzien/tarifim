import Header from "@/components/Header";
import RecipeCarousel from "@/components/RecipeCarousel";
import RecipeGrid from "@/components/RecipeGrid";

// Temporary mock data
const featuredRecipes = [
  {
    id: "1",
    title: "Fesleğenli Domatesli Makarna",
    author: "Ayşe Yılmaz",
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=225&fit=crop"
  },
  {
    id: "2",
    title: "Akdeniz Yeşillikleri Salatası",
    author: "Mehmet Demir",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=225&fit=crop"
  },
  {
    id: "3",
    title: "Mercimek Çorbası",
    author: "Elif Kaya",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=225&fit=crop"
  }
];

const popularRecipes = [
  {
    id: "4",
    title: "Kremalı Mantarlı Tavuk",
    author: "Ayşe Yılmaz",
    imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop"
  },
  {
    id: "5",
    title: "Fırında Sebzeli Kuzu",
    author: "Mehmet Demir",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop"
  },
  {
    id: "6",
    title: "Zeytinyağlı Enginar",
    author: "Elif Kaya",
    imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=300&h=300&fit=crop"
  }
];

const newRecipes = [
  {
    id: "7",
    title: "Ispanaklı Kiş",
    author: "Zeynep Can",
    imageUrl: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=300&h=300&fit=crop"
  },
  {
    id: "8",
    title: "Mısır Unlu Ekmek",
    author: "Ahmet Öztürk",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop"
  },
  {
    id: "9",
    title: "Yeşil Smoothie",
    author: "Selin Arslan",
    imageUrl: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=300&fit=crop"
  }
];

const recommendedRecipes = [
  {
    id: "10",
    title: "Avokado Tost",
    author: "Canan Aksoy",
    imageUrl: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=300&fit=crop"
  },
  {
    id: "11",
    title: "Chia Puding",
    author: "Emre Güven",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop"
  },
  {
    id: "12",
    title: "Yeşil Çaylı Kurabiye",
    author: "Deniz Yıldız",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=300&fit=crop"
  }
];

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
