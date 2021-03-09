describe('Vistaroom Ng Slider test ', function () {
        
      it("using arrow keys", () => {
        cy.visit("https://www.vistarooms.com/search?city=pune,%20maharashtra&adult=1&child=0");
        cy.get('.w-100 > .btn').click()

        const currentValue  = 1000;
        const targetValue = 2000;
        const increment = 1;
        const steps = (targetValue - currentValue) / increment;
        const arrows = '{rightarrow}'.repeat(steps); 
        
      
       cy.get('.ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-min')
         .should('have.attr', 'aria-valuenow', 1000)
         .type(arrows)
         //.scrollTo('left', arrows)
      
       cy.get('.ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-min')
          .should('have.attr', 'aria-valuenow', 2000)

         ///////////////////////////////////////////////////

        const currentValue1  = 500000;
        const targetValue1 = 498000;
        const increment1 = 1;
        const steps1 = (currentValue1 - targetValue1) / increment1;
        const arrows1 = '{leftarrow}'.repeat(steps1); 
        
      
       cy.get('.ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-max')
         .should('have.attr', 'aria-valuenow', 500000)
         .type(arrows1)
         //.scrollTo('left', arrows)
      
       cy.get('.ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-max')
          .should('have.attr', 'aria-valuenow', 498000)

        cy.get('.vista-check-box-container').contains('Veg Only').click()
        cy.get('.vista-check-box-container').contains('Pool / Jacuzzi').click()

        cy.get('.modal-footer.test').contains('APPLY FILTERS').click()

          
        })

})

