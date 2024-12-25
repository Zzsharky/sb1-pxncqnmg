export type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  instructionDetails?: string[];
  prepTime: string;
  cookTime: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  imageUrl: string;
  rating?: number;
  category: string;
};