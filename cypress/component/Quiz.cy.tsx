// cypress/component/Quiz.cy.tsx
import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('mounts and shows the Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });
});
