export class ShoppingcartPage{
 
checkNameProduct(product){
  

  return cy.get(`[name='${product}']`)

};

checkPriceProduct(price){
  const timeout = 10000;
  return cy.get(`[name='${price}']`)
}

checkProductRelatesToPrice(product){
 const timeout = 10000;
 cy.contains(product).siblings('#productPrice')
}
}