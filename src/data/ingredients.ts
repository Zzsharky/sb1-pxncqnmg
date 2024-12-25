export type Ingredient = {
  id: string;
  name: string;
  category: 'legumes' | 'viandes' | 'poissons' | 'epices' | 'feculents' | 'produits-laitiers' | 'fruits';
};

export const ingredients: Ingredient[] = [
  // Légumes
  { id: 'poivron', name: 'Poivrons', category: 'legumes' },
  { id: 'carotte', name: 'Carottes', category: 'legumes' },
  { id: 'courgette', name: 'Courgettes', category: 'legumes' },
  { id: 'aubergine', name: 'Aubergines', category: 'legumes' },
  { id: 'tomate', name: 'Tomates', category: 'legumes' },
  { id: 'oignon', name: 'Oignons', category: 'legumes' },
  { id: 'ail', name: 'Ail', category: 'legumes' },
  { id: 'epinard', name: 'Épinards', category: 'legumes' },
  { id: 'brocoli', name: 'Brocolis', category: 'legumes' },
  { id: 'chou-fleur', name: 'Chou-fleur', category: 'legumes' },
  
  // Viandes

  { id: 'sardine', name: 'Sardine', category: 'poissons' },  
  { id: 'boeuf', name: 'Bœuf', category: 'viandes' },
    { id: 'poulet', name: 'Poulet', category: 'viandes' },
    { id: 'agneau', name: 'Agneau', category: 'viandes' },
    { id: 'dinde', name: 'Dinde', category: 'viandes' },
    { id: 'veau', name: 'Veau', category: 'viandes' },
    { id: 'canard', name: 'Canard', category: 'viandes' },
    { id: 'lapin', name: 'Lapin', category: 'viandes' },

  
  // Poissons
  { id: 'saumon', name: 'Saumon', category: 'poissons' },
  { id: 'thon', name: 'Thon', category: 'poissons' },
  { id: 'merlan', name: 'Merlan', category: 'poissons' },
  { id: 'dorade', name: 'Dorade', category: 'poissons' },
  
  // Épices
  { id: 'sel', name: 'Sel', category: 'epices' },
  { id: 'curry', name: 'Curry', category: 'epices' },
  { id: 'paprika', name: 'Paprika', category: 'epices' },
  { id: 'cannelle', name: 'Cannelle', category: 'epices' },
  { id: 'curcuma', name: 'Curcuma', category: 'epices' },
  { id: 'poivre', name: 'Poivre', category: 'epices' },
  { id: 'gingembre', name: 'Gingembre', category: 'epices' },
  { id: 'clou-de-girofle', name: 'Clou de girofle', category: 'epices' },
  { id: 'noix-de-muscade', name: 'Noix de muscade', category: 'epices' },
  { id: 'cardamome', name: 'Cardamome', category: 'epices' },
  { id: 'safran', name: 'Safran', category: 'epices' },
  
  // Féculents
  { id: 'riz', name: 'Riz', category: 'feculents' },
  { id: 'pates', name: 'Pâtes', category: 'feculents' },
  { id: 'pommes-de-terre', name: 'Pommes de terre', category: 'feculents' },
  { id: 'quinoa', name: 'Quinoa', category: 'feculents' },
  { id: 'semoule', name: 'Semoule', category: 'feculents' },
  { id: 'lentilles', name: 'Lentilles', category: 'feculents' },
  { id: 'pois-chiches', name: 'Pois chiches', category: 'feculents' },
  { id: 'haricots-blancs', name: 'Haricots blancs', category: 'feculents' },
  { id: 'patates-douces', name: 'Patates douces', category: 'feculents' },
  { id: 'boulgour', name: 'Boulgour', category: 'feculents' },
  
  // Produits laitiers
  { id: 'fromage', name: 'Fromage', category: 'produits-laitiers' },
  { id: 'creme', name: 'Crème', category: 'produits-laitiers' },
  
  // Fruits

  { id: 'citron', name: 'Citron', category: 'fruits' },
  { id: 'pomme', name: 'Pommes', category: 'fruits' },
  { id: 'banane', name: 'Bananes', category: 'fruits' },
  { id: 'orange', name: 'Oranges', category: 'fruits' },
  { id: 'fraise', name: 'Fraises', category: 'fruits' },
  { id: 'raisin', name: 'Raisins', category: 'fruits' },
  { id: 'poire', name: 'Poires', category: 'fruits' },
  { id: 'cerise', name: 'Cerisés', category: 'fruits' },
  { id: 'mangue', name: 'Mangues', category: 'fruits' },
  { id: 'ananas', name: 'Ananas', category: 'fruits' },
  { id: 'pasteque', name: 'Pastèques', category: 'fruits' },
];