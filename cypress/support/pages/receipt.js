export class Receipt{
    constructor(){

        this.nameReceipt = 'p#name.chakra-text.css-0';
        this.creditCardNumberReceipt = '#creditCard';
        this.totalPriceReceipt = 'p#totalPrice.chakra-text.css-0';
    }

checkNameReceipt(){
     return cy.get(this.nameReceipt)
}
checkNameProductReceipt(product){  
    return cy.get(`[id='${product}']`)
  };
checkCreditCardNumberReceipt(){  
    return cy.get(this.creditCardNumberReceipt)
  };
checkTotalPriceReceipt(){
    return cy.get(this.totalPriceReceipt)
}
}