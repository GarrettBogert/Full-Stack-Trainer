export function getAll() {
    return [
        {
            question: "What does the 'protected' modifier do?",
            answerChoices: ["It makes the member accessible only from within it's own class as well as inheriting classes.",
                "It ensures no errors are thrown upon accessing it.",
                "It makes it impossible to peek at when decompiling.",
                "It encrypts the value in-memory.",],
            correctAnswer: 0,
            category: "csharp"
        },
        {
            question: "What MS SQL server function will return the length of a string?",
            answerChoices: ["LENGTH()",
                "COUNT()",
                "LEN()",
                "SUM()",],
            correctAnswer: 2,
            category: "sql"
        },
        {
            question: "What character in csharp designates a type to be nullable when placed after the type name?",
            answerChoices: ["?",
                "!",
                "#",
                "*",],
            correctAnswer: 0,
            category: "csharp"
        },
        {
            question: "In csharp, which of the following signatures are not valid to include in an interface definition?",
            answerChoices: ["Methods",
                "Properties",
                "Events",
                "Fields",],
            correctAnswer: 3,
            category: "csharp"
        },
        {
            question: "In javascript, which keyword would you use in declaring a variable you intend to access only within an if block?",
            answerChoices: ["var",
                "let",
                "const",
            ],
            correctAnswer: 1,
            category: "javascript"
        },
        {
            question: "A platform as a service (PaaS) solution that hosts web apps in Azure provides full control of the operating systems that host applications.",
            answerChoices: [
                "yes",
                "no",               
            ],
            correctAnswer: 1,
            category: "azure"
        },
        {
            question: "A platform as a service (PaaS) solution that hosts web apps in Azure provides the ability to scale the platform automatically.",
            answerChoices: [
                "yes",
                "no",               
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: "A platform as a service (PaaS) solution that hosts web apps in Azure provides professional development services to continuously add features to custom applications.",
            answerChoices: [
                "yes",
                "no",               
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: "Azure provides flexibility between capital expenditure (CapEx) and operation expenditure(OpEx).",
            answerChoices: [
                "yes",
                "no",               
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: "If you create two Azure virtual machines that use the B2S size, each virtual machine will always generate the same monthly costs.",
            answerChoices: [
                "yes",
                "no",               
            ],
            correctAnswer: 1,
            category: "azure"
        },
        {
            question: "When an Azure virtual machine is stopped, you continue to pay storage costs associated to the virtual machine.",
            answerChoices: [
                "yes",
                "no",               
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: `When you are implementing a software as a service (SaaS) solution, you are responsible for [configuring high availability].

            Instructions: Review the text contained in square brackets. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.`,
            answerChoices: [
                "No change is needed.",
                "defining scalability rules", 
                "installing the SaaS solution", 
                "configuring the SaaS solution"               
            ],
            correctAnswer: 3,
            category: "azure"
        },
        {
            question: `You have an on-premises network that contains several servers.
                       You plan to migrate all the servers to Azure.
                       You need to recommend a solution to ensure that some of the servers are available if a single Azure data center goes offline for an extended period.
                       What should you including in the recommendation?`,
            answerChoices: [
                "fault tolerance",
                "elasticity", 
                "scalability", 
                "low latency"               
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: `An organization that hosts its infrastructure [in a private cloud] can decommission its data center.

            Instructions: Review the text contained in square brackets. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.`,
            answerChoices: [
                "No change is needed.",
                "in a hybrid cloud", 
                "in the public cloud", 
                "on a Hyper-V host"               
            ],
            correctAnswer: 2,
            category: "azure"
        },
        {
            question: "What are two characteristics of the public cloud? Each correct answer presents a complete solution.",
            answerChoices: [
                "dedicated hardware",
                "unsecured connections", 
                "limited storage", 
                "self-service management"               
            ],
            correctAnswers: [2,3],
            category: "azure"
        },
    ]
}

export function getPool(enabledCategories, userQuizzes) {
    let allQuestions = [...getAll(), ...userQuizzes];
    let questionsWeWant = allQuestions.filter(question => enabledCategories.includes(question.category));
    return questionsWeWant;
}
