export interface Recipe {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  steps: { number: number; description: string }[];
  authorDetails: {
    name: string;
    recipeCount: number;
    avatarUrl: string;
  };
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Fesleğenli Domatesli Makarna",
    author: "Ayşe Yılmaz",
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
    }
  },
  {
    id: "2",
    title: "Akdeniz Yeşillikleri Salatası",
    author: "Mehmet Demir",
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
    }
  },
  {
    id: "3",
    title: "Mercimek Çorbası",
    author: "Elif Kaya",
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
    }
  },
  {
    id: "4",
    title: "Kremalı Mantarlı Tavuk",
    author: "Ayşe Yılmaz",
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
    }
  },
  {
    id: "5",
    title: "Fırında Sebzeli Kuzu",
    author: "Mehmet Demir",
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
    }
  },
  {
    id: "6",
    title: "Zeytinyağlı Enginar",
    author: "Elif Kaya",
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
    }
  },
  {
    id: "7",
    title: "Ispanaklı Kiş",
    author: "Zeynep Can",
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
    }
  },
  {
    id: "8",
    title: "Mısır Unlu Ekmek",
    author: "Ahmet Öztürk",
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
    }
  },
  {
    id: "9",
    title: "Yeşil Smoothie",
    author: "Selin Arslan",
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
    }
  },
  {
    id: "10",
    title: "Avokado Tost",
    author: "Canan Aksoy",
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
    }
  },
  {
    id: "11",
    title: "Chia Puding",
    author: "Emre Güven",
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
    }
  },
  {
    id: "12",
    title: "Yeşil Çaylı Kurabiye",
    author: "Deniz Yıldız",
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
    }
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return mockRecipes.find(recipe => recipe.id === id);
};
