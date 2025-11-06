import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const AddRecipe = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    category: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Tarif eklemek için giriş yapmalısınız");
        return;
      }

      const ingredients = formData.ingredients.split('\n').filter(i => i.trim());
      const instructions = formData.instructions.split('\n').filter(i => i.trim());

      const { error } = await supabase
        .from('recipes')
        .insert({
          user_id: user.id,
          title: formData.title,
          description: formData.description,
          image_url: imagePreview || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=533&fit=crop",
          prep_time: formData.prepTime,
          cook_time: formData.cookTime,
          servings: formData.servings,
          category: formData.category,
          ingredients: ingredients,
          instructions: instructions,
        });

      if (error) throw error;

      toast.success("Tarifınız başarıyla paylaşıldı!");
      setTimeout(() => {
        navigate("/explore");
      }, 1500);
    } catch (error: any) {
      toast.error("Tarif eklenirken bir hata oluştu: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="px-4 md:px-40 flex justify-center py-5">
        <div className="flex flex-col max-w-[960px] w-full">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h1 className="text-foreground tracking-light text-[32px] font-bold leading-tight min-w-72">
              Yeni Tarif Ekle
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <Label htmlFor="title" className="text-foreground text-base font-medium leading-normal pb-2">
                  Tarif Adı
                </Label>
                <Input
                  id="title"
                  placeholder="Tarifinizin adını girin"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <Label htmlFor="description" className="text-foreground text-base font-medium leading-normal pb-2">
                  Açıklama
                </Label>
                <Textarea
                  id="description"
                  placeholder="Tarifiniz hakkında kısa bir açıklama"
                  className="min-h-24"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <Label htmlFor="ingredients" className="text-foreground text-base font-medium leading-normal pb-2">
                  Malzemeler (Her satıra bir malzeme)
                </Label>
                <Textarea
                  id="ingredients"
                  placeholder="Malzemeleri listeleyin"
                  className="min-h-36"
                  value={formData.ingredients}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <Label htmlFor="instructions" className="text-foreground text-base font-medium leading-normal pb-2">
                  Talimatlar (Her satıra bir adım)
                </Label>
                <Textarea
                  id="instructions"
                  placeholder="Tarifin nasıl yapılacağını adım adım anlatın"
                  className="min-h-36"
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <Label htmlFor="prepTime" className="text-foreground text-base font-medium leading-normal pb-2">
                  Hazırlık Süresi (dakika)
                </Label>
                <Input
                  id="prepTime"
                  type="number"
                  placeholder="Süreyi girin"
                  value={formData.prepTime}
                  onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <Label htmlFor="cookTime" className="text-foreground text-base font-medium leading-normal pb-2">
                  Pişirme Süresi (dakika)
                </Label>
                <Input
                  id="cookTime"
                  type="number"
                  placeholder="Süreyi girin"
                  value={formData.cookTime}
                  onChange={(e) => setFormData({ ...formData, cookTime: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <Label htmlFor="servings" className="text-foreground text-base font-medium leading-normal pb-2">
                  Porsiyon Sayısı
                </Label>
                <Input
                  id="servings"
                  type="number"
                  placeholder="Porsiyon sayısını girin"
                  value={formData.servings}
                  onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <div className="flex flex-col min-w-40 flex-1">
                <Label htmlFor="category" className="text-foreground text-base font-medium leading-normal pb-2">
                  Kategori
                </Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Kategori seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ana-yemek">Ana Yemek</SelectItem>
                    <SelectItem value="ara-sicaklar">Ara Sıcaklar</SelectItem>
                    <SelectItem value="tatli">Tatlı</SelectItem>
                    <SelectItem value="corba">Çorba</SelectItem>
                    <SelectItem value="salata">Salata</SelectItem>
                    <SelectItem value="aperatif">Aperatif</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col p-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <div className="relative rounded-lg border-2 border-border overflow-hidden">
                  <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover" />
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => setImagePreview("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-border px-6 py-14">
                  <div className="flex max-w-[480px] flex-col items-center gap-2">
                    <p className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                      Fotoğrafları Yükle
                    </p>
                    <p className="text-foreground text-sm font-normal leading-normal max-w-[480px] text-center">
                      Tarifiniz için fotoğraflar yükleyin
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4" />
                    <span>Fotoğrafları Seç</span>
                  </Button>
                </div>
              )}
            </div>

            <div className="flex px-4 py-3 justify-end">
              <Button type="submit" className="bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813]">
                Tarifi Paylaş
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
