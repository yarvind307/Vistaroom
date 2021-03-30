/// <reference types="Cypress" />

describe('Drop Down', function(){

    it('Drop Down', function(){
        cy.visit('https://www.vistarooms.com/')
        //cy.get('input[name="city"]').click()
        
        //selecting city in dropdown. Total list in dropdown 201.
        //cy.get('.city-dropdown-item-wrapper').contains('mumbai, maharashtra').click()
        
        //selecting proprty in dropdown.
        //cy.get('input[name="city"]').type('villa')
        //cy.get('a[class="dropdown-item city-dropdown-item-wrapper"]').contains('bhudka village, haryana').click()

        //For copying the lmnts from the DOM.
        //let lis = document.getElementById('ul[id="menu"]')
        //console.log(lis);

        //Handling as an list.
        cy.get('input[name="city"]').type('Vedanta Farm Villa, nashik')
        cy.get('a[class="dropdown-item city-dropdown-item-wrapper"]').type('bhudka village')
        cy.wait(10000)
        cy.get('a[class="dropdown-item city-dropdown-item-wrapper"]').contains('bhudka village, haryana').click()
        cy.get('a[class="dropdown-item city-dropdown-item-wrapper"]').should('have.text', 'bhudka village, haryana')
        
        
    })

})