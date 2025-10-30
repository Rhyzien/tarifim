export interface Comment {
  id: string;
  author: string;
  avatarUrl: string;
  text: string;
  time: string;
}

export interface Recipe {
  id: string;
  title: string;
  author: string;
  authorId: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  steps: { number: number; description: string }[];
  authorDetails: {
    name: string;
    recipeCount: number;
    avatarUrl: string;
  };
  comments: Comment[];
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Fesleğenli Domatesli Makarna",
    author: "Ayşe Yılmaz",
    authorId: "ayse-yilmaz",
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=533&fit=crop",
    description: "Taze fesleğen ve domates sosuyla hazırlanan bu İtalyan klasiği, hem hızlı hem de lezzetli bir akşam yemeği seçeneğidir.",
    ingredients: [
      "400 gr spagetti",
      "500 gr cherry domates",
      "1 demet taze fesleğen",
      "4 diş sarımsak",
      "50 ml zeytinyağı",
      "Tuz, karabiber",
      "Parmesan peyniri"
    ],
    steps: [
      { number: 1, description: "Makarnayı tuzlu suda haşlayın." },
      { number: 2, description: "Domatleri yarıya bölün, sarımsağı ince doğrayın." },
      { number: 3, description: "Tavada zeytinyağında sarımsağı kavurun." },
      { number: 4, description: "Domatleri ekleyip yumuşayana kadar pişirin." },
      { number: 5, description: "Fesleğen ve makarnayı ekleyip karıştırın." },
      { number: 6, description: "Parmesan rendesi ile servis yapın." }
    ],
    authorDetails: {
      name: "Ayşe Yılmaz",
      recipeCount: 24,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    comments: [
      {
        id: "1",
        author: "Mehmet Demir",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        text: "Harika bir tarif! Ailecek çok beğendik.",
        time: "2 saat önce"
      }
    ]
  },
  {
    id: "2",
    title: "Akdeniz Yeşillikleri Salatası",
    author: "Mehmet Demir",
    authorId: "mehmet-demir",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=533&fit=crop",
    description: "Taze sebzeler ve zeytinyağlı sos ile hazırlanan sağlıklı ve hafif bir salata tarifi.",
    ingredients: [
      "1 baş marul",
      "2 adet domates",
      "1 adet salatalık",
      "1 adet kırmızı soğan",
      "100 gr beyaz peynir",
      "Siyah zeytin",
      "Zeytinyağı ve limon sosu"
    ],
    steps: [
      { number: 1, description: "Sebzeleri yıkayıp küp şeklinde doğrayın." },
      { number: 2, description: "Marulu yırtın ve derin bir kaseye alın." },
      { number: 3, description: "Tüm malzemeleri karıştırın." },
      { number: 4, description: "Zeytinyağı ve limon suyunu gezdirin." },
      { number: 5, description: "Peynir ve zeytinle süsleyip servis yapın." }
    ],
    authorDetails: {
      name: "Mehmet Demir",
      recipeCount: 18,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    comments: [
      {
        id: "1",
        author: "Elif Can",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        text: "Çok taze ve lezzetli görünüyor!",
        time: "3 saat önce"
      }
    ]
  },
  {
    id: "3",
    title: "Mercimek Çorbası",
    author: "Elif Kaya",
    authorId: "elif-kaya",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=533&fit=crop",
    description: "Türk mutfağının vazgeçilmez klasiği, besleyici ve lezzetli mercimek çorbası tarifi.",
    ingredients: [
      "1 su bardağı kırmızı mercimek",
      "1 adet soğan",
      "1 adet havuç",
      "2 yemek kaşığı tereyağı",
      "1 yemek kaşığı un",
      "Tuz, karabiber, pul biber"
    ],
    steps: [
      { number: 1, description: "Mercimekleri yıkayın ve süzün." },
      { number: 2, description: "Soğan ve havucu rendeleyin." },
      { number: 3, description: "Tencerede tereyağında sebzeleri kavurun." },
      { number: 4, description: "Mercimek ve suyu ekleyip kaynatın." },
      { number: 5, description: "20 dakika pişirdikten sonra blenderdan geçirin." },
      { number: 6, description: "Kavurma sosla servis yapın." }
    ],
    authorDetails: {
      name: "Elif Kaya",
      recipeCount: 32,
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    comments: [
      {
        id: "1",
        author: "Ayşe Yılmaz",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        text: "Bu tarifi denedim, çok güzel oldu!",
        time: "1 gün önce"
      }
    ]
  },
  {
    id: "4",
    title: "Kremalı Mantarlı Tavuk",
    author: "Ayşe Yılmaz",
    authorId: "ayse-yilmaz",
    imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=533&fit=crop",
    description: "Kremalı mantar sosu ile pişirilmiş yumuşacık tavuk göğüsleri. Akşam yemekleri için mükemmel bir seçenek.",
    ingredients: [
      "500 gr tavuk göğsü",
      "250 gr mantar",
      "200 ml krema",
      "1 adet soğan",
      "2 diş sarımsak",
      "Tereyağı, tuz, karabiber"
    ],
    steps: [
      { number: 1, description: "Tavukları küp şeklinde doğrayın." },
      { number: 2, description: "Mantarları yıkayıp dilimleyin." },
      { number: 3, description: "Tavada tereyağında soğan ve sarımsağı kavurun." },
      { number: 4, description: "Tavukları ekleyip pembesi kalmayana kadar pişirin." },
      { number: 5, description: "Mantarları ekleyip 5 dakika kavurun." },
      { number: 6, description: "Kremayı ekleyip kaynatın ve servis yapın." }
    ],
    authorDetails: {
      name: "Ayşe Yılmaz",
      recipeCount: 24,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    comments: []
  },
  {
    id: "5",
    title: "Fırında Sebzeli Kuzu",
    author: "Mehmet Demir",
    authorId: "mehmet-demir",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=533&fit=crop",
    description: "Özel günler için ideal, fırında yavaş pişirilmiş sebzeli kuzu eti tarifi.",
    ingredients: [
      "1 kg kuzu but",
      "3 adet patates",
      "2 adet havuç",
      "2 adet soğan",
      "1 çay bardağı zeytinyağı",
      "Kekik, biberiye, tuz, karabiber"
    ],
    steps: [
      { number: 1, description: "Eti baharatlarla marine edin." },
      { number: 2, description: "Sebzeleri iri doğrayın." },
      { number: 3, description: "Fırın tepsisine eti ve sebzeleri yerleştirin." },
      { number: 4, description: "Zeytinyağı ve baharatları gezdirin." },
      { number: 5, description: "180 derecede 2 saat pişirin." },
      { number: 6, description: "Dinlendirip dilimleyerek servis yapın." }
    ],
    authorDetails: {
      name: "Mehmet Demir",
      recipeCount: 18,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    comments: [
      {
        id: "1",
        author: "Zeynep Can",
        avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
        text: "Misafirlerimize yaptım, çok övgü aldım!",
        time: "2 gün önce"
      }
    ]
  },
  {
    id: "6",
    title: "Zeytinyağlı Enginar",
    author: "Elif Kaya",
    authorId: "elif-kaya",
    imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&h=533&fit=crop",
    description: "Türk mutfağının vazgeçilmezi, limonlu zeytinyağlı enginar tarifi.",
    ingredients: [
      "6 adet enginar",
      "2 adet havuç",
      "2 adet patates",
      "1 çay bardağı zeytinyağı",
      "2 adet limon",
      "Şeker, tuz"
    ],
    steps: [
      { number: 1, description: "Enginarları temizleyin ve limonlu suda bekletin." },
      { number: 2, description: "Havuç ve patatesleri doğrayın." },
      { number: 3, description: "Tencereye enginar ve sebzeleri yerleştirin." },
      { number: 4, description: "Zeytinyağı, limon suyu, şeker ve tuzu ekleyin." },
      { number: 5, description: "Üzerini su ile kaplayıp kısık ateşte pişirin." },
      { number: 6, description: "Soğuduktan sonra servis yapın." }
    ],
    authorDetails: {
      name: "Elif Kaya",
      recipeCount: 32,
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    comments: []
  },
  {
    id: "7",
    title: "Ispanaklı Kiş",
    author: "Zeynep Can",
    authorId: "zeynep-can",
    imageUrl: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=800&h=533&fit=crop",
    description: "Fransız mutfağından gelen, kahvaltı ve brunch için harika bir seçenek.",
    ingredients: [
      "1 paket hazır yufka",
      "300 gr ıspanak",
      "200 gr lor peyniri",
      "3 adet yumurta",
      "150 ml süt",
      "Tuz, karabiber, muskat"
    ],
    steps: [
      { number: 1, description: "Ispanakları haşlayıp doğrayın." },
      { number: 2, description: "Yumurta, süt ve baharatları çırpın." },
      { number: 3, description: "Yufkayı kek kalıbına yerleştirin." },
      { number: 4, description: "Ispanak ve peyniri yayın." },
      { number: 5, description: "Yumurtalı karışımı dökün." },
      { number: 6, description: "180 derecede 35 dakika pişirin." }
    ],
    authorDetails: {
      name: "Zeynep Can",
      recipeCount: 15,
      avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
    },
    comments: []
  },
  {
    id: "8",
    title: "Mısır Unlu Ekmek",
    author: "Ahmet Öztürk",
    authorId: "ahmet-ozturk",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=533&fit=crop",
    description: "Evde kolayca yapabileceğiniz, glutensiz mısır unundan ekmek tarifi.",
    ingredients: [
      "2 su bardağı mısır unu",
      "1 su bardağı buğday unu",
      "1 paket instant maya",
      "1 tatlı kaşığı tuz",
      "1 tatlı kaşığı şeker",
      "2 yemek kaşığı zeytinyağı"
    ],
    steps: [
      { number: 1, description: "Kuru malzemeleri karıştırın." },
      { number: 2, description: "Ilık su ekleyip yoğurun." },
      { number: 3, description: "Hamuru 1 saat mayalandırın." },
      { number: 4, description: "Ekmek kalıbına yerleştirin." },
      { number: 5, description: "200 derecede 40 dakika pişirin." },
      { number: 6, description: "Soğuduktan sonra dilimleyin." }
    ],
    authorDetails: {
      name: "Ahmet Öztürk",
      recipeCount: 21,
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    comments: []
  },
  {
    id: "9",
    title: "Yeşil Smoothie",
    author: "Selin Arslan",
    authorId: "selin-arslan",
    imageUrl: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=533&fit=crop",
    description: "Detoks yapmak isteyenler için vitamin deposu yeşil smoothie tarifi.",
    ingredients: [
      "1 avuç ıspanak",
      "1 adet muz",
      "1 adet yeşil elma",
      "1 yemek kaşığı chia tohumu",
      "1 su bardağı badem sütü",
      "1 tatlı kaşığı bal"
    ],
    steps: [
      { number: 1, description: "Tüm malzemeleri blender'a koyun." },
      { number: 2, description: "Pürüzsüz bir kıvam elde edene kadar karıştırın." },
      { number: 3, description: "Buzlu bardaklara doldurun." },
      { number: 4, description: "Soğuk servis yapın." }
    ],
    authorDetails: {
      name: "Selin Arslan",
      recipeCount: 28,
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    comments: []
  },
  {
    id: "10",
    title: "Avokado Tost",
    author: "Canan Aksoy",
    authorId: "canan-aksoy",
    imageUrl: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&h=533&fit=crop",
    description: "Kahvaltının yeni gözdesi, avokadolu tost tarifi. Hem sağlıklı hem doyurucu.",
    ingredients: [
      "2 dilim tam buğday ekmeği",
      "1 adet olgun avokado",
      "1 adet domates",
      "Limon suyu",
      "Tuz, karabiber",
      "Kırmızı biber pulu"
    ],
    steps: [
      { number: 1, description: "Ekmekleri kızartın." },
      { number: 2, description: "Avokadoyu ezin, limon suyu ve baharatları ekleyin." },
      { number: 3, description: "Ekmeklerin üzerine avokadonun yarısını sürün." },
      { number: 4, description: "Dilimlenmiş domates ekleyin." },
      { number: 5, description: "Biber pulu serpip servis yapın." }
    ],
    authorDetails: {
      name: "Canan Aksoy",
      recipeCount: 19,
      avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop"
    },
    comments: []
  },
  {
    id: "11",
    title: "Chia Puding",
    author: "Emre Güven",
    authorId: "emre-guven",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=533&fit=crop",
    description: "Omega-3 deposu chia tohumlu puding. Sağlıklı bir atıştırmalık ya da kahvaltı.",
    ingredients: [
      "3 yemek kaşığı chia tohumu",
      "1 su bardağı badem sütü",
      "1 tatlı kaşığı bal",
      "Vanilya özütü",
      "Taze meyveler",
      "Granola"
    ],
    steps: [
      { number: 1, description: "Chia ve badem sütünü karıştırın." },
      { number: 2, description: "Bal ve vanilya ekleyin." },
      { number: 3, description: "Buzdolabında 4 saat bekletin." },
      { number: 4, description: "Meyve ve granola ile süsleyin." },
      { number: 5, description: "Soğuk servis yapın." }
    ],
    authorDetails: {
      name: "Emre Güven",
      recipeCount: 16,
      avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    },
    comments: []
  },
  {
    id: "12",
    title: "Yeşil Çaylı Kurabiye",
    author: "Deniz Yıldız",
    authorId: "deniz-yildiz",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=533&fit=crop",
    description: "Antioksidan kaynağı yeşil çay içeren, çay saatlerinin vazgeçilmez kurabiyesi.",
    ingredients: [
      "2 su bardağı un",
      "1 su bardağı pudra şekeri",
      "200 gr tereyağı",
      "2 yemek kaşığı yeşil çay tozu",
      "1 adet yumurta",
      "Vanilya"
    ],
    steps: [
      { number: 1, description: "Tereyağı ve şekeri kremsi olana kadar çırpın." },
      { number: 2, description: "Yumurta ve vanilya ekleyin." },
      { number: 3, description: "Un ve yeşil çay tozunu ekleyip yoğurun." },
      { number: 4, description: "Hamuru şekil verin." },
      { number: 5, description: "170 derecede 15 dakika pişirin." },
      { number: 6, description: "Soğuduktan sonra servis yapın." }
    ],
    authorDetails: {
      name: "Deniz Yıldız",
      recipeCount: 23,
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop"
    },
    comments: []
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return mockRecipes.find(recipe => recipe.id === id);
};

// Kullanıcı profili için mock data
export interface UserProfile {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  recipeCount: number;
  followersCount: number;
  followingCount: number;
  recipes: Recipe[];
}

export const mockUsers: { [key: string]: UserProfile } = {
  "ayse-yilmaz": {
    id: "ayse-yilmaz",
    name: "Ayşe Yılmaz",
    bio: "Yemek yapmayı seven ve yeni tarifler denemeyi seven bir gurme. Farklı kültürlere ait tarifleri keşfetmek en büyük tutkum.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    recipeCount: 24,
    followersCount: 500,
    followingCount: 250,
    recipes: mockRecipes.filter(r => r.authorId === "ayse-yilmaz")
  },
  "mehmet-demir": {
    id: "mehmet-demir",
    name: "Mehmet Demir",
    bio: "Geleneksel Türk mutfağını modern dokunuşlarla birleştirmeyi seviyorum.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    recipeCount: 18,
    followersCount: 320,
    followingCount: 180,
    recipes: mockRecipes.filter(r => r.authorId === "mehmet-demir")
  },
  "elif-kaya": {
    id: "elif-kaya",
    name: "Elif Kaya",
    bio: "Sağlıklı beslenme ve organik yemek konusunda tutkulu bir aşçı.",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    recipeCount: 32,
    followersCount: 680,
    followingCount: 310,
    recipes: mockRecipes.filter(r => r.authorId === "elif-kaya")
  },
  "current-user": {
    id: "current-user",
    name: "Zeynep Demir",
    bio: "Yemek yapmayı ve yeni lezzetler denemeyi seven bir gurme. Farklı kültürlere ait tarifleri keşfetmek ve kendi yorumlarımla sunmak en büyük tutkum.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    recipeCount: 15,
    followersCount: 500,
    followingCount: 250,
    recipes: []
  }
};

export const getUserProfile = (userId: string): UserProfile | undefined => {
  return mockUsers[userId];
};