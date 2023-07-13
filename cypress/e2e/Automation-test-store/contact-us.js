/// <reference types="Cypress"  />
describe("Test Contact Us form via Automation Test Store" , () => {
    it("Shold be able to submit a successul submission via contact us form", () =>{
        cy.visit("https://www.automationteststore.com/");
        cy.get("[href='https\:\/\/automationteststore\.com\/index\.php\?rt\=content\/contact']").click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        console.log("Test has completed!");


    } );
    
})
    
    