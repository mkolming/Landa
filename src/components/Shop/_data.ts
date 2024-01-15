export const products = [
  {
    id: "1",
    name: "Bamboo Tan",
    currency: "R$",
    price: "199,90",
    imageUrl:
      "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "2",
    name: "Iconic Turquoise",
    currency: "R$",
    price: "199,90",
    imageUrl:
      "https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "3",
    name: "Marble Leather",
    currency: "R$",
    price: "199,90",
    imageUrl:
      "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "4",
    name: "Silve wolf",
    currency: "R$",
    price: "199,90",
    imageUrl:
      "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "5",
    name: "Produto 1",
    currency: "R$",
    price: "199,90",
    imageUrl:
      "https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
  {
    id: "6",
    name: "Produto 2",
    currency: "R$",
    price: "199,90",
    imageUrl:
      "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
