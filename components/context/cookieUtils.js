import cookie from 'cookie';

// Used to get cookies in getServerSideProps call
export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

/* Checks if product is in the cart (in the server)
   and adds inCart property accordingly */
// export function addInCartProperty(req, product) {
//   const cookies = parseCookies(req);

//   if (!cookies.cart) {
//     product.inCart = false;
//     return product;
//   }

//   const found = JSON.parse(cookies.cart).find(
//     (productInCart) => productInCart.model === product.model
//   );

//   if (found) {
//     product.inCart = true;
//   } else {
//     product.inCart = false;
//   }

//   return product;
// }

/* Get cart cookie from client and modify products
   rendered by the server */
export function evaluateProperties(req, product) {
  const cookies = parseCookies(req);

  console.log(product);

  if (!cookies.cart) {
    product.inCart = false;
    product.quantity = 1;
    product.color = 'Default';
    return product;
  }

  const productFound = JSON.parse(cookies.cart).find(
    (productInCart) => productInCart.model === product.model
  );

  if (productFound) {
    product.inCart = true;
    product.quantity = productFound.quantity;
    product.color = productFound.color;
  } else {
    product.inCart = false;
    product.quantity = 1;
    product.color = 'Default';
  }

  return product;
}
