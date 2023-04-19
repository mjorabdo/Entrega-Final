export class ProductsPage{
 
    
    constructor(){      
      this.closeButton = '#closeModal';
      this.shoppingcartButton = '#goShoppingCart'
    }

   
addProducts(product){
  cy.get(`button[value="${product}"]`).click()
  cy.get(this.closeButton).click()
};

clickShoppingCartButton(){
 cy.get(this.shoppingcartButton).click()
}
}