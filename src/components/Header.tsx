import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop");

  useEffect(() => {
    // Load avatar from database
    const loadAvatar = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('avatar_url')
          .eq('user_id', user.id)
          .maybeSingle();
        
        if (data?.avatar_url) {
          setAvatarUrl(data.avatar_url);
        }
      }
    };

    loadAvatar();

    // Listen for avatar updates
    const handleAvatarUpdate = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('avatar_url')
          .eq('user_id', user.id)
          .maybeSingle();
        
        if (data?.avatar_url) {
          setAvatarUrl(data.avatar_url);
        }
      }
    };

    window.addEventListener('avatarUpdated', handleAvatarUpdate);
    return () => {
      window.removeEventListener('avatarUpdated', handleAvatarUpdate);
    };
  }, []);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-10 py-3 bg-background">
      <Link to="/" className="flex items-center gap-4 text-foreground">
        <ChefHat className="w-8 h-8 text-[#11d452]" />
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
            backgroundImage: `url("${avatarUrl}")`
          }}
        />
      </div>
    </header>
  );
};

export default Header;
