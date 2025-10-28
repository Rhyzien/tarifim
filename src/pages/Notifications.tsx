import Header from "@/components/Header";

interface Notification {
  id: string;
  name: string;
  message: string;
  time: string;
  avatarUrl: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    name: "Ayşe Yılmaz",
    message: "Yeni tarif paylaştı",
    time: "2 saat önce",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: "2",
    name: "Mehmet Demir",
    message: "Tarifini beğendi",
    time: "3 saat önce",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: "3",
    name: "Elif Can",
    message: "Yorum yaptı: Harika görünüyor!",
    time: "5 saat önce",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    id: "4",
    name: "Ahmet Kaya",
    message: "Seni takip etmeye başladı",
    time: "1 gün önce",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    id: "5",
    name: "Zeynep Tekin",
    message: "Tarifini kaydetti",
    time: "2 gün önce",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  },
  {
    id: "6",
    name: "Can Yıldırım",
    message: "Yeni tarif paylaştı",
    time: "3 gün önce",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
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
            <div 
              key={notification.id}
              className="flex items-center gap-4 bg-background px-4 min-h-[72px] py-2 justify-between hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 shrink-0"
                  style={{ backgroundImage: `url("${notification.avatarUrl}")` }}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-foreground text-base font-medium leading-normal line-clamp-1">
                    {notification.name}
                  </p>
                  <p className="text-muted-foreground text-sm font-normal leading-normal line-clamp-2">
                    {notification.message}
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <p className="text-muted-foreground text-sm font-normal leading-normal">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notifications;
