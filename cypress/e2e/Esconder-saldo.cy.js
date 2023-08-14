describe('Acessar homepage', () => {
    it('Acessar site', () => {
        cy.visit('https://attalho-financas-v110.vercel.app/')
        cy.contains('span', 'Esconder saldo das contas').click()
        // CYPRESS PEGEUE O CONTEUDO (PROCURE UM 'SPAN', QUE TENHA ESCRITO 'ESCONDER SALDO DAS CONTAS')
        
    });
});