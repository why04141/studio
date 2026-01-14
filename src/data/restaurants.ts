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
  { id: 16, name: "越南美食", address: "251新北市淡水區民族路29巷10號", meals: ['lunch', 'dinner'], googleMapsQuery: "越南美食 竹圍"}
];
