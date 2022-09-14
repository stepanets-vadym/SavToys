export interface getProducts {
  count: number,
  rows: IProduct[]
}

export interface IProduct {
  id: number,
  name: string,
  price: number,
  rating: number,
  img: [string]
  newProd: boolean,
  bestseller: boolean,
  discount: number,
  createdAt: string,
  updatedAt: string,
  typeId: number,
  brandId: number,
  characteristics: [],
  descriptions: []
}