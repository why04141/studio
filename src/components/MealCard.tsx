"use client";

import { useState } from 'react';
import type { Restaurant } from '@/data/restaurants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dices, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MealCardProps {
  mealType: string;
  restaurants: Restaurant[];
  icon: React.ReactNode;
  className?: string;
  buttonClassName?: string;
}

export function MealCard({ mealType, restaurants, icon, className, buttonClassName }: MealCardProps) {
  const [recommendedRestaurant, setRecommendedRestaurant] = useState<Restaurant | null>(null);
  const [lastRecommendationId, setLastRecommendationId] = useState<number | null>(null);

  const googleMapsBaseUrl = "https://www.google.com/maps/search/?api=1&query=";

  const handleRecommend = () => {
    let availableRestaurants = restaurants.filter(r => r.id !== lastRecommendationId);
    if (availableRestaurants.length === 0 && restaurants.length > 0) {
      availableRestaurants = restaurants;
    }
    if(availableRestaurants.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableRestaurants.length);
    const recommendation = availableRestaurants[randomIndex];
    
    setRecommendedRestaurant(recommendation);
    setLastRecommendationId(recommendation.id);
  };

  return (
    <Card className={cn("w-full max-w-sm flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 shadow-lg", className)}>
      <CardHeader className="flex-row items-center gap-4 space-y-0">
        <div className="p-3 rounded-lg bg-black/10">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold font-headline">{mealType}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center min-h-[150px]">
        {recommendedRestaurant ? (
          <div className="text-center animate-in fade-in duration-500">
            <p className="text-2xl font-semibold mb-2 font-headline">{recommendedRestaurant.name}</p>
            <a
              href={`${googleMapsBaseUrl}${encodeURIComponent(recommendedRestaurant.googleMapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-body">{recommendedRestaurant.address}</span>
            </a>
          </div>
        ) : (
          <p className="opacity-80 font-body">Cliquez pour une recommandation!</p>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleRecommend} className={cn("w-full text-lg py-6 font-bold font-headline", buttonClassName)}>
          <Dices className="mr-2 h-6 w-6" />
          Recommander
        </Button>
      </CardFooter>
    </Card>
  );
}
