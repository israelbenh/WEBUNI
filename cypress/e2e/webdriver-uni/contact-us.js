/// <reference types="Cypress"  />
describe("Test Contact Us form via WebdriverUni" , () => {
        it("Shold be able to submit a successul submission via contact us form", () =>{
            //cypress code
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            //cy.get('#contact-us').click({force: true})
            cy.get('[name="first_name"]').type("Joe")
            cy.get ('[name="last_name"]').type("kaio")
            cy.get('[name="email"]').type("joemary@gmail.com")
            cy.get('textarea.feedback-input').type("otimo cadastro")
            cy.get('[type="submit"]').click()
            cy.get('body').contains()
        });


        } );
        it.only("Shold not be able to submit a successul submission via contact us form as all fields are required", () =>{
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.document().should('have.property' , 'charset').and('eq', 'UTF-8')
            cy.title().should('include' , 'WebDriver | Contact Us')
            cy.url().should('include' , 'contactus')
            cy.get('[name="first_name"]').type("tom")
            cy.get ('[name="last_name"]').type("kaio")
            cy.get('[name="email"]').type("joemary@gmail.com")
            cy.get('textarea.feedback-input').type("otimo cadastro")
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text' , 'Thank You for your Message!')


        } );

        
        