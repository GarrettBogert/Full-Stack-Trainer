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
            },
            {
                question: "What MS SQL server function will return the length of a string?",
                answerChoices: ["LENGTH()",
                                "COUNT()",
                                "LEN()",
                                "SUM()",],
                correctAnswer: 2,
                category:"sql"
            },
            {
                question: "What character in csharp designates a type to be nullable when placed after the type name?",
                answerChoices: ["?",
                                "!",
                                "#",
                                "*",],
                correctAnswer: 0,
                category:"csharp"
            },
            {
                question: "In csharp, which of the following signatures are not valid to include in an interface definition?",
                answerChoices: ["Methods",
                                "Properties",
                                "Events",
                                "Fields",],
                correctAnswer: 3,
                category:"csharp"
            },
            {
                question: "In javascript, which keyword would you use in declaring a variable you intend to access only within an if block?",
                answerChoices: ["var",
                                "let",
                                "const",
                                ],
                correctAnswer: 1,
                category:"javascript"
            }                                          
        ]
}
    
export function getPool(enabledCategories, userQuizzes){
    let allQuestions = [...getAll(),...userQuizzes];
    let questionsWeWant = allQuestions.filter(question => enabledCategories.includes(question.category));
    return questionsWeWant;
}
