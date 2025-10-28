import { useState } from "react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const mockRecipeImages = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
];

type TabType = "recipes" | "saved" | "following" | "settings";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<TabType>("recipes");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <div className="flex p-4">
            <div className="flex w-full flex-col gap-4 items-center">
              <div className="flex gap-4 flex-col items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop")'
                  }}
                />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                    Zeynep Demir
                  </p>
                  <p className="text-muted-foreground text-base font-normal leading-normal text-center max-w-2xl">
                    Yemek yapmayı ve yeni lezzetler denemeyi seven bir gurme. Farklı kültürlere ait tarifleri keşfetmek ve kendi yorumlarımla sunmak en büyük tutkum.
                  </p>
                  <p className="text-muted-foreground text-base font-normal leading-normal text-center">
                    500 takipçi • 250 takip
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 px-4 py-3">
            <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-border p-3 items-center text-center">
              <p className="text-foreground tracking-light text-2xl font-bold leading-tight">15</p>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground text-sm font-normal leading-normal">Tarifler</p>
              </div>
            </div>
            <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-border p-3 items-center text-center">
              <p className="text-foreground tracking-light text-2xl font-bold leading-tight">30</p>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground text-sm font-normal leading-normal">Kaydedilenler</p>
              </div>
            </div>
          </div>

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
                <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                  activeTab === "recipes" ? "text-foreground" : "text-muted-foreground"
                }`}>
                  Tarifler
                </p>
              </button>
              <Link
                to="/saved-recipes"
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-muted-foreground pb-[13px] pt-4"
              >
                <p className="text-muted-foreground text-sm font-bold leading-normal tracking-[0.015em]">
                  Kaydedilenler
                </p>
              </Link>
              <button
                onClick={() => setActiveTab("following")}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === "following"
                    ? "border-b-foreground text-foreground"
                    : "border-b-transparent text-muted-foreground"
                }`}
              >
                <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                  activeTab === "following" ? "text-foreground" : "text-muted-foreground"
                }`}>
                  Takip Edilenler
                </p>
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === "settings"
                    ? "border-b-foreground text-foreground"
                    : "border-b-transparent text-muted-foreground"
                }`}
              >
                <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                  activeTab === "settings" ? "text-foreground" : "text-muted-foreground"
                }`}>
                  Ayarlar
                </p>
              </button>
            </div>
          </div>

          {activeTab === "recipes" && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {mockRecipeImages.map((image, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
