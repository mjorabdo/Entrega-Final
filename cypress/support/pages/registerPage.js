export class RegisterPage{

    constructor(){
      this.spanRegisterToggle = '#registertoggle';
    }

 clickRegisterToggle(){

    cy.get(this.spanRegisterToggle).dblclick()
 }
}