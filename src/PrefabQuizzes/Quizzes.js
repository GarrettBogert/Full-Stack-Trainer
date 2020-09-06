export function getAll(){
    return [
            {
                question: "What does the 'protected' modifier do?",
                answerChoices: ["It makes the member accessible only from within it's own class as well as inheriting classes.",
                                "It ensures no errors are thrown upon accessing it.",
                                "It makes it impossible to peek at when decompiling.",
                                "It encrypts the value in-memory.",],
                correctAnswer: 0,
                category:"csharp"
            }            
        ]
}
    
export function getPool(enabledCategories, userQuizzes){
    let allQuestions = [...getAll(),...userQuizzes];
    let questionsWeWant = allQuestions.filter(question => enabledCategories.includes(question.category));
    return questionsWeWant;
}
