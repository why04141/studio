import { MealCard } from '@/components/MealCard';
import { restaurants } from '@/data/restaurants';
import { Sunrise, Sun, Moon } from 'lucide-react';

export default function Home() {
  const breakfastRestaurants = restaurants.filter(r => r.meals.includes('breakfast'));
  const lunchRestaurants = restaurants.filter(r => r.meals.includes('lunch'));
  const dinnerRestaurants = restaurants.filter(r => r.meals.includes('dinner'));

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-8">
      <header className="text-center mb-8 sm:mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary font-headline">
          今天吃什麼？
        </h1>
        <p className="text-lg text-muted-foreground mt-2 font-body">
          讓 Random Foodie 為你決定！
        </p>
      </header>
      <div className="flex flex-wrap items-stretch justify-center gap-8">
        <MealCard 
          mealType="Breakfast"
          restaurants={breakfastRestaurants}
          icon={<Sunrise className="h-8 w-8" />}
          className="bg-breakfast text-breakfast-foreground border-breakfast"
          buttonClassName="bg-breakfast-foreground text-breakfast hover:bg-breakfast-foreground/90"
        />
        <MealCard 
          mealType="Lunch"
          restaurants={lunchRestaurants}
          icon={<Sun className="h-8 w-8" />}
          className="bg-lunch text-lunch-foreground border-lunch"
          buttonClassName="bg-lunch-foreground text-lunch hover:bg-lunch-foreground/90"
        />
        <MealCard 
          mealType="Dinner"
          restaurants={dinnerRestaurants}
          icon={<Moon className="h-8 w-8" />}
          className="bg-dinner text-dinner-foreground border-dinner"
          buttonClassName="bg-dinner-foreground text-dinner hover:bg-dinner-foreground/90"
        />
      </div>
      <footer className="mt-16 text-center text-muted-foreground text-sm font-body">
        <p>
          由 AI 為您精心打造 &copy; {new Date().getFullYear()} Random Foodie
        </p>
      </footer>
    </main>
  );
}
