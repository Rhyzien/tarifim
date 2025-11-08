import { Link } from "react-router-dom";
import Header from "@/components/Header";

interface Notification {
  id: string;
  name: string;
  message: string;
  time: string;
  avatarUrl: string;
  link: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    name: "Ayşe Yılmaz",
    message: "Yeni tarif paylaştı",
    time: "2 saat önce",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    link: "/recipe/1"
  },
  {
    id: "2",
    name: "Mehmet Demir",
    message: "Tarifini beğendi",
    time: "3 saat önce",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    link: "/profile/mehmet-demir"
  },
  {
    id: "3",
    name: "Elif Can",
    message: "Yorum yaptı: Harika görünüyor!",
    time: "5 saat önce",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    link: "/recipe/1"
  },
  {
    id: "4",
    name: "Ahmet Kaya",
    message: "Seni takip etmeye başladı",
    time: "1 gün önce",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    link: "/profile"
  },
  {
    id: "5",
    name: "Zeynep Tekin",
    message: "Tarifini kaydetti",
    time: "2 gün önce",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    link: "/recipe/1"
  },
  {
    id: "6",
    name: "Can Yıldırım",
    message: "Yeni tarif paylaştı",
    time: "3 gün önce",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    link: "/recipe/2"
  }
];

const Notifications = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 md:px-10 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-foreground tracking-light text-[32px] font-bold leading-tight min-w-72">
              Bildirimler
            </p>
          </div>
          
          {mockNotifications.map((notification) => (
            <Link 
              key={notification.id}
              to={notification.link}
              className="flex items-center gap-2 md:gap-4 bg-background px-2 md:px-4 min-h-[72px] py-2 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 md:h-14 md:w-14 shrink-0"
                  style={{ backgroundImage: `url("${notification.avatarUrl}")` }}
                />
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <p className="text-foreground text-sm md:text-base font-medium leading-normal line-clamp-1">
                    {notification.name}
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm font-normal leading-normal line-clamp-2">
                    {notification.message}
                  </p>
                  <p className="text-muted-foreground text-xs md:hidden font-normal leading-normal mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
              <div className="shrink-0 hidden md:block">
                <p className="text-muted-foreground text-sm font-normal leading-normal whitespace-nowrap">
                  {notification.time}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notifications;