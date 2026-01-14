export interface Restaurant {
  id: number;
  name: string;
  address: string;
  meals: ('breakfast' | 'lunch' | 'dinner')[];
  googleMapsQuery: string;
}

export const restaurants: Restaurant[] = [
  // Breakfast places
  { id: 1, name: "早點不一樣", address: "251新北市淡水區學府路51巷6弄2號", meals: ['breakfast'], googleMapsQuery: "早點不一樣 學府路" },
  { id: 2, name: "真食手作", address: "251新北市淡水區新民街222巷21號", meals: ['breakfast', 'lunch'], googleMapsQuery: "真食手作 淡水" },
  { id: 3, name: "豐盛號 炭烤吐司/紅茶牛奶", address: "111台北市士林區中正路223巷4號1樓", meals: ['breakfast', 'lunch'], googleMapsQuery: "豐盛號 炭烤吐司/紅茶牛奶 士林總店" },
  { id: 4, name: "G'day Coffee", address: "111台北市士林區文林路173號", meals: ['breakfast', 'lunch'], googleMapsQuery: "G'day Coffee 士林" },
  
  // Lunch/Dinner places
  { id: 5, name: "Hi-Q 中華料理", address: "251新北市淡水區中正路一段87巷10弄8號", meals: ['lunch', 'dinner'], googleMapsQuery: "Hi-Q 中華料理" },
  { id: 6, name: "La Creperie de Betty", address: "251新北市淡水區中正路28巷1-1號", meals: ['lunch', 'dinner'], googleMapsQuery: "La Creperie de Betty 淡水" },
  { id: 7, name: "張家牛肉麵", address: "112台北市北投區中央南路一段214號", meals: ['lunch', 'dinner'], googleMapsQuery: "張家牛肉麵 北投" },
  { id: 8, name: "北投魷魚", address: "112台北市北投區磺港路22號", meals: ['lunch', 'dinner'], googleMapsQuery: "北投魷魚" },
  { id: 9, name: "老張牛肉麵店", address: "112台北市北投區中央北路一段228巷", meals: ['lunch', 'dinner'], googleMapsQuery: "老張牛肉麵店 北投" },
  { id: 10, name: "士林廟口阿輝麵線", address: "111台北市士林區大南路84號", meals: ['lunch', 'dinner'], googleMapsQuery: "士林廟口阿輝麵線" },
  { id: 11, name: "好朋友涼麵", address: "111台北市士林區大南路31號", meals: ['lunch', 'dinner'], googleMapsQuery: "好朋友涼麵 士林" },
  { id: 12, name: "鍾家原上海生煎包", address: "111台北市士林區小東街38號", meals: ['lunch', 'dinner'], googleMapsQuery: "鍾家原上海生煎包" },
  { id: 13, name: "海友十全排骨", address: "111台北市士林区大東路49号", meals: ['dinner'], googleMapsQuery: "海友十全排骨" },
  { id: 14, name: "食來運轉", address: "111台北市士林區小西街33號", meals: ['lunch', 'dinner'], googleMapsQuery: "食來運轉 士林" },
  { id: 15, name: "竹圍工作室", address: "251新北市淡水區中正東路二段88巷39號", meals: ['lunch', 'dinner'], googleMapsQuery: "竹圍工作室"},
  { id: 16, name: "越南美食", address: "251新北市淡水區民族路29巷10號", meals: ['lunch', 'dinner'], googleMapsQuery: "越南美食 竹圍"},

  // New Japanese/other options
  { id: 17, name: "三媽臭臭鍋", address: "251新北市淡水區學府路73號", meals: ['lunch', 'dinner'], googleMapsQuery: "三媽臭臭鍋 淡水學府店" },
  { id: 18, name: "淡水滷味", address: "251新北市淡水區英專路83號", meals: ['lunch', 'dinner'], googleMapsQuery: "淡水滷味" },
  { id: 19, name: "壽司郎", address: "111台北市士林區中正路187-189號", meals: ['lunch', 'dinner'], googleMapsQuery: "壽司郎 士林中正店" },
  { id: 20, name: "一蘭拉麵", address: "110台北市信義區松仁路97號", meals: ['lunch', 'dinner'], googleMapsQuery: "一蘭拉麵 台北本店" },
  { id: 21, name: "鬼金棒", address: "100台北市中正區汀州路三段87號", meals: ['lunch', 'dinner'], googleMapsQuery: "鬼金棒 台北總店" },
  { id: 22, name: "爭鮮迴轉壽司", address: "251新北市淡水區中正路1號2樓", meals: ['lunch', 'dinner'], googleMapsQuery: "爭鮮迴轉壽司 淡水店" },

  // More sushi places
  { id: 23, name: "藏壽司", address: "251新北市淡水區中山北路二段383號2樓", meals: ['lunch', 'dinner'], googleMapsQuery: "藏壽司 淡水中山路店" },
  { id: 24, name: "はま寿司 (Hama Sushi)", address: "10491台北市中山區中山北路二段32號", meals: ['lunch', 'dinner'], googleMapsQuery: "Hama Sushi 中山民權店" },
  { id: 25, name: "合點壽司", address: "110台北市信義區忠孝東路五段8號B1", meals: ['lunch', 'dinner'], googleMapsQuery: "合點壽司 統一時代店" }
];
