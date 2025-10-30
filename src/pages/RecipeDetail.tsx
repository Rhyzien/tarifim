import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getRecipeById, Comment } from "@/data/mockRecipes";
import { toast } from "sonner";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = getRecipeById(id || "");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (recipe) {
      setComments(recipe.comments);
      // Check if recipe is saved
      const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
      setIsSaved(savedRecipes.includes(id));
    }
  }, [recipe, id]);

  const handleSaveRecipe = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    if (isSaved) {
      const updated = savedRecipes.filter((recipeId: string) => recipeId !== id);
      localStorage.setItem('savedRecipes', JSON.stringify(updated));
      setIsSaved(false);
      toast.success("Tarif kayıtlılardan çıkarıldı");
    } else {
      savedRecipes.push(id);
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      setIsSaved(true);
      toast.success("Tarif kaydedildi!");
    }
  };

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
          <div className="max-w-[960px] mx-auto text-center py-20">
            <h1 className="text-foreground text-[28px] font-bold mb-4">Tarif Bulunamadı</h1>
            <p className="text-muted-foreground mb-6">Aradığınız tarif mevcut değil.</p>
            <Button asChild>
              <Link to="/">Ana Sayfaya Dön</Link>
            </Button>
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
            {recipe.title}
          </h1>

          {/* Recipe Description */}
          <p className="text-foreground text-base font-normal leading-normal pb-3 pt-1 px-4">
            {recipe.description}
          </p>

          {/* Recipe Image */}
          <div className="w-full py-3">
            <div className="w-full aspect-[3/2] rounded-lg overflow-hidden">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Ingredients */}
          <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Malzemeler
          </h2>
          <div className="px-4 space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
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
            {recipe.steps.map((step) => (
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
          <Link to={`/profile/${recipe.authorId}`} className="flex items-center gap-4 px-4 min-h-[72px] py-2 hover:bg-muted/50 transition-colors rounded-lg cursor-pointer">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 shrink-0"
              style={{ backgroundImage: `url("${recipe.authorDetails.avatarUrl}")` }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-foreground text-base font-medium leading-normal">
                {recipe.authorDetails.name}
              </p>
              <p className="text-muted-foreground text-sm font-normal leading-normal">
                {recipe.authorDetails.recipeCount} tarif
              </p>
            </div>
          </Link>

          {/* Action Buttons */}
          <div className="flex gap-3 px-4 py-3">
            <Button 
              variant="secondary" 
              className="flex-1 sm:flex-none"
              onClick={handleSaveRecipe}
            >
              {isSaved ? "Kaydedildi ✓" : "Kaydet"}
            </Button>
            <Button className="flex-1 sm:flex-none bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813]">
              Paylaş
            </Button>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Yorumlar ({comments.length})
            </h2>
            
            {/* Comment Form */}
            <div className="px-4 py-3">
              <div className="flex flex-col gap-3">
                <Textarea
                  placeholder="Yorumunuzu yazın..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-end">
                  <Button 
                    onClick={() => {
                      if (newComment.trim()) {
                        setComments([
                          {
                            id: String(comments.length + 1),
                            author: "Siz",
                            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                            text: newComment,
                            time: "Az önce"
                          },
                          ...comments
                        ]);
                        setNewComment("");
                      }
                    }}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Yorum Yap
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-4 px-4 py-3">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 shrink-0"
                    style={{ backgroundImage: `url("${comment.avatarUrl}")` }}
                  />
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-foreground text-sm font-medium">
                        {comment.author}
                      </p>
                      <span className="text-muted-foreground text-xs">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-foreground text-sm leading-normal">
                      {comment.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;
