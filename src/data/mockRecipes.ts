// Type definitions only - all data now comes from Supabase
export interface Comment {
  id: string;
  author: string;
  avatarUrl: string;
  text: string;
  time: string;
}

export interface Recipe {
  id: string;
  title: string;
  author: string;
  authorId: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  steps: { number: number; description: string }[];
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  category?: string;
  authorDetails: {
    name: string;
    recipeCount: number;
    avatarUrl: string;
  };
  comments: Comment[];
}

export interface UserProfile {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  recipeCount: number;
  followersCount: number;
  followingCount: number;
  recipes: Recipe[];
}

// Empty arrays - all data now fetched from Supabase
export const mockRecipes: Recipe[] = [];
export const mockUsers: { [key: string]: UserProfile } = {};

export const getRecipeById = (id: string): Recipe | undefined => {
  return undefined;
};

export const getUserProfile = (userId: string): UserProfile | undefined => {
  return undefined;
};
