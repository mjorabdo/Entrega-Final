export class CheckoutPage{

    constructor(){
        this.firstName = '#FirstName',
        this.lastname='[name="lastName"]',
        this.cardNumber='#cardNumber';
        this.purchaseButton='.chakra-button.css-13zsa';
             
    }

writeFirstName(firstName){
    cy.get(this.firstName).type(firstName)
};
writeLastName(lastName){
    cy.get(this.lastname).type(lastName)
};
writeCardNumber(number){
   cy.get(this.cardNumber).type(number)
}
clickPurchaseButton(){
   cy.get(this.purchaseButton).click()
}
}