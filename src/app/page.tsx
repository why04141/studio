import { MealCard } from '@/components/MealCard';
import { restaurants } from '@/data/restaurants';
import { UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const breakfastRestaurants = restaurants.filter(r => r.meals.includes('breakfast'));
  const lunchRestaurants = restaurants.filter(r => r.meals.includes('lunch'));
  const dinnerRestaurants = restaurants.filter(r => r.meals.includes('dinner'));

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
        alt="French restaurant background"
        fill
        className="object-cover -z-20"
        data-ai-hint="restaurant interior"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 text-white">
        <header className="text-center mb-8 sm:mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-headline text-white drop-shadow-lg">
            Aujourd'hui, on mange quoi?
          </h1>
          <p className="text-xl text-white/90 mt-4 font-body drop-shadow-md">
            Laissez Random Foodie décider pour vous!
          </p>
        </header>
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          <MealCard 
            mealType="Le Petit-Déjeuner"
            restaurants={breakfastRestaurants}
            icon={<UtensilsCrossed className="h-8 w-8" />}
            className="bg-breakfast/80 backdrop-blur-sm text-breakfast-foreground border-breakfast/50"
            buttonClassName="bg-breakfast-foreground text-breakfast hover:bg-breakfast-foreground/90"
          />
          <MealCard 
            mealType="Le Déjeuner"
            restaurants={lunchRestaurants}
            icon={<UtensilsCrossed className="h-8 w-8" />}
            className="bg-lunch/80 backdrop-blur-sm text-lunch-foreground border-lunch/50"
            buttonClassName="bg-lunch-foreground text-lunch hover:bg-lunch-foreground/90"
          />
          <MealCard 
            mealType="Le Dîner"
            restaurants={dinnerRestaurants}
            icon={<UtensilsCrossed className="h-8 w-8" />}
            className="bg-dinner/80 backdrop-blur-sm text-dinner-foreground border-dinner/50"
            buttonClassName="bg-dinner-foreground text-dinner hover:bg-dinner-foreground/90"
          />
        </div>
        <footer className="mt-16 text-center text-white/70 text-sm font-body">
          <p>
            Conçu avec ❤️ par l'IA &copy; {new Date().getFullYear()} Random Foodie
          </p>
        </footer>
      </main>
    </div>
  );
}
