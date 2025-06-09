// cypress/e2e/quiz.cy.js
describe('Tech Quiz App (E2E)', () => {
  it('lets me go through all ten questions and then see my score', () => {
    // 1) Visit the running client
    cy.visit('/');

    // 2) Start the quiz
    cy.contains('Start Quiz').click();

    // 3) For each of the 10 questions, just click the first available answer button
    for (let i = 0; i < 10; i++) {
      cy.get('button').not('Start Quiz').first().click();
    }

    // 4) After the tenth answer, I should see my score and a way to restart
    cy.contains(/Your.*Score/i).should('be.visible');
    cy.contains(/Start (New|Quiz)/i).should('be.visible');
  });
});
