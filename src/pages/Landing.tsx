import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Users, BookOpen, Heart, Sparkles } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#11d452]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#11d452]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <ChefHat className="w-6 h-6 sm:w-8 sm:h-8 text-[#11d452]" />
          <span className="text-foreground text-lg sm:text-2xl font-bold">Tarifim.com</span>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Button
            onClick={() => navigate("/auth", { state: { mode: "login" } })}
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-[#11d452] transition-colors text-xs sm:text-sm"
          >
            Giriş Yap
          </Button>
          <Button
            onClick={() => navigate("/auth", { state: { mode: "signup" } })}
            size="sm"
            className="bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813] hover-scale text-xs sm:text-sm"
          >
            Kayıt Ol
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-[#11d452]/20 blur-2xl rounded-full animate-pulse" />
            <ChefHat className="w-16 h-16 sm:w-20 sm:h-20 text-[#11d452] animate-scale-in relative z-10" />
          </div>
          <h1 className="text-foreground text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-[#11d452] animate-fade-in">
            Tarifim.com
          </h1>
          <div className="flex items-center gap-2 text-[#11d452] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">Türkiye'nin En Lezzetli Tarif Platformu</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <p className="text-muted-foreground text-base sm:text-xl md:text-2xl max-w-2xl px-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            En sevdiğiniz tarifleri keşfedin, paylaşın ve yemek yapma tutkusunu yaşayın
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 w-full sm:w-auto px-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={() => navigate("/auth", { state: { mode: "signup" } })}
              size="lg"
              className="bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-[#11d452]/20 hover-scale w-full sm:w-auto"
            >
              Hemen Başla
            </Button>
            <Button
              onClick={() => navigate("/auth", { state: { mode: "login" } })}
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 hover-scale w-full sm:w-auto"
            >
              Giriş Yap
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-16 sm:mt-24 md:mt-32 max-w-6xl mx-auto">
          <div className="group flex flex-col items-center text-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-[#11d452]/50 hover:shadow-xl hover:shadow-[#11d452]/10 transition-all duration-300 animate-fade-in hover:-translate-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#11d452]/20 to-[#11d452]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-[#11d452]" />
            </div>
            <h3 className="text-foreground text-lg sm:text-xl font-bold">Lezzetli Tarifler</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Her zevke uygun, özenle seçilmiş nefis tarifler
            </p>
          </div>

          <div className="group flex flex-col items-center text-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-[#11d452]/50 hover:shadow-xl hover:shadow-[#11d452]/10 transition-all duration-300 animate-fade-in hover:-translate-y-2" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#11d452]/20 to-[#11d452]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#11d452]" />
            </div>
            <h3 className="text-foreground text-lg sm:text-xl font-bold">Canlı Topluluk</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Yemek tutkunlarıyla tanışın, deneyimlerinizi paylaşın
            </p>
          </div>

          <div className="group flex flex-col items-center text-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-[#11d452]/50 hover:shadow-xl hover:shadow-[#11d452]/10 transition-all duration-300 animate-fade-in hover:-translate-y-2 sm:col-span-2 md:col-span-1" style={{ animationDelay: "0.4s" }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#11d452]/20 to-[#11d452]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#11d452]" />
            </div>
            <h3 className="text-foreground text-lg sm:text-xl font-bold">Kişisel Koleksiyon</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Beğendiğiniz tarifleri kaydedin, koleksiyonunuzu oluşturun
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-24 md:mt-32 mb-12 sm:mb-20 text-center space-y-4 sm:space-y-6 animate-fade-in relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#11d452]/5 to-transparent blur-xl" />
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">
            Yemek Yapmanın Keyfini Çıkarın
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto relative z-10">
            Hemen ücretsiz hesap oluşturun ve lezzet dolu bu yolculuğa katılın
          </p>
          <Button
            onClick={() => navigate("/auth", { state: { mode: "signup" } })}
            size="lg"
            className="bg-[#11d452] hover:bg-[#11d452]/90 text-[#111813] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-[#11d452]/20 hover-scale relative z-10 w-full sm:w-auto"
          >
            Ücretsiz Kayıt Ol
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
