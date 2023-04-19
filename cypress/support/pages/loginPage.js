export class LoginPage{

    constructor(){
        this.userInput ='#user';
        this.passInput ='#pass';
        this.submitLogInButton = '#submitForm'
    }

writeUser(user){
    cy.get(this.userInput).type(user)
};

writePassword(password){
    cy.get(this.passInput).type(password)
};

clickLogInButton(){
    cy.get(this.submitLogInButton).click()
}
}