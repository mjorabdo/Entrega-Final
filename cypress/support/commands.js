// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('register', ()=>{

cy.request({
    url:"https://pushing-it.onrender.com/api/register",
    method: "POST",
    body:{

        username : "pushingit",
        password: "123456!",
        gender: "Female",
        day: "9",
        month: "November",
        year: "1991"
    }
}).then(respuesta =>{
    expect(respuesta.status).to.be.equal(200)
})
});

Cypress.Commands.add('login', (user, password) =>{

    cy.request({
        url:'https://pushing-it.onrender.com/api/login',
        method: "POST",
        body:{
            "username" : user,
            "password": password
        }
    })
    .then(respuesta =>{
        expect(respuesta.status).to.be.equal(200)
        window.localStorage.setItem('token', respuesta.body.token)
        window.localStorage.setItem('user', respuesta.body.user.username)
    })
});

Cypress.Commands.add('delete', (user) =>{
    cy.request({
        url:"https://pushing-it.onrender.com/api/deleteuser/" + user,
        method:"DELETE"
    }).then(respuesta =>{
    expect(respuesta.status).to.be.equal(200)
})
})