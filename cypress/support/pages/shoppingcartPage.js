
export class ShoppingcartPage{
 
constructor(){
  this.buttonShowTotalPrice = '.chakra-button.css-15tuzzq';
  this.productPrice = '#productPrice';
  this.totalPrice = '#price';
  this.checkoutButton = '.chakra-button.css-17aoa8p'
}
checkNameProduct(product){  
  return cy.get(`[name='${product}']`)
};

checkProductRelatesToPrice(product){ 
   return cy.get(`[name='${product}']`).siblings(this.productPrice)
};

showTotalPrice(){
  cy.get(this.buttonShowTotalPrice).click();
}

sumPriceProducts(){ 
  return cy.get(this.totalPrice)
}

clickCheckoutButton(){
   cy.get(this.checkoutButton).click()
}
}