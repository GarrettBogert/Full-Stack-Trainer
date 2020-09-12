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
            correctAnswer: [2,3],
            category: "azure"
        },
        {
            question: "When planning to migrate a public website to Azure, you must [plan to pay monthly usage costs]. Instructions: Review the text contained in square brackets. If it makes the statement correct, select 'No change is needed'. If the statement is incorrect, select the answer choice that makes the statement correct.",
            answerChoices: [
                "No change is needed.",
                "Deploy a VPN", 
                "pay to transfer all the website data to Azure", 
                "reduce the number of connections to the website"                  
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
            Your company plans to migrate all its data and resources to Azure.
            The company's migration plan states that only platform as a service (PaaS) solutions must be used in Azure.
            You need to deploy an Azure environment that supports the planned migration.
            Solution: You create an Azure App Service and Azure SQL databases.
            Does this meet the goal?`,
            answerChoices: [
                "yes",
                "no",                                  
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
            Your company plans to migrate all its data and resources to Azure.
            The company's migration plan states that only platform as a service (PaaS) solutions must be used in Azure.
            You need to deploy an Azure environment that supports the planned migration.
            Solution: You create an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed.
            Does this meet the goal?`,
            answerChoices: [
                "yes",
                "no",                                  
            ],
            correctAnswer: 1,
            category: "azure"
        },
        {
            question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
            Your company plans to migrate all its data and resources to Azure.
            The company's migration plan states that only platform as a service (PaaS) solutions must be used in Azure.
            You need to deploy an Azure environment that supports the planned migration.
            Solution: You create an Azure App Service and Azure Storage accounts.
            Does this meet the goal?`,
            answerChoices: [
                "yes",
                "no",                                  
            ],
            correctAnswer: 1,
            category: "azure"
        },
        {
            question: `Your company hosts an accounting named App1 that is used by all the customers of the company.
            App1 has low usage during the first three weeks of each month and very high usage during the last week of each month.
            Which benefit of Azure Cloud Services supports cost management for this type of usage pattern?`,
            answerChoices: [
                "high availability",
                "high latency",
                "elasticity",
                "load balancing"                                  
            ],
            correctAnswer: 2,
            category: "azure"
        },
        {
            question: `You plan to migrate a web application to Azure. The web application is accessed by external users.
            You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application.
            What should you include in the recommendation?`,
            answerChoices: [
                "software as a service (SaaS)",
                "platform as a service (PaaS)",
                "infrastructure as a service (Iaas)",
                "database as a service (DaaS)"                            
            ],
            correctAnswer: 1,
            category: "azure"
        },
        {
            question: `Which cloud deployment solution is used for Azure virtual machines`,
            answerChoices: [                                
                "infrastructure as a service (Iaas)",
                "platform as a service (PaaS)",
                "software as a service (SaaS)"                                  
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: `Which cloud deployment solution is used for Azure SQL databases`,
            answerChoices: [                                
                "infrastructure as a service (Iaas)",
                "platform as a service (PaaS)",
                "software as a service (SaaS)"                                  
            ],
            correctAnswer: 1,
            category: "azure"
        },
        {
            question: `You have an on-premises network that contains 100 servers.
            You need to recommend a solution that provides additional resources to your users. The solution must minimize capital and operational expenditure costs.
            What should you include in the recommendation?`,
            answerChoices: [                                
                "a complete migration to the public cloud",
                "an additional data center",
                "a private cloud",
                "a hybrid cloud"                                  
            ],
            correctAnswer: 2,
            category: "azure"
        },
        {
            question: `To achieve a hybrid cloud model, a company must always migrate from a private cloud model.`,
            answerChoices: [                                
                "true",
                "false"                                    
            ],
            correctAnswer: 1,
            category: "azure"
        },
        {
            question: `A company can extend the capacity of its internal network by using the public cloud`,
            answerChoices: [                                
                "true",
                "false"                                    
            ],
            correctAnswer: 0,
            category: "azure"
        },
        {
            question: `In a public cloud model, only guest users at your company can access the resources in the cloud.`,
            answerChoices: [                                
                "true",
                "false"                                    
            ],
            correctAnswer: 1,
            category: "azure"
        },
        {
            question: `You plan to migrate several servers from an on-premises network to Azure.
            You need to identify the primary benefit of using a public cloud service for the servers.
            What should you identify?`,
            answerChoices: [                                
                "The public cloud is owned by the public, NOT a private corporation",
                "The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud" ,
                "All public cloud resources can be freely accessed by every member of the public",
                "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud"                                   
            ],
            correctAnswer: 3,
            category: "azure"
        },
        
    ]
}

export function getPool(enabledCategories, userQuizzes) {
    let allQuestions = [...getAll(), ...userQuizzes];
    let questionsWeWant = allQuestions.filter(question => enabledCategories.includes(question.category));
    return questionsWeWant;
}
