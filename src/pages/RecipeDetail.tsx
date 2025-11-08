import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ShareDialog from "@/components/ShareDialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { commentSchema } from "@/lib/validations";

interface Comment {
  id: string;
  comment: string;
  created_at: string;
  profiles: { name: string; avatar_url: string };
}

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string>("");

  useEffect(() => {
    loadRecipe();
    loadComments();
    checkIfSaved();
    getCurrentUser();
  }, [id]);

  const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) setCurrentUserId(user.id);
  };

  const loadRecipe = async () => {
    try {
      const { data, error } = await supabase
        .from('recipes')
        .select(`
          *,
          profiles:user_id (name, avatar_url)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      setRecipe(data);
    } catch (error) {
      console.error("Error loading recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('recipe_comments')
        .select(`
          id,
          comment,
          created_at,
          profiles:user_id (name, avatar_url)
        `)
        .eq('recipe_id', id)
        .order('created_at', { ascending: false});

      if (error) throw error;
      setComments((data as any) || []);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const checkIfSaved = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('saved_recipes')
        .select('id')
        .eq('user_id', user.id)
        .eq('recipe_id', id)
        .maybeSingle();

      setIsSaved(!!data);
    } catch (error) {
      console.error("Error checking saved status:", error);
    }
  };

  const handleSaveRecipe = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Kaydetmek için giriş yapmalısınız");
        return;
      }

      if (isSaved) {
        await supabase
          .from('saved_recipes')
          .delete()
          .eq('user_id', user.id)
          .eq('recipe_id', id);
        setIsSaved(false);
        toast.success("Tarif kayıtlılardan çıkarıldı");
      } else {
        await supabase
          .from('saved_recipes')
          .insert({ user_id: user.id, recipe_id: id });
        setIsSaved(true);
        toast.success("Tarif kaydedildi!");
      }
    } catch (error: any) {
      toast.error("Hata: " + error.message);
    }
  };

  const handleAddComment = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Yorum yapmak için giriş yapmalısınız");
        return;
      }

      // Validate comment
      const validationResult = commentSchema.safeParse({ comment: newComment });
      if (!validationResult.success) {
        toast.error(validationResult.error.errors[0].message);
        return;
      }

      await supabase
        .from('recipe_comments')
        .insert({
          recipe_id: id,
          user_id: user.id,
          comment: newComment.trim()
        });

      setNewComment("");
      loadComments();
      toast.success("Yorumunuz eklendi!");
    } catch (error: any) {
      toast.error("Yorum eklenemedi: " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
          <div className="max-w-[960px] mx-auto text-center py-20">
            <p className="text-muted-foreground">Yükleniyor...</p>
          </div>
        </main>
      </div>
    );
  }

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

          <h1 className="text-foreground text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            {recipe.title}
          </h1>

          <p className="text-foreground text-base font-normal leading-normal pb-3 pt-1 px-4">
            {recipe.description}
          </p>

          <div className="flex gap-2 px-4 py-3">
            {recipe.prep_time && <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-secondary pl-3 pr-3">
              <p className="text-foreground text-sm font-medium leading-normal">⏱️ {recipe.prep_time} dk hazırlık</p>
            </div>}
            {recipe.cook_time && <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-secondary pl-3 pr-3">
              <p className="text-foreground text-sm font-medium leading-normal">🔥 {recipe.cook_time} dk pişirme</p>
            </div>}
            {recipe.servings && <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-secondary pl-3 pr-3">
              <p className="text-foreground text-sm font-medium leading-normal">👨‍👩‍👧‍👦 {recipe.servings} kişilik</p>
            </div>}
            {recipe.category && <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-secondary pl-3 pr-3">
              <p className="text-foreground text-sm font-medium leading-normal">🍽️ {recipe.category}</p>
            </div>}
          </div>

          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mx-4 max-w-[928px]"
            style={{ backgroundImage: `url("${recipe.image_url}")` }}
          />

          <div className="flex items-center gap-4 bg-background px-4 min-h-[72px] py-2">
            <Link to={`/profile/${recipe.user_id}`} className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-[72px] w-[72px]"
                style={{ backgroundImage: `url("${recipe.profiles?.avatar_url || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400'}")` }}
              />
              <div>
                <p className="text-foreground text-base font-medium leading-normal">
                  {recipe.profiles?.name || "Kullanıcı"}
                </p>
              </div>
            </Link>
            <div className="flex-1" />
            <Button
              onClick={handleSaveRecipe}
              variant={isSaved ? "secondary" : "default"}
              className={!isSaved ? "bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813]" : ""}
            >
              {isSaved ? "Kaydedildi" : "Kaydet"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsShareOpen(true)}
            >
              Paylaş
            </Button>
          </div>

          <div className="p-4">
            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Malzemeler
            </h2>
            <ul className="pl-8 space-y-2">
              {(recipe.ingredients || []).map((ingredient: string, index: number) => (
                <li key={index} className="text-foreground text-base list-disc">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4">
            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Talimatlar
            </h2>
            <ol className="pl-8 space-y-3">
              {(recipe.instructions || []).map((step: string, index: number) => (
                <li key={index} className="text-foreground text-base list-decimal">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="p-4">
            <h3 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Yorumlar ({comments.length})
            </h3>
            
            {currentUserId && (
              <div className="px-4 py-3">
                <Textarea
                  placeholder="Yorumunuzu yazın..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-24 mb-2"
                  maxLength={500}
                />
                <Button
                  onClick={handleAddComment}
                  className="bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813]"
                >
                  Yorum Yap
                </Button>
              </div>
            )}

            <div className="px-4 space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3 py-3 border-b border-border">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10"
                    style={{ backgroundImage: `url("${comment.profiles?.avatar_url || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400'}")` }}
                  />
                  <div className="flex-1">
                    <p className="text-foreground text-sm font-medium">
                      {comment.profiles?.name || "Kullanıcı"}
                    </p>
                    <p className="text-foreground text-sm">{comment.comment}</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {new Date(comment.created_at).toLocaleDateString('tr-TR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <ShareDialog
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        recipeTitle={recipe.title}
        recipeId={id || ""}
      />
    </div>
  );
};

export default RecipeDetail;
