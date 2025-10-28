import { Link, useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-10 py-3 bg-background">
      <Link to="/" className="flex items-center gap-4 text-foreground">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">
          Tarifim.com
        </h2>
      </Link>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link to="/" className="text-foreground text-sm font-medium leading-normal hover:text-accent transition-colors">
            Ana Sayfa
          </Link>
          <Link to="/explore" className="text-foreground text-sm font-medium leading-normal hover:text-accent transition-colors">
            Keşfet
          </Link>
          <Link to="/add-recipe" className="text-foreground text-sm font-medium leading-normal hover:text-accent transition-colors">
            Tarif Ekle
          </Link>
        </nav>
        <Button
          variant="secondary"
          size="icon"
          className="h-10 w-10"
          onClick={() => navigate('/notifications')}
        >
          <Bell className="h-5 w-5" />
        </Button>
        <div
          onClick={() => navigate('/profile')}
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:ring-2 hover:ring-accent transition-all"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop")'
          }}
        />
      </div>
    </header>
  );
};

export default Header;
