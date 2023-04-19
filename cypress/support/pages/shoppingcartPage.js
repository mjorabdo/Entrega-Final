export class ShoppingcartPage{
 
checkNameProduct(product){
  

  return cy.get(`[name='${product}']`)

};

checkPriceProduct(price){
  
  return cy.get(`[name='${price}']`)
}

checkProductRelatesToPrice(product){
 
 cy.contains(product).siblings('#productPrice')
}
}