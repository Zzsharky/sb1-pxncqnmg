import React from 'react';
import { $ScrollView, $StackLayout, $Label, $Image, $Button } from 'react-nativescript';
import { recipes } from '../data/recipes';

export function HomeScreen() {
  return (
    <$ScrollView>
      <$StackLayout class="p-4">
        <$Label text="Kaswila" class="text-2xl font-bold mb-4" />
        
        <$Label text="Recettes de la semaine" class="text-xl font-bold mb-2" />
        <$StackLayout class="mb-4">
          {recipes.slice(0, 2).map(recipe => (
            <$StackLayout key={recipe.id} class="bg-white rounded-lg p-3 mb-2">
              <$Image src={recipe.imageUrl} class="w-full h-32 rounded" />
              <$Label text={recipe.name} class="font-bold mt-2" />
              <$Label text={`${recipe.prepTime} + ${recipe.cookTime}`} class="text-gray-500" />
            </$StackLayout>
          ))}
        </$StackLayout>

        <$Label text="Recettes populaires" class="text-xl font-bold mb-2" />
        <$StackLayout>
          {recipes.slice(0, 3).map(recipe => (
            <$StackLayout key={recipe.id} class="bg-white rounded-lg p-3 mb-2">
              <$Image src={recipe.imageUrl} class="w-24 h-24 rounded" />
              <$Label text={recipe.name} class="font-bold" />
              <$Label text={`${recipe.prepTime} + ${recipe.cookTime}`} class="text-gray-500" />
            </$StackLayout>
          ))}
        </$StackLayout>
      </$StackLayout>
    </$ScrollView>
  );
}