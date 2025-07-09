export const ProductQuery = `*[_type == "product"]{
  _id,
  name,
  image{
    asset->{
      _id,
      url
    },
    alt
  },
  description,
  price,
  quantity,
  inCart
}`;
