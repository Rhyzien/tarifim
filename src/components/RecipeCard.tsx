import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  variant?: "horizontal" | "square";
}

const RecipeCard = ({ 
  id, 
  title, 
  author, 
  imageUrl, 
  variant = "square" 
}: RecipeCardProps) => {
  return (
    <Link 
      to={`/recipe/${id}`}
      className="flex flex-col gap-3 group cursor-pointer"
    >
      <div
        className={`w-full bg-center bg-no-repeat bg-cover rounded-lg transition-transform duration-300 group-hover:scale-105 ${
          variant === "horizontal" ? "aspect-video" : "aspect-square"
        }`}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div>
        <p className="text-foreground text-base font-medium leading-normal group-hover:text-accent transition-colors">
          {title}
        </p>
        <p className="text-muted-foreground text-sm font-normal leading-normal">
          {author}
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
