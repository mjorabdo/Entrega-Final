export class HomePage{

    constructor(){
      this.onlineshoplink = '//a[@id="onlineshoplink"]';
      }

clickOnlineShopLink(){
    cy.xpath(this.onlineshoplink).click();
};


}