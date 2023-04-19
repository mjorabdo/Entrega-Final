/// <reference types='cypress'/>


// importar las clases

import { RegisterPage } from "../support/pages/registerPage";
import { LoginPage } from "../support/pages/loginPage";
import { HeadPage } from "../support/pages/headPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingcartPage } from "../support/pages/shoppingcartPage";

describe('Pre-entrega', ()=>{

    // Datos que contiene el fixture   
    let data

    //Const timeout

    const timeout = 10000;
   

    // Const de las clases
    const registerPage = new RegisterPage;
    const loginPage = new LoginPage;
    const headPage = new HeadPage;
    const homePage = new HomePage;
    const productsPage = new ProductsPage;
    const shoppingcartPage = new ShoppingcartPage;

  before('before', ()=>{
    
    // Datos del fixture
    cy.fixture('fixturesPushingit').then(datos => {
    
     data = datos});

  })


   beforeEach('beforeEach', ()=>{

    cy.visit('');

  });


  it('tests', ()=>{

    registerPage.clickRegisterToggle();
    loginPage.writeUser(data.user.user);
    loginPage.writePassword(data.user.password);
    loginPage.clickLogInButton();
    cy.xpath(headPage.h2UserPushingit, {timeout:timeout}).should('exist');
    homePage.clickOnlineShopLink();
    productsPage.addProducts(data.products.product1.name);
    productsPage.addProducts(data.products.product2.name);
    productsPage.clickShoppingCartButton();
    shoppingcartPage.checkNameProduct(data.products.product1.name).should('have.text', data.products.product1.name);
    shoppingcartPage.checkNameProduct(data.products.product2.name).should('have.text', data.products.product2.name);
    shoppingcartPage.checkPriceProduct(data.products.product1.price).should('have.text', "$" + data.products.product1.price.toString());
    shoppingcartPage.checkPriceProduct(data.products.product2.price).should('have.text', "$" + data.products.product2.price.toString());
    shoppingcartPage.checkProductRelatesToPrice(data.products.product1.name);
    shoppingcartPage.checkProductRelatesToPrice(data.products.product2.name);
    
  })

})