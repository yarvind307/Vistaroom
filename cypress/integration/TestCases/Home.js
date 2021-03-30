/// <reference types="Cypress" />

describe('Search Functionality', function(){

    it('Basic search', function(){

        //visit home page
        cy.visit('https://www.vistarooms.com/')

        //select city from the list.
        cy.get('.search-container').click()
        cy.get('.dropdown-item.city-dropdown-item-wrapper').contains('mumbai, maharashtra').click()

        //select date range form the date picker.
        
        //guest number
        cy.get('.col-lg-2.input-text > .form-group > .form-control').click()
        cy.get('.col-lg-2.input-text > .form-group > .dropdown-menu > :nth-child(1) > div > .qtyplus').click().click()
        cy.get('.col-lg-2.input-text > .form-group > .dropdown-menu > :nth-child(2) > div > .qtypluschild').click()
        cy.get('.col-lg-2.input-text > .form-group > .dropdown-menu > :nth-child(4) > .pull-right').click()
        cy.get('.search-btn > .btn').click()
        //cy.get('#carouselExampleControls4 > .carousel-inner > a > .active > .d-block').contains(' Leo Villa').click()


    })

})
