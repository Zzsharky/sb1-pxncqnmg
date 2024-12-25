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
  category: string;
};

export const recipes: Recipe[] = [
  // ... existing recipes remain unchanged ...

  {
    id: 'chakhchoukha',
    name: 'Chakhchoukha',
    ingredients: [
      'semoule',
      'agneau',
      'oignons',
      'tomates',
      'pois chiches',
      'ail',
      'paprika',
      'cumin',
      'piment rouge',
      'huile d\'olive'
    ],
    instructions: [
      'Préparer la pâte et la découper en morceaux',
      'Cuire les morceaux de pâte à la vapeur',
      'Préparer la sauce avec la viande et les légumes',
      'Émietter la pâte cuite',
      'Assembler le plat avec la sauce'
    ],
    instructionDetails: [
      'Mélanger la semoule avec de l\'eau et pétrir jusqu\'à obtenir une pâte souple. Laisser reposer 30 minutes.',
      'Étaler la pâte et la découper en petits morceaux. Cuire à la vapeur pendant 20 minutes.',
      'Dans une marmite, faire revenir la viande avec les oignons et l\'ail. Ajouter les épices et les tomates.',
      'Une fois la pâte cuite, l\'émietter finement à la main.',
      'Disposer la pâte émiettée dans un grand plat et verser la sauce par-dessus.'
    ],
    prepTime: '45 min',
    cookTime: '1h30',
    difficulty: 'Difficile',
    imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/chakhchoukha.webp',
    category: 'Plat Principal'
  },

  {
    id: 'chorbafrik',
    name: 'Chorba Frik',
    ingredients: [
      '250 g de viande d\'agneau ou de poulet',
      '2 tomates râpées',
      'oignons',
      '1 cuillère à soupe de concentré de tomate',
      '1 poignée de pois chiches trempés la veille',
      '1/2 tasse de frik (blé concassé)',
      '1 bouquet de coriandre',
      '1/2 cuillère à café de cannelle',
      '1 cuillère à soupe d\'huile',
      '1,5 L d\'eau.',
      'Sel et poivre au goût'
    ],
    instructions: [
      'Faites revenir la viande avec l\'oignon haché dans l\'huile. Ajoutez les tomates râpées et le concentré de tomate.',
      'Ajoutez les pois chiches, la cannelle, le sel et le poivre. Mélangez bien.',
      'Versez l\'eau et laissez mijoter jusqu\'à ce que la viande soit presque cuite.',
      'Incorporez le frik et laissez cuire à feu doux en remuant régulièrement.',
      'Ajoutez la coriandre ciselée en fin de cuisson. Servez chaud.'
    ],
    instructionDetails: [
      'Mélanger la semoule avec de l\'eau et pétrir jusqu\'à obtenir une pâte souple. Laisser reposer 30 minutes.',
      'Étaler la pâte et la découper en petits morceaux. Cuire à la vapeur pendant 20 minutes.',
      'Dans une marmite, faire revenir la viande avec les oignons et l\'ail. Ajouter les épices et les tomates.',
      'Une fois la pâte cuite, l\'émietter finement à la main.',
      'Disposer la pâte émiettée dans un grand plat et verser la sauce par-dessus.'
    ],
    prepTime: '45 min',
    cookTime: '1h30',
    difficulty: 'Difficile',
    imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/chorba.webp',
    category: 'Plat Principal'
  },


  
  {
    id: 'mhadjeb',
    name: 'Mhadjeb',
    ingredients: [
      'semoule fine',
      'farine',
      'huile',
      'sel',
      'oignons',
      'tomates',
      'poivrons',
      'épices'
    ],
    instructions: [
      'Préparer la pâte avec la semoule et la farine',
      'Préparer la farce aux légumes',
      'Étaler la pâte en cercles fins',
      'Garnir et plier les mhadjeb',
      'Cuire sur une plaque chaude'
    ],
    instructionDetails: [
      'Mélanger la semoule, la farine et le sel. Ajouter de l\'eau progressivement pour obtenir une pâte souple.',
      'Faire revenir les légumes hachés avec les épices jusqu\'à ce que la farce soit bien cuite.',
      'Diviser la pâte en boules et les étaler très finement.',
      'Déposer la farce au centre et plier pour former un carré.',
      'Cuire sur une plaque chaude avec un peu d\'huile jusqu\'à ce que ce soit doré des deux côtés.'
    ],
    prepTime: '30 min',
    cookTime: '20 min',
    difficulty: 'Moyen',
    imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/Mhajeb.webp',
    category: 'Entrée'
  },

  {
    id: "slatafelfel",
    name: "Slata Felfel (Salade de poivrons simples)",
    ingredients: [
      "3 poivrons verts",
      "1 tomate",
      "1 gousse d\’ail",
      "2 cuillères à soupe d\’huile d\’olive",
      "Sel"
    ],
    instructions: [
      "Coupez les poivrons et la tomate en petits morceaux.",
      "Écrasez l\’ail et mélangez-le avec les légumes.",
      "Ajoutez l\’huile d’olive et le sel.",
      "Servez frais avec du pain."
    ],
    prepTime: "10 min",
    cookTime: "0 min",
    difficulty: "Facile",
    imageUrl: "https://kaswila.com/wp-content/uploads/2024/12/salade_felfel.webp",
    category: "Entrée"
  } ,
  {
    id: 'tamina',
    name: 'Tamina',
    ingredients: [
      'semoule grillée',
      'beurre',
      'miel',
      'cannelle',
      'amandes'
    ],
    instructions: [
      'Griller la semoule',
      'Incorporer le beurre fondu',
      'Ajouter le miel et la cannelle',
      'Mélanger jusqu\'à obtenir une pâte',
      'Décorer avec les amandes'
    ],
    instructionDetails: [
      'Faire griller la semoule dans une poêle jusqu\'à ce qu\'elle soit dorée et dégage un parfum de noisette.',
      'Ajouter le beurre fondu à la semoule encore chaude et bien mélanger.',
      'Incorporer le miel et la cannelle, mélanger jusqu\'à obtenir une pâte homogène.',
      'Travailler la pâte jusqu\'à ce qu\'elle devienne malléable.',
      'Former des boules ou des losanges et décorer avec des amandes.'
    ],
    prepTime: '15 min',
    cookTime: '10 min',
    difficulty: 'Facile',
    imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/tamina.webp',
    category: 'Dessert'
  },
  {
    id: 'berkoukes',
    name: 'Berkoukes',
    ingredients: [
      'berkoukes',
      'agneau',
      'pois chiches',
      'carottes',
      'navets',
      'courgettes',
      'tomates',
      'oignons',
      'ail',
      'épices'
    ],
    instructions: [
      'Préparer le bouillon avec la viande',
      'Ajouter les légumes',
      'Cuire les pois chiches',
      'Ajouter le berkoukes',
      'Laisser mijoter jusqu\'à cuisson complète'
    ],
    instructionDetails: [
      'Dans une marmite, faire revenir la viande avec les oignons et l\'ail. Ajouter les épices.',
      'Incorporer les légumes coupés en morceaux et couvrir d\'eau.',
      'Ajouter les pois chiches préalablement trempés.',
      'Quand les légumes sont presque cuits, ajouter le berkoukes.',
      'Laisser mijoter à feu doux jusqu\'à ce que le berkoukes soit tendre et ait absorbé le bouillon.'
    ],
    prepTime: '30 min',
    cookTime: '1h45',
    difficulty: 'Moyen',
    imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/berkoukes.webp',
    category: 'Plat Principal'
  },

  
{
  id: "rechta",
  name: "Rechta",
  ingredients: [
    "rechta (nouilles algériennes)",
    "agneau ou poulet",
    "pois chiches",
    "navets",
    "oignons",
    "beurre",
    "épices (cannelle, poivre)",
    "bouillon de volaille"
  ],
  instructions: [
    "Préparer la sauce avec la viande",
    "Ajouter les légumes et les pois chiches",
    "Cuire les rechta à la vapeur",
    "Mélanger la rechta avec un peu de beurre",
    "Servir avec la sauce et les légumes"
  ],
  instructionDetails: [
    "Dans une marmite, faire revenir la viande avec les oignons et les épices.",
    "Ajouter les pois chiches et les navets coupés en morceaux. Couvrir d'eau et laisser mijoter.",
    "Cuire les rechta à la vapeur en plusieurs étapes pour qu'elles soient tendres.",
    "Mélanger les nouilles avec un peu de beurre fondu.",
    "Servir les nouilles dans un plat avec la sauce, la viande et les légumes par-dessus."
  ],
  prepTime: "40 min",
  cookTime: "1h30",
  difficulty: "Moyen",
  imageUrl: "https://kaswila.com/wp-content/uploads/2024/12/rechta.webp",
  category: "Plat Principal"
},

{
  id: "couscous",
  name: "Couscous",
  ingredients: [
    "semoule de couscous",
    "agneau ou poulet",
    "pois chiches",
    "carottes",
    "navets",
    "courgettes",
    "tomates",
    "oignons",
    "huile d'olive",
    "épices (ras el hanout, cannelle)"
  ],
  instructions: [
    "Préparer la sauce avec la viande et les légumes",
    "Cuire la semoule de couscous à la vapeur",
    "Ajouter les pois chiches à la sauce",
    "Servir la semoule avec la sauce et la viande"
  ],
  instructionDetails: [
    "Faire revenir la viande avec les oignons et les épices dans une grande marmite.",
    "Ajouter les légumes coupés et les pois chiches trempés. Couvrir d'eau et laisser mijoter.",
    "Cuire la semoule de couscous à la vapeur en plusieurs étapes, en l'humidifiant légèrement entre chaque cuisson.",
    "Une fois les légumes et la viande cuits, disposer le couscous dans un grand plat.",
    "Servir avec la sauce chaude, les légumes et les morceaux de viande sur le dessus."
  ],
  prepTime: "45 min",
  cookTime: "2h",
  difficulty: "Difficile",
  imageUrl: "https://kaswila.com/wp-content/uploads/2024/12/couscous.webp",
  category: "Plat Principal"
},
{
  id: "harira",
  name: "Harira",
  ingredients: [
    "viande hachée",
    "pois chiches",
    "lentilles",
    "tomates",
    "oignons",
    "céleri",
    "coriandre",
    "épices (curcuma, paprika, cannelle, gingembre)",
    "farine",
    "huile d'olive"
  ],
  instructions: [
    "Faire revenir les oignons avec la viande et les épices",
    "Ajouter les pois chiches et les lentilles",
    "Ajouter les tomates et le bouillon",
    "Laisser mijoter jusqu'à cuisson des lentilles",
    "Épaissir avec un mélange de farine et d'eau"
  ],
  instructionDetails: [
    "Faire chauffer l'huile d'olive dans une marmite et faire revenir les oignons avec la viande hachée et les épices.",
    "Ajouter les pois chiches trempés, les lentilles, les tomates râpées et le céleri.",
    "Couvrir d'eau ou de bouillon et laisser mijoter à feu moyen.",
    "Quand les lentilles sont cuites, mélanger la farine avec de l'eau pour former une pâte liquide et l'incorporer à la soupe.",
    "Laisser mijoter jusqu'à épaississement. Servir chaud avec du pain ou des dattes."
  ],
  prepTime: "30 min",
  cookTime: "1h30",
  difficulty: "Moyen",
  imageUrl: "https://kaswila.com/wp-content/uploads/2024/12/hrira.webp",
  category: "repas"
},
{
  id: 'carbonara',
  name: 'Pâtes à la Carbonara',
  ingredients: [
    'spaghetti',
    'pancetta',
    'œufs',
    'parmesan râpé',
    'pecorino râpé',
    'ail',
    'huile d\'olive',
    'sel',
    'poivre'
  ],
  instructions: [
    'Cuire les spaghetti dans une grande casserole d\'eau bouillante salée.',
    'Faire revenir la pancetta avec l\'ail dans une poêle.',
    'Battre les œufs avec le parmesan et le pecorino, assaisonner avec du sel et du poivre.',
    'Égoutter les pâtes, ajouter dans la poêle avec la pancetta, puis incorporer le mélange œufs-fromage hors du feu.',
    'Ajouter un peu d\'eau de cuisson si nécessaire pour ajuster la consistance.'
  ],
  instructionDetails: [
    'Porter une grande casserole d\'eau salée à ébullition, y cuire les spaghetti jusqu\'à ce qu\'ils soient al dente.',
    'Dans une poêle, faire chauffer l\'huile d\'olive et dorer la pancetta coupée en dés avec l\'ail haché.',
    'Dans un bol, mélanger les œufs, le parmesan et le pecorino râpés.',
    'Égoutter les pâtes et les ajouter dans la poêle. Retirer du feu, verser le mélange d\'œufs et mélanger vigoureusement.',
    'Ajuster la consistance avec de l\'eau de cuisson des pâtes si nécessaire.'
  ],
  prepTime: '15 min',
  cookTime: '10 min',
  difficulty: 'Facile',
  imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/carbonara.webp',
  category: 'Plat principal'
},

{
  id: 'pesto',
  name: 'Pâtes au Pesto',
  ingredients: [
    'spaghetti',
    'basilic frais',
    'pignons de pin',
    'parmesan râpé',
    'ail',
    'huile d\'olive',
    'sel',
    'poivre'
  ],
  instructions: [
    'Cuire les spaghetti dans une casserole d\'eau salée.',
    'Préparer le pesto en mixant le basilic, les pignons, l\'ail, et le parmesan.',
    'Ajouter l\'huile d\'olive en filet pour obtenir une texture lisse.',
    'Mélanger le pesto avec les pâtes égouttées.',
    'Servir avec des pignons grillés et du parmesan.'
  ],
  instructionDetails: [
    'Faire griller légèrement les pignons de pin pour intensifier leur saveur.',
    'Dans un mixeur, combiner le basilic, l\'ail, les pignons et le parmesan. Mixer jusqu\'à une consistance épaisse.',
    'Ajouter l\'huile d\'olive en filet tout en mixant pour obtenir une texture crémeuse.',
    'Égoutter les pâtes cuites et les mélanger immédiatement avec le pesto.',
    'Servir dans des assiettes, garnir de pignons grillés et d\'un peu de parmesan.'
  ],
  prepTime: '10 min',
  cookTime: '10 min',
  difficulty: 'Facile',
  imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/pesto.webp',
  category: 'Plat principal'
},
{
  id: 'bolognaise',
  name: 'Pâtes à la Bolognaise',
  ingredients: [
    'spaghetti',
    'viande hachée',
    'oignon',
    'ail',
    'carotte',
    'céleri',
    'tomates concassées',
    'concentré de tomate',
    'huile d\'olive',
    'herbes de Provence',
    'sel',
    'poivre'
  ],
  instructions: [
    'Faire revenir l\'oignon, l\'ail, la carotte et le céleri dans une poêle.',
    'Ajouter la viande hachée et cuire jusqu\'à dorure.',
    'Incorporer les tomates et le concentré de tomate, assaisonner.',
    'Laisser mijoter à feu doux pendant 30 minutes.',
    'Servir la sauce avec les spaghetti cuits.'
  ],
  instructionDetails: [
    'Dans une poêle, chauffer l\'huile d\'olive et faire revenir les légumes hachés jusqu\'à ce qu\'ils soient tendres.',
    'Ajouter la viande hachée, cuire jusqu\'à ce qu\'elle soit bien dorée, puis ajouter les tomates concassées et le concentré.',
    'Assaisonner avec les herbes de Provence, le sel et le poivre. Laisser mijoter à feu doux.',
    'Cuire les spaghetti dans une grande casserole d\'eau bouillante salée.',
    'Égoutter les pâtes et servir avec la sauce bolognaise chaude.'
  ],
  prepTime: '20 min',
  cookTime: '30 min',
  difficulty: 'Moyen',
  imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/Bolognaise.webp',
  category: 'Plat principal'
},

{
id: 'mousse_chocolat',
      name: 'Mousse au Chocolat',
      ingredients: [
        '200g de chocolat noir',
        '3 œufs',
        '30g de sucre',
        '1 pincée de sel'
      ],
      instructions: [
        'Faire fondre le chocolat au bain-marie.',
        'Séparer les blancs des jaunes d’œufs.',
        'Incorporer les jaunes au chocolat fondu.',
        'Monter les blancs en neige avec une pincée de sel.',
        'Incorporer délicatement les blancs au mélange chocolaté.',
        'Réfrigérer au moins 3 heures avant de servir.'
      ],
      instructionDetails: [
        'Casser le chocolat en morceaux et le faire fondre doucement au bain-marie.',
        'Une fois fondu, ajouter les jaunes d’œufs un par un tout en mélangeant.',
        'Monter les blancs en neige ferme en ajoutant le sucre progressivement.',
        'Incorporer les blancs au mélange chocolaté à l’aide d’une spatule en soulevant délicatement.',
        'Répartir la mousse dans des verrines et réfrigérer.'
      ],
      prepTime: '15 min',
      cookTime: '0 min',
      difficulty: 'Facile',
      imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/mousse.webp',
      category: 'Dessert'
    },
    {
      id: 'tiramisu',
      name: 'Tiramisu',
      ingredients: [
        '250g de mascarpone',
        '3 œufs',
        '100g de sucre',
        '1 tasse de café',
        '24 biscuits à la cuillère',
        'cacao en poudre'
      ],
      instructions: [
        'Séparer les blancs des jaunes d’œufs.',
        'Fouetter les jaunes avec le sucre jusqu’à ce que le mélange blanchisse.',
        'Ajouter le mascarpone et bien mélanger.',
        'Monter les blancs en neige et les incorporer délicatement au mélange.',
        'Tremper les biscuits dans le café et les disposer dans un plat.',
        'Alterner couches de crème et de biscuits.',
        'Saupoudrer de cacao et réfrigérer 4 heures.'
      ],
      instructionDetails: [
        'Fouetter les jaunes d’œufs avec le sucre jusqu’à obtenir une texture mousseuse.',
        'Incorporer le mascarpone pour obtenir une crème homogène.',
        'Monter les blancs en neige ferme et les mélanger délicatement.',
        'Dans un plat, alterner une couche de biscuits trempés dans le café et une couche de crème.',
        'Saupoudrer de cacao avant de servir.'
      ],
      prepTime: '20 min',
      cookTime: '0 min',
      difficulty: 'Facile',
      imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/tiramisu.webp',
      category: 'Dessert'
    },
    {
      id: 'fondant_chocolat',
      name: 'Fondant au Chocolat',
      ingredients: [
        '200g de chocolat noir',
        '100g de beurre',
        '100g de sucre',
        '50g de farine',
        '3 œufs'
      ],
      instructions: [
        'Préchauffer le four à 180°C.',
        'Faire fondre le chocolat et le beurre ensemble.',
        'Fouetter les œufs avec le sucre.',
        'Incorporer le mélange chocolat-beurre, puis la farine.',
        'Verser dans un moule et cuire 10 minutes.',
        'Servir tiède.'
      ],
      instructionDetails: [
        'Faire fondre le chocolat avec le beurre au bain-marie ou au micro-ondes.',
        'Dans un bol, battre les œufs avec le sucre jusqu’à ce que le mélange mousse.',
        'Ajouter le chocolat fondu, puis incorporer la farine tamisée.',
        'Verser dans un moule beurré et enfourner pendant 10 minutes pour un cœur fondant.'
      ],
      prepTime: '10 min',
      cookTime: '10 min',
      difficulty: 'Facile',
      imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/Fondant.webp',
      category: 'Dessert'
    },
    {
      id: 'panna_cotta',
      name: 'Panna Cotta',
      ingredients: [
        '500ml de crème liquide',
        '3 feuilles de gélatine',
        '80g de sucre',
        '1 gousse de vanille',
        'coulis de fruits rouges'
      ],
      instructions: [
        'Faire tremper la gélatine dans l’eau froide.',
        'Faire chauffer la crème avec le sucre et la gousse de vanille fendue.',
        'Ajouter la gélatine essorée hors du feu.',
        'Verser dans des verrines et réfrigérer 4 heures.',
        'Servir avec le coulis de fruits rouges.'
      ],
      instructionDetails: [
        'Tremper les feuilles de gélatine dans un bol d’eau froide pour les ramollir.',
        'Dans une casserole, chauffer la crème liquide avec le sucre et la gousse de vanille fendue et grattée.',
        'Retirer du feu et incorporer les feuilles de gélatine essorées.',
        'Verser la préparation dans des verrines et laisser prendre au réfrigérateur.',
        'Servir avec un coulis de fruits rouges pour ajouter de la fraîcheur.'
      ],
      prepTime: '10 min',
      cookTime: '5 min',
      difficulty: 'Facile',
      imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/panna-cotta.webp',
      category: 'Dessert'
    },
    {
      id: 'salade_fruits',
      name: 'Salade de Fruits',
      ingredients: [
        '2 pommes',
        '2 bananes',
        '2 oranges',
        '1 grappe de raisin',
        '2 cuillères à soupe de miel',
        '1 citron'
      ],
      instructions: [
        'Éplucher et couper les fruits en morceaux.',
        'Presser le citron et mélanger le jus avec le miel.',
        'Ajouter la sauce aux fruits et bien mélanger.',
        'Réfrigérer 1 heure avant de servir.'
      ],
      instructionDetails: [
        'Laver et préparer les fruits : couper les pommes, bananes, oranges et raisin.',
        'Dans un bol, mélanger le jus de citron avec le miel.',
        'Verser la sauce sur les fruits et mélanger délicatement.',
        'Placer au réfrigérateur pour servir bien frais.'
      ],
      prepTime: '15 min',
      cookTime: '0 min',
      difficulty: 'Facile',
      imageUrl: 'https://kaswila.com/wp-content/uploads/2024/12/Fruits.webp',
      category: 'Dessert'
    },
  
];