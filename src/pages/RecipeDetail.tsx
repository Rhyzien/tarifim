import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Temporary mock data - will be replaced with real data later
const mockRecipe = {
  id: "1",
  title: "Fırında Sebzeli Tavuk",
  description: "Bu tarif, sebzelerle zenginleştirilmiş, fırında pişirilmiş tavuğun lezzetli ve sağlıklı bir versiyonudur. Hem pratik hem de doyurucu olan bu yemek, çalışan anneler için idealdir.",
  imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=533&fit=crop",
  ingredients: [
    "1 kg tavuk but veya göğüs",
    "2 adet patates",
    "2 adet havuç",
    "1 adet soğan",
    "2 adet biber (kırmızı ve yeşil)",
    "Zeytinyağı, tuz, karabiber, kekik"
  ],
  steps: [
    { number: 1, description: "Sebzeleri iri iri doğrayın." },
    { number: 2, description: "Tavuk ve sebzeleri bir fırın kabına yerleştirin." },
    { number: 3, description: "Zeytinyağı, tuz, karabiber ve kekik ile tatlandırın." },
    { number: 4, description: "180 derecede ısıtılmış fırında 45-50 dakika pişirin." },
    { number: 5, description: "Sıcak servis yapın." }
  ],
  author: {
    name: "Elif Yılmaz",
    recipeCount: 15,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
};

const RecipeDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          {/* Breadcrumb */}
          <div className="p-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-muted-foreground hover:text-foreground">
                      Ana Sayfa
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground">Tarifler</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Recipe Title */}
          <h1 className="text-foreground text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            {mockRecipe.title}
          </h1>

          {/* Recipe Description */}
          <p className="text-foreground text-base font-normal leading-normal pb-3 pt-1 px-4">
            {mockRecipe.description}
          </p>

          {/* Recipe Image */}
          <div className="w-full py-3">
            <div className="w-full aspect-[3/2] rounded-lg overflow-hidden">
              <img 
                src={mockRecipe.imageUrl} 
                alt={mockRecipe.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Ingredients */}
          <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Malzemeler
          </h2>
          <div className="px-4 space-y-3">
            {mockRecipe.ingredients.map((ingredient, index) => (
              <label key={index} className="flex gap-x-3 items-start cursor-pointer">
                <Checkbox className="mt-0.5" />
                <p className="text-foreground text-base font-normal leading-normal">
                  {ingredient}
                </p>
              </label>
            ))}
          </div>

          {/* Recipe Steps */}
          <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Tarif
          </h2>
          <div className="space-y-2">
            {mockRecipe.steps.map((step) => (
              <div key={step.number} className="flex items-center gap-4 px-4 min-h-[72px] py-2">
                <div className="flex items-center justify-center rounded-lg bg-secondary shrink-0 size-12">
                  <span className="text-foreground text-lg font-medium">{step.number}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-foreground text-base font-medium leading-normal">
                    {step.number}. Adım
                  </p>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Author */}
          <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Yazar
          </h2>
          <div className="flex items-center gap-4 px-4 min-h-[72px] py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 shrink-0"
              style={{ backgroundImage: `url("${mockRecipe.author.avatarUrl}")` }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-foreground text-base font-medium leading-normal">
                {mockRecipe.author.name}
              </p>
              <p className="text-muted-foreground text-sm font-normal leading-normal">
                {mockRecipe.author.recipeCount} tarif
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 px-4 py-3">
            <Button variant="secondary" className="flex-1 sm:flex-none">
              Kaydet
            </Button>
            <Button className="flex-1 sm:flex-none bg-accent hover:bg-accent/90 text-accent-foreground">
              Paylaş
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;
