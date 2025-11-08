import { supabase } from "@/integrations/supabase/client";

export type StorageBucket = 'recipe-images' | 'avatars';

export async function uploadImage(file: File, bucket: StorageBucket): Promise<string> {
  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Sadece resim dosyaları yüklenebilir (JPEG, PNG, WebP, GIF)');
  }
  
  // Validate file size (max 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error('Resim boyutu en fazla 5MB olabilir');
  }

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('Resim yüklemek için giriş yapmalısınız');
  }
  
  // Create unique filename
  const fileExt = file.name.split('.').pop()?.toLowerCase();
  const fileName = `${user.id}/${Date.now()}.${fileExt}`;
  
  // Upload to storage
  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, {
      cacheControl: '31536000',
      upsert: false
    });
  
  if (uploadError) throw uploadError;
  
  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);
  
  return publicUrl;
}

export async function deleteImage(url: string, bucket: StorageBucket): Promise<void> {
  try {
    // Extract filename from URL
    const urlParts = url.split('/');
    const fileName = urlParts.slice(-2).join('/'); // Get user_id/filename.ext
    
    const { error } = await supabase.storage
      .from(bucket)
      .remove([fileName]);
    
    if (error) throw error;
  } catch (error) {
    console.error('Error deleting image:', error);
    // Don't throw - deletion failure shouldn't block other operations
  }
}
