

export class ShoppingcartPage{
 
constructor(){

  this.buttonShowTotalPrice = '.chakra-button.css-15tuzzq';
  this.totalPrice = '#price'
}
checkNameProduct(product){
  

  return cy.get(`[name='${product}']`)

};

checkProductRelatesToPrice(product){
 
  
   return cy.get(`[name='${product}']`).siblings('#productPrice')
};

showTotalPrice(){

  cy.get(this.buttonShowTotalPrice).click();
  
}

sumPriceProducts(){


  
  return cy.get(this.totalPrice)
    
}


}