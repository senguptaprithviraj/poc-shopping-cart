export type Product = {
  _id: string;
  name: string;
  image: sanityImage;
  description: string;
  price: number;
  uniqueCode: string;
  quantity: number;
  inCart: boolean;
};

export type sanityImage = {
  alt: string;
  asset: {
    url: string;
    _id: string;
  };
};
