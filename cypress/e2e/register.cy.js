import { errorMessages } from "../../src/components/Register"
describe('Register Page', () => {
  beforeEach(()=>{
    cy.visit('/') //cy.visit('http://localhost:5173')
  })
  describe('Error Messeges', () => {
    it('name input throws error for 2 chars', () => {
//Arrange 
//cy.visit('http://localhost:5173')
//Act
cy.get('[data-cy="ad-input"]').type("or")
//Assert
cy.contains(errorMessages.ad)
    })
    it('surname input throws error for 2 chars', () => {
      //Arrange 
      //cy.visit('http://localhost:5173')
      //Act
      cy.get('[data-cy="soyad-input"]').type("ka")
      //Assert
      cy.contains(errorMessages.soyad)
    })
    it('Email input throws error for orhan@gmail.', () => {
      //Arrange 
      //cy.visit('http://localhost:5173')
      //Act
      cy.get('[data-cy="email-input"]').type("orhan@gmail.")
      //Assert
      cy.contains(errorMessages.email)
    })
    it('Password input throws error for 1234', () => {
      //Arrange 
      //cy.visit('http://localhost:5173')
      //Act
      cy.get('[data-cy="password-input"]').type("1234")
      //Assert
      cy.contains(errorMessages.password)
    })
    it('Button is disabled for unvalidated inputs', () => {
      //Arrange 
      //cy.visit('http://localhost:5173')
      //Act
      cy.get('[data-cy="password-input"]').type("1234")
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.disabled")
    })
  })
  describe('Form inputs validated ', () => {
    it('button anabled for validated inputs', () => {
//Arrange 
//cy.visit('http://localhost:5173')
//Act
cy.get('[data-cy="ad-input"]').type("Orhan")
cy.get('[data-cy="soyad-input"]').type("Kaslın")
cy.get('[data-cy="email-input"]').type("orhan@gmail.com.tr")
cy.get('[data-cy="password-input"]').type("1234Aa**")
//Assert
cy.get('[data-cy="submit-button"]').should("not.be.disabled")
    })
    it('submits form on validated inputs', () => {
      //Arrange 
      //cy.visit('http://localhost:5173')
      //Act
      cy.get('[data-cy="ad-input"]').type("Orhan")
      cy.get('[data-cy="soyad-input"]').type("Kaslın")
      cy.get('[data-cy="email-input"]').type("orhan@gmail.com.tr")
      cy.get('[data-cy="password-input"]').type("1234Aa**")
      cy.get('[data-cy="submit-button"]').click();
      //Assert
      cy.get('[data-cy="response-messege"]').should("be.visible");
          })
  })
})