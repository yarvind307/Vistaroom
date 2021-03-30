/// <reference types="Cypress" />

describe('Search Functionality', function(){

    it('Basic search', function(){

        //visit home page
        cy.visit('https://www.vistarooms.com/')

        cy.get('.col-sm-6 > .form-group > #date-range').click()
        cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-head > bs-datepicker-navigation-view > .next > span').click()
        cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-head > bs-datepicker-navigation-view > .ng-star-inserted > span').click()


        


    })

})
