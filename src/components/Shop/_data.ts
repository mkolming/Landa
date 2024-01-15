export const products = [
  {
    id: "1",
    name: "Ceramic Tan",
    currency: "R$",
    price: "199,90",
    imageUrl: "imgItems/ce1.jpg",

    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "2",
    name: "seashell",
    currency: "R$",
    price: "199,90",
    imageUrl: "imgItems/ce2.jpg",

    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "3",
    name: "Sea Star",
    currency: "R$",
    price: "199,90",
    imageUrl: "imgItems/ce3.jpg",
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "4",
    name: "sewn wood",
    currency: "R$",
    price: "199,90",
    imageUrl: "imgItems/mp 1.jpg",
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "5",
    name: "wooden slat",
    currency: "R$",
    price: "199,90",
    imageUrl: "imgItems/mp2.jpg",
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "6",
    name: "swing tree",
    currency: "R$",
    price: "199,90",
    imageUrl: "imgItems/mp3.jpg",
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
