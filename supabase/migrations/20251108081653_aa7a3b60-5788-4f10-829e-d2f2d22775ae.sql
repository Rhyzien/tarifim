-- Create storage buckets for recipe images and avatars
INSERT INTO storage.buckets (id, name, public)
VALUES ('recipe-images', 'recipe-images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Create RLS policies for recipe-images bucket
CREATE POLICY "Anyone can view recipe images"
ON storage.objects FOR SELECT
USING (bucket_id = 'recipe-images');

CREATE POLICY "Authenticated users can upload recipe images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'recipe-images' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Users can update their own recipe images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'recipe-images' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own recipe images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'recipe-images' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Create RLS policies for avatars bucket
CREATE POLICY "Anyone can view avatars"
ON storage.objects FOR SELECT
USING (bucket_id = 'avatars');

CREATE POLICY "Authenticated users can upload avatars"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'avatars' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Users can update their own avatars"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'avatars' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own avatars"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'avatars' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Create rate limiting function for recipes (10 per day)
CREATE OR REPLACE FUNCTION public.check_recipe_rate_limit(p_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recipe_count integer;
BEGIN
  SELECT COUNT(*) INTO recipe_count
  FROM recipes
  WHERE user_id = p_user_id
    AND created_at > NOW() - INTERVAL '1 day';
  RETURN recipe_count < 10;
END;
$$;

-- Create rate limiting function for comments (50 per hour)
CREATE OR REPLACE FUNCTION public.check_comment_rate_limit(p_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  comment_count integer;
BEGIN
  SELECT COUNT(*) INTO comment_count
  FROM recipe_comments
  WHERE user_id = p_user_id
    AND created_at > NOW() - INTERVAL '1 hour';
  RETURN comment_count < 50;
END;
$$;