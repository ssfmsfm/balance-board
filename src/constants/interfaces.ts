export type IProductData = {
  preHeader: string;
  header: string;
  description: React.ReactElement;
  descriptionOptions: Array<string>;
  price: number;
  finalPrice: number;
  stripeLink: string;
  gtmBuyBtnId: string;
  imagesSrc: Array<string>;
};
