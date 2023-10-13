import { v4 as uuidv4 } from 'uuid'
export const data = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 990,
    imgUrl: '/public/coffes/Expresso.png',
    tags: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    priceInCents: 990,
    imgUrl: '/public/coffes/Americano.png',
    tags: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    priceInCents: 990,
    imgUrl: '/public/coffes/Expresso_Cremoso.png',
    tags: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    priceInCents: 990,
    imgUrl: '/public/coffes/Café_Gelado.png',
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    priceInCents: 990,
    imgUrl: '/public/coffes/Café_com_Leite.png',
    tags: ['Tradicional', 'com Leite'],
  },
  {
    id: uuidv4(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    priceInCents: 990,
    imgUrl: '/public/coffes/Latte.png',
    tags: ['Tradicional', 'com Leite'],
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 990,
    imgUrl: '/public/coffes/Capuccino.png',
    tags: ['Tradicional', 'com Leite'],
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    priceInCents: 990,
    imgUrl: '/public/coffes/Macchiato.png',
    tags: ['Tradicional', 'com Leite'],
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    priceInCents: 990,
    imgUrl: '/public/coffes/Mochaccino.png',
    tags: ['Tradicional', 'com Leite'],
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    priceInCents: 990,
    imgUrl: '/public/coffes/Chocolate_Quente.png',
    tags: ['Especial', 'com Leite'],
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceInCents: 990,
    imgUrl: '/public/coffes/Cubano.png',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    priceInCents: 990,
    imgUrl: '/public/coffes/Havaiano.png',
    tags: ['Especial'],
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    priceInCents: 990,
    imgUrl: '/public/coffes/Árabe.png',
    tags: ['Especial'],
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    priceInCents: 990,
    imgUrl: '/public/coffes/Irlandês.png',
    tags: ['Especial', 'Alcoólico'],
  },
]
export type DataType = typeof data