import RecipeCard from "./RecipeCard";

interface Recipe {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

interface RecipeGridProps {
  title: string;
  recipes: Recipe[];
}

const RecipeGrid = ({ title, recipes }: RecipeGridProps) => {
  return (
    <div>
      <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            author={recipe.author}
            imageUrl={recipe.imageUrl}
            variant="square"
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
