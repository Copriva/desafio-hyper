/// <reference types="cypress" /> 

context('Comércio eletrônico', () =>{

  beforeEach(() => {
    cy.visit('https://demoblaze.com/index.html')
  });


    it('Deve adicionar item ao carrinho', () =>{
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('.active > .nav-link').click();
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get(':nth-child(4) > .nav-link').click();
        cy.wait(2000);
        cy.get('.col-lg-1 > .btn').should('contain', 'Place Order');
        
    })

    it('Deve remover item do carrinho', () =>{
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('.active > .nav-link').click();
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get(':nth-child(4) > .nav-link').click();
        cy.wait(2000);
        cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click();
        cy.wait(4000);
        
    })

    it('Deve realizar checkout', () =>{
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('.active > .nav-link').click();
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get(':nth-child(4) > .nav-link').click();
        cy.wait(2000);
        cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click();
        cy.wait(2000);
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#name').type('Amanda');
        cy.get('#country').type('Brasil');
        cy.get('#city').type('São Carlos');
        cy.get('#card').type('5285492815819689');
        cy.get('#month').type('01');
        cy.get('#year').type('2025');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.sweet-alert').should('contain', 'Thank you for your purchase!');
        cy.get('.confirm').click();
        cy.wait(3000);
    })
    
});

