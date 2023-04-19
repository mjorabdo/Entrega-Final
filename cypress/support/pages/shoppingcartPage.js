export class ShoppingcartPage{
 
constructor(){

  this.buttonShowTotalPrice = '.chakra-button.css-15tuzzq'
}
checkNameProduct(product){
  

  return cy.get(`[name='${product}']`)

};

checkProductRelatesToPrice(product){
 
 return cy.contains(product).siblings('#productPrice')
};

showTotalPrice(){

  cy.get(this.buttonShowTotalPrice).click();
  
}


}