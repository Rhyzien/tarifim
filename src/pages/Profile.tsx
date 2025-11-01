import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getUserProfile, mockUsers } from "@/data/mockRecipes";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";

const Profile = () => {
  const { userId } = useParams();
  const currentUserId = "current-user";
  const profileUserId = userId || currentUserId;
  const isOwnProfile = profileUserId === currentUserId;
  
  const userProfile = getUserProfile(profileUserId);
  const [activeTab, setActiveTab] = useState("recipes");
  const [isFollowing, setIsFollowing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  
  // Settings state
  const [settings, setSettings] = useState({
    name: userProfile?.name || "",
    bio: userProfile?.bio || "",
    avatarUrl: userProfile?.avatarUrl || "",
    darkMode: false,
    themeColor: "#11d452",
    emailNotifications: true,
    recipeNotifications: true,
    privateAccount: false,
  });

  useEffect(() => {
    if (userProfile) {
      // Load saved settings from localStorage
      const savedSettings = localStorage.getItem(`userSettings_${currentUserId}`);
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        setAvatarPreview(parsed.avatarUrl || userProfile.avatarUrl);
        
        // Apply theme settings
        if (parsed.darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        // Apply theme color
        if (parsed.themeColor) {
          document.documentElement.style.setProperty('--accent', hexToHSL(parsed.themeColor));
        }
      } else {
        setSettings({
          name: userProfile.name,
          bio: userProfile.bio,
          avatarUrl: userProfile.avatarUrl,
          darkMode: false,
          themeColor: "#11d452",
          emailNotifications: true,
          recipeNotifications: true,
          privateAccount: false,
        });
        setAvatarPreview(userProfile.avatarUrl);
      }
    }
    
    // Check if following
    const following = JSON.parse(localStorage.getItem('following') || '[]');
    setIsFollowing(following.includes(profileUserId));
  }, [userProfile, profileUserId]);

  const hexToHSL = (hex: string) => {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatarPreview(result);
        setSettings({ ...settings, avatarUrl: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFollow = () => {
    const following = JSON.parse(localStorage.getItem('following') || '[]');
    if (isFollowing) {
      const updated = following.filter((id: string) => id !== profileUserId);
      localStorage.setItem('following', JSON.stringify(updated));
      setIsFollowing(false);
      toast.success("Takibi bıraktınız");
    } else {
      following.push(profileUserId);
      localStorage.setItem('following', JSON.stringify(following));
      setIsFollowing(true);
      setActiveTab("following");
      toast.success("Takip ediliyor");
    }
  };

  const handleSaveSettings = () => {
    // Save settings to localStorage
    localStorage.setItem(`userSettings_${currentUserId}`, JSON.stringify(settings));
    
    // Apply dark mode
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply theme color
    document.documentElement.style.setProperty('--accent', hexToHSL(settings.themeColor));
    
    toast.success("Ayarlar kaydedildi ve uygulandı!");
  };

  if (!userProfile) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
          <div className="max-w-[960px] mx-auto text-center py-20">
            <h1 className="text-foreground text-[28px] font-bold mb-4">Kullanıcı Bulunamadı</h1>
            <p className="text-muted-foreground mb-6">Aradığınız profil mevcut değil.</p>
            <Button asChild>
              <Link to="/">Ana Sayfaya Dön</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const following = Object.values(mockUsers).filter(u => u.id !== currentUserId).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          {/* Profile Header */}
          <div className="flex p-4">
            <div className="flex w-full flex-col gap-4 items-center">
              <div className="flex gap-4 flex-col items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                  style={{ backgroundImage: `url("${avatarPreview || userProfile.avatarUrl}")` }}
                />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                    {userProfile.name}
                  </p>
                  <p className="text-muted-foreground text-base font-normal leading-normal text-center">
                    {userProfile.bio}
                  </p>
                  <p className="text-muted-foreground text-base font-normal leading-normal text-center">
                    {userProfile.followersCount} takipçi • {userProfile.followingCount} takip
                  </p>
                </div>
              </div>
              
              {!isOwnProfile && (
                <Button 
                  onClick={handleFollow}
                  className={isFollowing ? "bg-secondary text-foreground hover:bg-secondary/90" : "bg-[#11d452] text-[#111813] hover:bg-[#11d452]/90"}
                >
                  {isFollowing ? "Takip Ediliyor" : "Takip Et"}
                </Button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 px-4 py-3">
            <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-border p-3 items-center text-center">
              <p className="text-foreground tracking-light text-2xl font-bold leading-tight">
                {userProfile.recipeCount}
              </p>
              <p className="text-muted-foreground text-sm font-normal leading-normal">Tarifler</p>
            </div>
            {isOwnProfile && (
              <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-border p-3 items-center text-center">
                <p className="text-foreground tracking-light text-2xl font-bold leading-tight">30</p>
                <p className="text-muted-foreground text-sm font-normal leading-normal">Kaydedilenler</p>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="pb-3">
            <div className="flex border-b border-border px-4 gap-8">
              <button
                onClick={() => setActiveTab("recipes")}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === "recipes"
                    ? "border-b-foreground text-foreground"
                    : "border-b-transparent text-muted-foreground"
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Tarifler</p>
              </button>
              
              {isOwnProfile && (
                <>
                  <button
                    onClick={() => setActiveTab("saved")}
                    className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                      activeTab === "saved"
                        ? "border-b-foreground text-foreground"
                        : "border-b-transparent text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Kaydedilenler</p>
                  </button>
                  <button
                    onClick={() => setActiveTab("following")}
                    className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                      activeTab === "following"
                        ? "border-b-foreground text-foreground"
                        : "border-b-transparent text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Takip Edilenler</p>
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                      activeTab === "settings"
                        ? "border-b-foreground text-foreground"
                        : "border-b-transparent text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Ayarlar</p>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "recipes" && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {userProfile.recipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipe/${recipe.id}`}
                  className="flex flex-col gap-3"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg hover:scale-105 transition-transform"
                    style={{ backgroundImage: `url("${recipe.imageUrl}")` }}
                  />
                  <div>
                    <p className="text-foreground text-base font-medium leading-normal">{recipe.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "saved" && isOwnProfile && (
            <div className="p-4">
              <p className="text-muted-foreground text-sm mb-4">
                Kaydettiğiniz tarifleri görmek için{" "}
                <Link to="/saved-recipes" className="text-foreground underline">
                  Kaydedilenler sayfasına
                </Link>{" "}
                gidin.
              </p>
            </div>
          )}

          {activeTab === "following" && isOwnProfile && (
            <div className="flex flex-col gap-2 p-4">
              {following.map((user) => (
                <Link
                  key={user.id}
                  to={`/profile/${user.id}`}
                  className="flex items-center gap-4 px-4 min-h-[72px] py-2 hover:bg-muted/50 transition-colors rounded-lg"
                >
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 shrink-0"
                    style={{ backgroundImage: `url("${user.avatarUrl}")` }}
                  />
                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-foreground text-base font-medium leading-normal">
                      {user.name}
                    </p>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      {user.recipeCount} tarif
                    </p>
                  </div>
                  <Button variant="secondary" size="sm">
                    Takip Ediliyor
                  </Button>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "settings" && isOwnProfile && (
            <div className="flex flex-col gap-6 p-4 max-w-[600px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-foreground text-lg font-bold">Profil Ayarları</h3>
                
                <div className="flex flex-col gap-2">
                  <label className="text-foreground text-sm font-medium">Profil Resmi</label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20"
                      style={{ backgroundImage: `url("${avatarPreview}")` }}
                    />
                    <Button
                      variant="secondary"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Resim Değiştir
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-foreground text-sm font-medium">İsim</label>
                  <Input
                    value={settings.name}
                    onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-foreground text-sm font-medium">Bio</label>
                  <Textarea
                    value={settings.bio}
                    onChange={(e) => setSettings({ ...settings, bio: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-foreground text-lg font-bold">Görünüm</h3>
                <div className="flex items-center justify-between">
                  <label className="text-foreground text-sm">Karanlık Tema</label>
                  <Checkbox
                    checked={settings.darkMode}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, darkMode: checked as boolean })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-foreground text-sm font-medium">Tema Rengi</label>
                  <Select value={settings.themeColor} onValueChange={(value) => setSettings({ ...settings, themeColor: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="#11d452">Yeşil (Varsayılan)</SelectItem>
                      <SelectItem value="#3b82f6">Mavi</SelectItem>
                      <SelectItem value="#ef4444">Kırmızı</SelectItem>
                      <SelectItem value="#f59e0b">Turuncu</SelectItem>
                      <SelectItem value="#8b5cf6">Mor</SelectItem>
                      <SelectItem value="#ec4899">Pembe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-foreground text-lg font-bold">Bildirim Ayarları</h3>
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, emailNotifications: checked as boolean })
                    }
                  />
                  <label className="text-foreground text-sm">E-posta bildirimleri</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={settings.recipeNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, recipeNotifications: checked as boolean })
                    }
                  />
                  <label className="text-foreground text-sm">Yeni tarif bildirimleri</label>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-foreground text-lg font-bold">Gizlilik</h3>
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={settings.privateAccount}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, privateAccount: checked as boolean })
                    }
                  />
                  <label className="text-foreground text-sm">Gizli hesap</label>
                </div>
              </div>

              <Button onClick={handleSaveSettings} className="bg-[#11d452] text-[#111813] hover:bg-[#11d452]/90">
                Değişiklikleri Kaydet
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;