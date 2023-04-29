/// <reference types='cypress'/>

// importar las clases
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingcartPage } from "../support/pages/shoppingcartPage";
import { CheckoutPage } from "../support/pages/checkoutPage";
import { Receipt } from "../support/pages/receipt";


describe('Pre-entrega', ()=>{

    // Datos que contiene el fixture   
    let data
  
    const homePage = new HomePage;
    const productsPage = new ProductsPage;
    const shoppingcartPage = new ShoppingcartPage;
    const checkoutPage = new CheckoutPage;
    const receipt =  new Receipt
    

  before('before', ()=>{    
    // Datos del fixture
    cy.fixture('fixturesPushingit').then(datos => {
    data = datos});
  })

  it('tests', ()=>{
    cy.register()
    cy.login(Cypress.env('user'), Cypress.env('password'));
    cy.visit('')
    homePage.clickOnlineShopLink();
    productsPage.addProducts(data.products.product1.name);
    productsPage.addProducts(data.products.product2.name);
    productsPage.clickShoppingCartButton();
    shoppingcartPage.checkNameProduct(data.products.product1.name).should('have.text', data.products.product1.name);
    shoppingcartPage.checkNameProduct(data.products.product2.name).should('have.text', data.products.product2.name);
    shoppingcartPage.checkProductRelatesToPrice(data.products.product1.name).should('have.text', '$' + data.products.product1.price)
    shoppingcartPage.checkProductRelatesToPrice(data.products.product2.name).should('have.text', '$' + data.products.product2.price);   
    shoppingcartPage.showTotalPrice();
    shoppingcartPage.sumPriceProducts().should('have.text', data.products.product1.price + data.products.product2.price)
    shoppingcartPage.clickCheckoutButton();
    checkoutPage.writeFirstName(data.checkout.firstName);
    checkoutPage.writeLastName(data.checkout.lastName);
    checkoutPage.writeCardNumber(data.checkout.cardNumber);
    checkoutPage.clickPurchaseButton(); 
      
    receipt.checkNameReceipt().should('have.text', data.checkout.firstName + ' ' + data.checkout.lastName + ' has succesfully purchased the following items');
    receipt.checkNameProductReceipt(data.products.product1.name).should('have.text', data.products.product1.name );
    receipt.checkCreditCardNumberReceipt().should('have.text', data.checkout.cardNumber);
    receipt.checkTotalPriceReceipt().should('have.text', 'You have spent $' + (data.products.product1.price + data.products.product2.price));
    cy.delete(Cypress.env('user'))
  })

  after('after', () => {
    cy.log('after')
    
})

})
