import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-10 py-3 bg-background">
      <div className="flex items-center gap-4 text-foreground">
        <div className="size-8">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tencere gövdesi */}
            <ellipse cx="24" cy="32" rx="16" ry="3" fill="currentColor" opacity="0.2"/>
            <path
              d="M10 28 C10 22 12 18 24 18 C36 18 38 22 38 28 L38 32 C38 36 34 38 24 38 C14 38 10 36 10 32 Z"
              fill="currentColor"
              opacity="0.9"
            />
            {/* Tencere kapağı - yarı açık */}
            <ellipse cx="28" cy="14" rx="14" ry="3" fill="currentColor" transform="rotate(-15 28 14)"/>
            <path
              d="M14 16 C14 15 16 14 28 14 C40 14 42 15 42 16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              transform="rotate(-15 28 15)"
            />
            {/* Kapak sapı */}
            <circle cx="30" cy="10" r="2" fill="currentColor"/>
          </svg>
        </div>
        <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">
          Tarifim.com
        </h2>
      </div>
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
        >
          <Bell className="h-5 w-5" />
        </Button>
        <div
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
