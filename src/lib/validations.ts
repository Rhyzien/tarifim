import { z } from 'zod';

export const recipeSchema = z.object({
  title: z.string().trim().min(3, "Başlık en az 3 karakter olmalıdır").max(200, "Başlık en fazla 200 karakter olabilir"),
  description: z.string().trim().max(1000, "Açıklama en fazla 1000 karakter olabilir"),
  ingredients: z.array(z.string().trim().min(1).max(200)).min(1, "En az bir malzeme eklemelisiniz").max(50, "En fazla 50 malzeme ekleyebilirsiniz"),
  instructions: z.array(z.string().trim().min(1).max(500)).min(1, "En az bir talimat eklemelisiniz").max(30, "En fazla 30 talimat ekleyebilirsiniz"),
  prepTime: z.string().regex(/^\d+$/, "Sadece sayı girebilirsiniz").refine(val => parseInt(val) > 0 && parseInt(val) < 1000, "Hazırlık süresi 1-999 dakika arasında olmalıdır"),
  cookTime: z.string().regex(/^\d+$/, "Sadece sayı girebilirsiniz").refine(val => parseInt(val) > 0 && parseInt(val) < 1000, "Pişirme süresi 1-999 dakika arasında olmalıdır"),
  servings: z.string().regex(/^\d+$/, "Sadece sayı girebilirsiniz").refine(val => parseInt(val) > 0 && parseInt(val) < 100, "Porsiyon sayısı 1-99 arasında olmalıdır"),
  category: z.string().min(1, "Kategori seçmelisiniz"),
});

export const commentSchema = z.object({
  comment: z.string().trim().min(1, "Yorum boş olamaz").max(500, "Yorum en fazla 500 karakter olabilir"),
});

export const profileSchema = z.object({
  name: z.string().trim().min(1, "İsim boş olamaz").max(100, "İsim en fazla 100 karakter olabilir"),
  bio: z.string().trim().max(500, "Biyografi en fazla 500 karakter olabilir"),
});

export const authSchema = z.object({
  email: z.string().trim().email("Geçerli bir e-posta adresi giriniz").max(255, "E-posta en fazla 255 karakter olabilir"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır").max(100, "Şifre en fazla 100 karakter olabilir"),
  name: z.string().trim().min(1, "İsim boş olamaz").max(100, "İsim en fazla 100 karakter olabilir").optional(),
});
