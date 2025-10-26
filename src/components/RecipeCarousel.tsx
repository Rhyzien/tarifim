import RecipeCard from "./RecipeCard";

interface Recipe {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

interface RecipeCarouselProps {
  recipes: Recipe[];
}

const RecipeCarousel = ({ recipes }: RecipeCarouselProps) => {
  return (
    <div className="flex overflow-x-auto hide-scrollbar">
      <div className="flex items-stretch p-4 gap-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="flex-shrink-0 w-60">
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              author={recipe.author}
              imageUrl={recipe.imageUrl}
              variant="horizontal"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCarousel;
