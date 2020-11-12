import Questions from '../../../src/db/QuizData';

describe('Quiz Starts Test', () => {
    it('Starts "Quizzy" Application', () => {

        // Visits the App on Local Host  
        cy.visit('http://localhost:3000/');

        // Check If Logo Equals "Q"
        cy.get('[data-cy=point-check]').contains('Q');

        // Clicks the Play Button to Start the Quiz
        cy.get('[data-cy=play]').click();

        // Function To Shuffle Array of Possible Answers
        const randomAnswerArray = () => {
            const answerArray = ['a', 'b', 'c', 'd'];
            for (let i = answerArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = answerArray[i];
                answerArray[i] = answerArray[j];
                answerArray[j] = temp;
                console.log(temp);
            }
            return answerArray;
        };
        
        // Function to Randomly Select 
        const selectOneAnswer = () => {
                let i;
                for (i = 0; i<Questions.length; i++) {
                    const test = randomAnswerArray()    
                    const randomElement = test[0]
                    cy.get(`[data-cy=answer-${randomElement}]`).click();
                }
            }

        // Take the Quiz
        selectOneAnswer();

        // Test Home Button
        cy.get('[data-cy=home]').click();

        // Clicks the Play Button to Start the Quiz Again
        cy.get('[data-cy=play]').click();

        // Answer Questions Again
        selectOneAnswer();

        // Test Restart Button
        cy.get('[data-cy=restart]').click();

        // Answer Questions Again
        selectOneAnswer();

        // Reset Timer
        cy.get('[data-cy=restart]').click();
        
        // Wait for Timer To Run Out
        cy.wait(36000);

        // Check for Home Button Text
        cy.get('[data-cy=home]').contains('Home');

        // Check If Timer Reset
        cy.get('[data-cy=time-check]').contains('35');

        // Check If Points Equals "0"
        cy.get('[data-cy=point-check]').contains('0');
    })
  })

