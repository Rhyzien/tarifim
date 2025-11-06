import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Users, BookOpen, Heart } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <ChefHat className="w-20 h-20 text-[#11d452] animate-scale-in" />
          <h1 className="text-foreground text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Tarifim.com
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl">
            En sevdiğiniz tarifleri keşfedin, paylaşın ve yemek yapma tutkusunu yaşayın
          </p>
          
          <div className="flex gap-4 pt-8">
            <Button
              onClick={() => navigate("/auth")}
              size="lg"
              className="bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813] text-lg px-8 py-6 animate-scale-in hover-scale"
            >
              Hemen Başla
            </Button>
            <Button
              onClick={() => navigate("/auth")}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 animate-scale-in hover-scale"
            >
              Giriş Yap
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:scale-105 transition-transform animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#11d452]/10 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-[#11d452]" />
            </div>
            <h3 className="text-foreground text-xl font-bold">Binlerce Tarif</h3>
            <p className="text-muted-foreground">
              Her zevke uygun, her mutfaktan özenle seçilmiş tarifler
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 rounded-full bg-[#11d452]/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-[#11d452]" />
            </div>
            <h3 className="text-foreground text-xl font-bold">Topluluk</h3>
            <p className="text-muted-foreground">
              Yemek tutkunlarıyla tanışın, deneyimlerinizi paylaşın
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 rounded-full bg-[#11d452]/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#11d452]" />
            </div>
            <h3 className="text-foreground text-xl font-bold">Favorileriniz</h3>
            <p className="text-muted-foreground">
              Beğendiğiniz tarifleri kaydedin, istediğiniz zaman erişin
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center space-y-6 animate-fade-in">
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">
            Yemek Yapmanın Keyfini Çıkarın
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hemen ücretsiz hesap oluşturun ve yemek dünyasının bir parçası olun
          </p>
          <Button
            onClick={() => navigate("/auth")}
            size="lg"
            className="bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813] text-lg px-8 py-6 hover-scale"
          >
            Ücretsiz Kayıt Ol
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
