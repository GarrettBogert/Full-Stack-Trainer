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
            question: "What is managed code?",
            answerChoices: [
                "Code that is reviewed closely by a manager before being used in productions.",
                "Code that is executed by the Common Language Runtime",
                "Code that does not declare variables using the 'var' keyword.",
                "Code written in C++",],
            correctAnswer: 1,
            category: "csharp"
        },
        {
            question: "What is an interface?",
            answerChoices: [
                "A class with no implementation.",
                "A class with an implementation for every possible operation",
                "An attribute used to describe a method belonging to an API",
            ],
            correctAnswer: 0,
            category: "csharp"
        },
        {
            question: "Which of the following are not actual class types in C#?",
            answerChoices: [
                "Abstract class",
                "Partial class",
                "Master class",
                "Sealed class",
                "Static class",
                "Info class"
            ],
            correctAnswer: [2,5],
            category: "csharp"
        },
        {
            question: "Which of the following are not valid uses of 'using' in c#?",
            answerChoices: [
                "As a directive for referencing/importing libraries.",
                "As a keyword to indicate the usage of an IDisposable",
                "As a keyword before a variable initialization to put a resource lock on a variable.",
                "As a directive for aliasing AND referencing/importing libraries",               
            ],
            correctAnswer: [2],
            category: "csharp"
        },
        {
            question: "Which of the following are not valid keywords of exception handling c#?",
            answerChoices: [
                "catch",
                "try",
                "toss",
                "eventually",              
                "throw",
                "finally",   
                "inject"            
            ],
            correctAnswer: [2,3,6],
            category: "csharp"
        },
        {
            question: "Which of the following are not valid keywords of exception handling c#?",
            answerChoices: [
                "catch",
                "try",
                "toss",
                "eventually",              
                "throw",
                "finally",   
                "inject"            
            ],
            correctAnswer: [2,3,6],
            category: "csharp"
        },
        {
            question: "Reference types are allocated on the Heap.",
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "csharp"
        },
        {
            question: "Value types are allocated on the stack.",
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "csharp"
        },
        {
            question: "What character denotes a destructor method?",
            answerChoices: [
                "^",
                "!",
                "!!",
                "@",
                "~"
            ],
            correctAnswer: 4,
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
            category: "Azure AZ-900"
        },
        {
            question: "A platform as a service (PaaS) solution that hosts web apps in Azure provides the ability to scale the platform automatically.",
            answerChoices: [
                "yes",
                "no",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: "A platform as a service (PaaS) solution that hosts web apps in Azure provides professional development services to continuously add features to custom applications.",
            answerChoices: [
                "yes",
                "no",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: "Azure provides flexibility between capital expenditure (CapEx) and operation expenditure(OpEx).",
            answerChoices: [
                "yes",
                "no",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: "If you create two Azure virtual machines that use the B2S size, each virtual machine will always generate the same monthly costs.",
            answerChoices: [
                "yes",
                "no",
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: "When an Azure virtual machine is stopped, you continue to pay storage costs associated to the virtual machine.",
            answerChoices: [
                "yes",
                "no",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
        },
        {
            question: "What are two characteristics of the public cloud? Each correct answer presents a complete solution.",
            answerChoices: [
                "dedicated hardware",
                "unsecured connections",
                "limited storage",
                "self-service management"
            ],
            correctAnswer: [2, 3],
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
        },
        {
            question: `Which cloud deployment solution is used for Azure virtual machines`,
            answerChoices: [
                "infrastructure as a service (Iaas)",
                "platform as a service (PaaS)",
                "software as a service (SaaS)"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which cloud deployment solution is used for Azure SQL databases`,
            answerChoices: [
                "infrastructure as a service (Iaas)",
                "platform as a service (PaaS)",
                "software as a service (SaaS)"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
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
            category: "Azure AZ-900"
        },
        {
            question: `To achieve a hybrid cloud model, a company must always migrate from a private cloud model.`,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A company can extend the capacity of its internal network by using the public cloud`,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `In a public cloud model, only guest users at your company can access the resources in the cloud.`,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to migrate several servers from an on-premises network to Azure.
            You need to identify the primary benefit of using a public cloud service for the servers.
            What should you identify?`,
            answerChoices: [
                "The public cloud is owned by the public, NOT a private corporation",
                "The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud",
                "All public cloud resources can be freely accessed by every member of the public",
                "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
            You plan to deploy several Azure virtual machines.
            You need to ensure that the services running on the virtual machines are available if a single data center fails.
            Solution: You deploy the virtual machines to two or more scale sets.
            Does this meet the goal?`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
            You plan to deploy several Azure virtual machines.
            You need to ensure that the services running on the virtual machines are available if a single data center fails.
            Solution: You deploy the virtual machines to two or more availability zones.
            Does this meet the goal?`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
            After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
            You plan to deploy several Azure virtual machines.
            You need to ensure that the services running on the virtual machines are available if a single data center fails.
            Solution: You deploy the virtual machines to two or more regions.
            Does this meet the goal?`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You have 1,000 virtual machines hosted on the Hyper-V hosts in a data center.
            You plan to migrate all the virtual machines to an Azure pay-as-you-go subscription.
            You need to identify which expenditure model to use for the planned Azure solution.
            Which expenditure model should you identify?`,
            answerChoices: [
                "operational",
                "elastic",
                "capital",
                "scalable"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `What benefit describes a cloud service remaining available after it occurs?`,
            answerChoices: [
                "Disaster recovery",
                "Fault tolerance",
                "Low latency",
                "Dynamic scalability"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `What benefit describes a cloud service that can be recovered after it occurs?`,
            answerChoices: [
                "Disaster recovery",
                "Fault tolerance",
                "Low latency",
                "Dynamic scalability"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `What benefit describes a cloud service that performs quicly when load increases?`,
            answerChoices: [
                "Disaster recovery",
                "Fault tolerance",
                "Low latency",
                "Dynamic scalability"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `What benefit describes a cloud service that can be accessed quickly to the internet?`,
            answerChoices: [
                "Disaster recovery",
                "Fault tolerance",
                "Low latency",
                "Dynamic scalability"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `To implement a hybrid cloud model, a company must always migrate from a private cloud model`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A company can extend the computing resources of its internal network by using the public cloud`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `In a public cloud model, only guest users at your company can access the resources in the cloud`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Azure resources can only access other resources in the same resource group`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `If you delete a resource group, all the resources in the resource group will be deleted.`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `A resource group can contain resources from multiple Azure regions`,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has an on-premises network that contains multiple servers.
            The company plans to reduce the following administrative responsibilities of network administrators:
            ✑ Backing up application data
            ✑ Replacing failed server hardware
            ✑ Managing physical server security
            ✑ Updating server operating systems
            ✑ Managing permissions to shared documents
            The company plans to migrate several servers to Azure virtual machines.
            You need to identify which administrative responsibilities will be reduced after the planned migration.
            Which two responsibilities should you identify? Each correct answer presents a complete solution.
            `,
            answerChoices: [
                "Replacing failed server hardware",
                "Backing up application data",
                "Managing physical server activity",
                "Updating server operating systems",
                "Managing permissions to shared documents"
            ],
            correctAnswer: [0, 2],
            category: "Azure AZ-900"
        },
        {
            question: `All the Azure resources deployed to a single resource group must share the same Azure region.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `If you assign a tag to a resource group, all tthe Azure resources in that resource group are assigned to the same tag.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `If you set permissions to a resource group, all the Azure resources in that resource group inherit the permissions.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to deploy an Artificial Intelligence (AI) solution in Azure.
            What should the company use to build, test, and deploy predictive analytics solutions?
            `,
            answerChoices: [
                "Azure Logic Apps",
                "Azure Machine Learning Studio",
                "Azure Batch",
                "Azure Cosmos DB"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Azure Advisor provides recommendations on how to improve the security of an Azure Active Directory (Azure AD) environment. 
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Azure Advisor provides recommendations on how to reduce the cost of running Azure virtual machines. 
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Azure Advisor provides recommendations on how to configure the network settings on Azure virtual machines. 
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Select which Azure management tools are compatible with Windows 10 (Option should be the one with the most possible compatible tools)
            `,
            answerChoices: [
                "The Azure CLI and the Azure portal",
                "The Azure portal and Azure PowerShell",
                "The Azure CLI and Azure PowerShell",
                "The Azure CLI, the Azure portal, and Azure PowerShell"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `Select which Azure management tools are compatible with Ubuntu (Option should be the one with the most possible compatible tools)
            `,
            answerChoices: [
                "The Azure CLI and the Azure portal",
                "The Azure portal and Azure PowerShell",
                "The Azure CLI and Azure PowerShell",
                "The Azure CLI, the Azure portal, and Azure PowerShell"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `Select which Azure management tools are compatible with MacOS Mojave (Option should be the one with the most possible compatible tools)
            `,
            answerChoices: [
                "The Azure CLI and the Azure portal",
                "The Azure portal and Azure PowerShell",
                "The Azure CLI and Azure PowerShell",
                "The Azure CLI, the Azure portal, and Azure PowerShell"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `This question requires that you evaluate the square bracketed text to determine if it is correct.
            [Azure policies provide] a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Resource groups provide",
                "Azure Resource Manager provides",
                "Management groups provide"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service provides a digital online assistant that provides speech support?
            `,
            answerChoices: [
                "Azure Machine Learning",
                "Azure IoT Hub",
                "Azure AI bot",
                "Azure Functions"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service uses past trainings to provide predictions that have high probability?
            `,
            answerChoices: [
                "Azure Machine Learning",
                "Azure IoT Hub",
                "Azure AI bot",
                "Azure Functions"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service provides serverless computing functionalities?
            `,
            answerChoices: [
                "Azure Machine Learning",
                "Azure IoT Hub",
                "Azure AI bot",
                "Azure Functions"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service processes data from millions of sensors
            `,
            answerChoices: [
                "Azure Machine Learning",
                "Azure IoT Hub",
                "Azure AI bot",
                "Azure Functions"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has several business units.
            Each business unit requires 20 different Azure resources for daily operation. All the business units require the same type of Azure resources.
            You need to recommend a solution to automate the creation of the Azure resources.
            What should you include in the recommendations?
            `,
            answerChoices: [
                "Azure Resource Manager Templates",
                "virtual machine scale sets",
                "the Azure API Management service",
                "management groups"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service provides the platform for serverless code?
            `,
            answerChoices: [
                "Azure Databricks",
                "Azure Functions",
                "Azure App Service",
                "Azure Application Insights"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service is a big data analysis service for machine learning?
            `,
            answerChoices: [
                "Azure Databricks",
                "Azure Functions",
                "Azure App Service",
                "Azure Application Insights"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which azure service detects and diagnoses anomalies in web apps?
            `,
            answerChoices: [
                "Azure Databricks",
                "Azure Functions",
                "Azure App Service",
                "Azure Application Insights"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `Which azure service hosts a web app?
            `,
            answerChoices: [
                "Azure Databricks",
                "Azure Functions",
                "Azure App Service",
                "Azure Application Insights"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to deploy a critical line-of-business application to Azure.
            The application will run on an Azure virtual machine.
            You need to recommend a deployment solution for the application. The solution must provide a guaranteed availability of 99.99 percent.
            What is the minimum number of virtual machines and the minimum number of availability zones you should recommend for the deployment?
            `,
            answerChoices: [
                "Two VMs with one availability zone",
                "Two VMs with two availability zones",
                "One VM with one availability zone",
                "One VM with two availability zones"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service should you use to correlate events from multiple resources into a centralized repository?
            `,
            answerChoices: [
                "Azure Event Hubs",
                "Azure Analysis Services",
                "Azure Monitor",
                "Azure Log Analytics"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop.
            Solution: You use PowerShell in Azure Cloud Shell.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop.
            Solution: You use the PowerApps portal.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop.
            Solution: You use the Azure portal.            
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Data that is copied to an Azure Storage account is maintained automatically in at least three copies.           
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `All data that is copied to an Azure Storage account is backed up automatically to another Azure data center.          
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure Storage account can contain up to 2 TB of data and up to one million files.          
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `If you have Azure resources deployed to every region, you can implement availability zones in all the regions.       
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Only virtual machines that run Windows Server can be created in availability zones       
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Availability zones are used to replicate data and applications to multiple regions.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure region contains one or more data centers that [are connected by using a low-latency network.]
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Is found in each country where Microsoft has a subsidary office",
                "Can be found in every country in Europe and the Americas only",
                "Contains one or more data centers that are connected by using a high-latency network"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must [be deployed to a separate virtual network].
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Run a different operating system than the other virtual machines",
                "be deployed to a separate resource group",
                "have two network interfaces"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `When you need to delegate permissions to several Azure virtual machines simultaneously, you must deploy the Azure virtual machines [to the same Azure region].
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "by using the same Azure Resource Manager template",
                "to the same resource group",
                "to the same availability zone"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `One of the benefits of Azure SQL Data Warehouse is that [high availability] is built into the platform.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "automatic scaling",
                "data compression",
                "versioning"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `A support engineer plans to perform several Azure management tasks by using the Azure CLI.
            You install the CLI on a computer.
            You need to tell the support engineer which tools to use to run the CLI.
            Which two tools should you instruct the support engineer to use?
            `,
            answerChoices: [
                "Command Prompt",
                "Azure Resource Explorer",
                "Windows PowerShell",
                "Windows Defender Firewall",
                "Network and Sharing Center"
            ],
            correctAnswer: [0, 2],
            category: "Azure AZ-900"
        },
        {
            question: `You need to manage Azure by using Azure Cloud Shell.
            Which Azure portal icon should you select?
            `,
            answerChoices: [
                ">_",
                "Icon with spiral notebook and funnel in front of it",
                "Bell icon",
                "Gear icon",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to store 20 TB of data in Azure. The data will be accessed infrequently and visualized by using Microsoft Power BI.
            You need to recommend a storage solution for the data.
            Which two solutions should you recommend? Each correct answer presents a complete solution.
            `,
            answerChoices: [
                "Azure Data Lake",
                "Azure Cosmos DB",
                "Azure SQL Data Warehouse",
                "Azure SQL Database",
                "Azure Database for PostgreSQL"
            ],
            correctAnswer: [0, 2],
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure environment that contains 10 web apps. To which URL should you connect to manage all the Azure resources?
            `,
            answerChoices: [
                "admin.azurewebsites.com",
                "portal.azurewebsites.com",
                "portal.azure.com",
                "portal.microsoft.com",
                "admin.azure.com"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `You need to identify the type of failure for which an Azure availability zone can be used to protect access to Azure services.
            What should you identify?
            `,
            answerChoices: [
                "a physical server failure",
                "an Azure region failure",
                "a storage failure",
                "an Azure data center failure"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to extend your company's network to Azure. The network contains a VPN appliance that uses an IP address of 131.107.200.1.
            You need to create an Azure resource that identifies the VPN appliance.
            Which Azure resource should you create?
            `,
            answerChoices: [
                "virtual networks",
                "load balancers",
                "Virtual network gateways",
                "DNS zones",
                "Traffic Manager profiles",
                "Network watcher",
                "Local network gateways",
                "Network security groups (classic)",
                "Public IP addresses",
                "Connections",
                "Route tables",
                "Virtual networks(classic)"

            ],
            correctAnswer: 6,
            category: "Azure AZ-900"
        },
        {
            question: `You have a virtual machine named VM1 that runs Windows Server 2016. VM1 is in the East US Azure region.
            Which Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?
            `,
            answerChoices: [
                "Azure Service Fabric",
                "Azure Monitor",
                "Azure virtual machines",
                "Azure advisor"

            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure administrator plans to run a PowerShell script that creates Azure resources.
            You need to recommend which computer configuration to use to run the script.
            Solution: Run the script from a computer that runs Linux and has the Azure CLI tools installed.
            Does this meet the goal?
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure administrator plans to run a PowerShell script that creates Azure resources.
            You need to recommend which computer configuration to use to run the script.
            Solution: Run the script from a computer that runs Chrome OS and uses Azure Cloud Shell.
            Does this meet the goal?
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure administrator plans to run a PowerShell script that creates Azure resources.
            You need to recommend which computer configuration to use to run the script.
            Solution: Run the script from a computer that runs macOS and has PowerShell Core 6.0 installed.
            Does this meet the goal?
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure environment that contains 10 virtual networks and 100 virtual machines.
            You need to limit the amount of inbound traffic to all the Azure virtual networks.
            What should you create?
            `,
            answerChoices: [
                "one network security group (NSG)",
                "10 virtual network gateways",
                "10 Azure ExpressRoute circuits",
                "one Azure firewall"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `You need to view a list of planned maintenance events that can affect the availability of an Azure subscription.
            Which blade should you use from the Azure portal?
            `,
            answerChoices: [
                "Help + support",
                "Security Center",
                "Monitor",
                "App services"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which solution describes an integrated solution for the deployment of code?
            `,
            answerChoices: [
                "Azure Cognitive Services",
                "Azure Advisor",
                "Azure DevOps",
                "Azure Application Insights"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Which describes a tool that provides guidance and recommendation to improve an Azure environment
            `,
            answerChoices: [
                "Azure Cognitive Services",
                "Azure Advisor",
                "Azure DevOps",
                "Azure Application Insights"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Which describes a simplified tool to build intelligent Artificial Intelligence (AI) applications?
            `,
            answerChoices: [
                "Azure Cognitive Services",
                "Azure Advisor",
                "Azure DevOps",
                "Azure Application Insights"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which describes a tool that monitors web applications?
            `,
            answerChoices: [
                "Azure Cognitive Services",
                "Azure Advisor",
                "Azure DevOps",
                "Azure Application Insights"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure environment that contains multiple Azure virtual machines.
            You plan to implement a solution that enables the client computers on your on-premises network to communicate to the Azure virtual machines.
            You need to recommend which Azure resources must be created for the planned solution.
            Which two Azure resources should you include in the recommendation?
            `,
            answerChoices: [
                "a virtual network gateway",
                "a load balancer",
                "an application gateway",
                "a virtual network",
                "a gateway subnet"
            ],
            correctAnswer: [3, 4],
            category: "Azure AZ-900"
        },
        {
            question: `Which of the following is a managed relational cloud database service?
            `,
            answerChoices: [
                "Azure SQL Database",
                "Azure SQL Data Warehouse",
                "Azure Data Lake Analytics",
                "Azure HDInsight"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which of the following is a cloud-based service that leverages massively parallel processing (MPP) to quickly run complex queries across petabytes of data in a relational database?"
            `,
            answerChoices: [
                "Azure SQL Database",
                "Azure SQL Data Warehouse",
                "Azure Data Lake Analytics",
                "Azure HDInsight"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Which of the following can run massively parallel data transformation and processing programs across petabytes of data?
            `,
            answerChoices: [
                "Azure SQL Database",
                "Azure SQL Data Warehouse",
                "Azure Data Lake Analytics",
                "Azure HDInsight"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Which azure portal blade allows you to monitor the health of Azure services?
            `,
            answerChoices: [
                "Monitor",
                "Subscriptions",
                "Marketplace",
                "Advisor"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which azure portal blade allows you to browse available virtual machine images?
            `,
            answerChoices: [
                "Monitor",
                "Subscriptions",
                "Marketplace",
                "Advisor"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Which azure portal blade allows you to view security recommendations?
            `,
            answerChoices: [
                "Monitor",
                "Subscriptions",
                "Marketplace",
                "Advisor"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure environment.
            You need to create a new Azure virtual machine from an Android laptop.
            Solution: You use Bash in Azure Cloud Shell.
            Does this meet the goal?            
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to create an Azure virtual machine.
            You need to identify which storage service must be used to store the data disks of the virtual machine.
            What should you identify?           
            `,
            answerChoices: [
                "Blobs",
                "Files",
                "Tables",
                "Queues"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to move several servers to Azure.
            The company's compliance policy states that a server named FinServer must be on a separate network segment.
            You are evaluating which Azure services can be used to meet the compliance policy requirements.
            Which Azure solution should you recommend?        
            `,
            answerChoices: [
                "a resourced group for FinServer and another resource group for all the other servers",
                "a virtual network for FinServer and another virtual network for all the other servers",
                "a VPN for FinServer and a virtual network gateway for each other server",
                "one resource group for all the servers and a resource lock for FinServer"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to map a network drive from several computers that run Windows 10 to Azure Storage. You need to create a storage solution in Azure for the planned mapped drive.
            What should you create? 
            `,
            answerChoices: [
                "an Azure SQL database",
                "a virtual machine data disk",
                "a Files service in a storage account",
                "a Blobs service in a storage account"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to implement an Azure database solution.
            You need to implement a database solution that meets the following requirements:
            ✑ Can add data concurrently from multiple regions
            ✑ Can store JSON documents
            Which database service should you deploy? 
            `,
            answerChoices: [
                "an Azure SQL database",
                "Cosmos DB",
                "Azure blob storage",
                "Azure table storage"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to migrate all its network resources to Azure.
            You need to start the planning process by exploring Azure.
            What should you create first?
            `,
            answerChoices: [
                "a subscription",
                "a resource group",
                "a virtual network",
                "a management group"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You have an on-premises application that sends email notifications automatically based on a rule.
            You plan to migrate the application to Azure.
            You need to recommend a serverless computing solution for the application.
            What should you include in the recommendation?
            `,
            answerChoices: [
                "a web app",
                "a server image in Azure Marketplace",
                "a logic app",
                "an API app"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files.
            You need to recommend which Azure feature must be used to provide the best video playback experience.
            What should you recommend?
            `,
            answerChoices: [
                "an application gateway",
                "an Azure ExpressRoute circuit",
                "a content delivery network (CDN)",
                "an Azure Traffic Manager profile"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to deploy several million sensors that will upload data to Azure.
            You need to identify which Azure resources must be created to support the planned solution.
            Which two Azure resources should you identify? Each correct answer presents part of the solution.
            `,
            answerChoices: [
                "Azure Data Lake",
                "Azure Queue storage",
                "Azure File Storage",
                "Azure IoT Hub",
                "Azure Notification Hubs"
            ],
            correctAnswer: [1, 3],
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure web app.
            You need to manage the settings of the web app from an iPhone.
            What are two Azure management tools that you can use? Each correct answer presents a complete solution.
            `,
            answerChoices: [
                "Azure CLI",
                "the Azure portal",
                "Azure Cloud Shell",
                "Windows PowerShell",
                "Azure Storage Explorer"
            ],
            correctAnswer: [0, 2],
            category: "Azure AZ-900"
        },
        {
            question: `You have an application that is comprised of an Azure web app that has a Service Level Agreement (SLA) of 99.95 percent and an Azure SQL database that has an SLA of 99.99 percent.
            The composite SLA for the application is the product of both SLAs, which equals [99.94 percent].
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "the lowest SLA associated to the application, which is 99.95 percent",
                "the highest SLA associated to the application, which is 99.99 percent",
                "the difference between the two SLAs, which is 0.05 percent"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `If a resource group named RG1 has a delete lock, only a member of the global administrators group can delete RG1.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "the delete lock must be removed before an administrator",
                "an Azure policy must be modified before an administrator",
                "an Azure tag must be added before an administrator"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Azure Germany can be used by legal residents of Germany only.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "only enterprises that are registered in Germany",
                "only enterprises that purchase their azure licenses from a partner based in Germany",
                "any user or enterprise that requires its data to reside in Germany"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `After you create a virtual machine, you need to modify the [network security group (NSG)] to allow connections from TCP port 8080 to the virtual machine.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "virtual network gateway",
                "virtual network",
                "route table"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your Azure environment contains multiple Azure virtual machines.
            You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP.
            Solution: You modify a DDoS protection plan.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no",
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your Azure environment contains multiple Azure virtual machines.
            You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP.
            Solution: You modify an Azure firewall.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your Azure environment contains multiple Azure virtual machines.
            You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP.
            Solution: You modify an Azure Traffic Manager profile.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no",
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Which two types of customers are eligible to use Azure Government to develop a cloud solution? Each correct answer presents a complete solution.
            `,
            answerChoices: [
                "a Canadian government contractor",
                "a European government contractor",
                "a United States government entity",
                "a United States government contractor",
                "a European government entity"
            ],
            correctAnswer: [2, 3],
            category: "Azure AZ-900"
        },
        {
            question: `To implement an Azure Multi-Factor Authentication(MFA) solution, you must deploy a federation solution or sync on-premises identities to the cloud
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Two valid methods for Azure Multi-Factor Authentication (MFA) are picture identification and a passport number
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Azure Multi-Factor Authentication (MFA) can be required for administrative and non-administrative user accounts
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You need to ensure that when Azure Active Directory (Azure AD) users connect to Azure AD from the Internet by using an anonymous IP address, the users are prompted automatically to change their password.
            Which Azure service should you use?
            `,
            answerChoices: [
                "Azure AD Connect Health",
                "Azure AD Privileged Identity Management",
                "Azure Advanced Threat Protection (ATP)",
                "Azure AD Identity Protection"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `What provides statistics that help you understand how you spend your time at work?
            `,
            answerChoices: [
                "eDiscovery",
                "Customer Lockbox",
                "PSTN Calling",
                "My Analytics"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `What extends an existing telephone system for call delegation and call on-behalf functionality?
            `,
            answerChoices: [
                "eDiscovery",
                "Customer Lockbox",
                "PSTN Calling",
                "My Analytics"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `What controls how a Microsoft support engineer access your data during a help session?
            `,
            answerChoices: [
                "eDiscovery",
                "Customer Lockbox",
                "PSTN Calling",
                "My Analytics"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `What Identifies and delivers electronic information that can be used as evidence in legal cases?
            `,
            answerChoices: [
                "eDiscovery",
                "Customer Lockbox",
                "PSTN Calling",
                "My Analytics"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to deploy several web servers and several database servers to Azure.
            You need to recommend an Azure solution to limit the types of connections from the web servers to the database servers.
            What should you include in the recommendation?
            `,
            answerChoices: [
                "network security groups (NSGs)",
                "Azure Service Bus",
                "a local network gateway",
                "a route filter"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `To what should an application connect to retrieve security tokens?
            `,
            answerChoices: [
                "an Azure Storage account",
                "Azure Active Directory(Azure AD)",
                "a certificate store",
                "an Azure key vault"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `[Resource groups] provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Management groups",
                "Azure policies",
                "Azure App Service plans"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Your network contains an Active Directory forest. The forest contains 5,000 user accounts.
            Your company plans to migrate all network resources to Azure and to decommission the on-premises data center.
            You need to recommend a solution to minimize the impact on users after the planned migration.
            What should you recommend?
            `,
            answerChoices: [
                "Implement Azure Multi-Factor Authentication(MFA)",
                "Sync all the Active Directory user accounts to Azure Active Directory (Azure AD)",
                "Instruct all users to change their password",
                "Create a guest user account in Azure Active Directory (Azure AD) for each user"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You create a resource group named RG1 in Azure Resource Manager.
            You need to prevent the deletion of the resources in RG1.
            Which setting should you use? To answer, select the appropriate setting in the answer area.
            `,
            answerChoices: [
                "Delete lock",
                "Read-only lock",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service should you use to store certificates?
            `,
            answerChoices: [
                "Azure Security Center",
                "an Azure Storage account",
                "Azure Key Vault",
                "Azure Information Protection"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `You have a resource group named RG1.
            You plan to create virtual networks and app services in RG1.
            You need to prevent the creation of virtual machines only in RG1.
            What should you use?
            `,
            answerChoices: [
                "a lock",
                "an Azure role",
                "a tag",
                "an Azure policy"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `What can Azure Information Protection encrypt?
            `,
            answerChoices: [
                "network traffic",
                "documents and email messages",
                "an Azure Storage account",
                "an Azure SQL database"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `What should you use to evaluate whether your company's Azure environment meets regulatory requirements?
            `,
            answerChoices: [
                "the Knowledge Center website",
                "the Advisor blade from the Azure portal",
                "Compliance Manager from the Security Trust Portal",
                "the Security Center blade from the Azure portal"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `Azure Advisor can generate a list of Azure virtual machines that are protected by Azure Backup.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `If you implement the security recommendations provided by Azure Advisor, your company's secure score will decrease.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `To maintain Microsoft support, you must implement the security recommendations provided by Azure Advisor within a period of 30 days.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company implements [Azure policies] to automatically add a watermark to Microsoft Word documents that contain credit card information.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "DDos protection",
                "Azure Information Protection",
                "Azure Active Directory (Azure AD) identity Protection"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `From [Azure Monitor], you can view which user turned off a specific virtual machine during the last 14 days.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Azure Event Hubs",
                "Azure Activity Log",
                "Azure Service Health"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure virtual network named VNET1 in a resource group named RG1.
            You assign an Azure policy specifying that virtual networks are not an allowed resource type in RG1. VNET1 [is deleted automatically].
            Instructions: Review the underlined text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "is moved automatically to another resource group",
                "continues to function normally",
                "is now a read-only object"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Azure Firewall will encrypt all network traffic sent from Azure to the Internet
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A netwoork security group (NSG) will encrypt all the network traffic sent from Azure to the internet.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Azure virtual machines that run Windows Server 2016 can encrypt the network traffic sent from the virtual machines to a host on the internet.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has an Azure environment that contains resources in several regions.
            A company policy states that administrators must only be allowed to create additional Azure resources in a region in the country where their office is located.
            You need to create the Azure resource that must be used to meet the policy requirement.
            What should you create?
            `,
            answerChoices: [
                "a read-only lock",
                "an Azure Policy",
                "a management group",
                "a reservation"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `[Authorization] is the process of verifying a user's credentials.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Authentication",
                "Federation",
                "Ticketing"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You need to configure an Azure solution that meets the following requirements:
            ✑ Secures websites from attacks
            ✑ Generates reports that contain details of attempted attacks
            What should you include in the solution?
            `,
            answerChoices: [
                "Azure Firewall",
                "a network security group (NSG)",
                "Azure Information Protection",
                "DDoS protection"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `Which of the following services monitors threats by using sensors?
            `,
            answerChoices: [
                "Azure Monitor",
                "Azure Security Center",
                "Azure Active Directory (Azure AD) Identity Protection",
                "Azure Advanced Threat Protection (ATP)"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `Which of the following services enforces Azure MFA based on a condition?
            `,
            answerChoices: [
                "Azure Monitor",
                "Azure Security Center",
                "Azure Active Directory (Azure AD) Identity Protection",
                "Azure Advanced Threat Protection (ATP)"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `From Azure Service Health, an administrator can view the health of all the services deployed to an Azure environment and all the other services available in Azure.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `From Azure Service Health, and administrator can create a rule to be alerted if an Azure service fails.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `From Azure Service Health, and administrator can prevent a service failure from affecting a specific virtual machine
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to migrate all on-premises data to Azure. You need to identify whether Azure complies with the company's regional requirements.
            What should you use?
            `,
            answerChoices: [
                "the Knowledge Center",
                "Azure Marketplace",
                "the Azure portal",
                "the Trust Center"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `[Azure Key Vault] is used to store secrets for Azure Active Directory (Azure AD) user accounts.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Azure Active Directory (Azure AD) administrative accounts",
                "Personally Identifiable Information (PII)",
                "server applications"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Authorization to access Azure resources can be provided only to Azure Active Directory (Azure AD) users.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Identities stored in Azure Active directory (Azure AD), third-party cloud services, and on-premises Active Directory can be used to access Azure Resources.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Azure has built-in authentication and authorization services that provide secure access to Azure resources.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to automate the deployment of servers to Azure.
            Your manager is concerned that you may expose administrative credentials during the deployment.
            You need to recommend an Azure solution that encrypts the administrative credentials during the deployment.
            What should you include in the recommendation?
            `,
            answerChoices: [
                "Azure Key Vault",
                "Azure Information Protection",
                "Azure Security Center",
                "Azure Multi-Factor Authentication (MFA)"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to deploy several Azure virtual machines.
            You need to control the ports that devices on the Internet can use to access the virtual machines.
            What should you use?
            `,
            answerChoices: [
                "a network security group (NSG)",
                "an Azure Active Directory (Azure AD) role",
                "an Azure Active Directory group",
                "an Azure key vault"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You have several virtual machines in an Azure subscription. You create a new subscription. [The virtual machines cannot be moved to the new subscription].
            Instructions: Review the underlined text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "The virtual machines can be moved to the new subscription",
                "The virtual machines can be moved to the new subscription only if they are all in the same resource group",
                "The virtual machines can be moved to the new subscription only if they run Windows Server 2016."
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You attempt to create several managed Microsoft SQL Server instances in an Azure environment and receive a message that you must increase your Azure subscription limits.
            What should you do to increase the limits?
            `,
            answerChoices: [
                "Create a service health alert",
                "Upgrade your support plan",
                "Modify an Azure policy",
                "Create a new support request"
            ],
            correctAnswer: 3,
            category: "Azure AZ-900"
        },
        {
            question: `If your company uses an Azure free account, you will only be exposed to a subset of Azure services
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `All Azure free accounts expire after a specific period.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You can create up to 10 Azure free accounts by using the same Microsoft account
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Each Azure subscription can contain multiple account administrators
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Each Azure subscription can be managed by using a Microsoft account only
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure resource group contains multiple Azure subscriptions
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has 10 offices. You plan to generate several billing reports from the Azure portal. Each report will contain the Azure resource utilization of each office.
            Which Azure Resource Manager feature should you use before you generate the reports?
            `,
            answerChoices: [
                "tags",
                "templates",
                "locks",
                "policies"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `In Azure Active Directory premium, at least 99.9 percent availability is guaranteed.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `The Service Level Agreement (SLA) for Azure Active Directory Basic is the same as the SLA for Azure Active Directory Free.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `All paying Azure customers can claim a credit if their monthly uptime percentage is below the guaranteed amount in the Service Level Agreement (SLA)
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will [automatically refund your bank account].
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "automatically migrate the resource to another subscription",
                "automatically credit your account",
                "send you a coupon code that you can redeem for Azure credits"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `All Azure services in private preview must be accessed by using a separate Azure portal
            `,
            answerChoices: [
                "true",
                "false",
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Azure services in public preview can be used in production environments
            `,
            answerChoices: [
                "true",
                "false",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Azure services in public preview are subject to a Service Level Agreement (SLA)
            `,
            answerChoices: [
                "true",
                "false",
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A Standard support plan is included in an Azure free account.
            `,
            answerChoices: [
                "true",
                "false",
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A Premier support plan can only be purchased by companies that have an Enterprise Agreement (EA)
            `,
            answerChoices: [
                "true",
                "false",
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Support from MSDN forums is only provided to companies that have a pay-as-you-go subscription.
            `,
            answerChoices: [
                "true",
                "false",
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to migrate to Azure. The company has several departments. All the Azure resources used by each department will be managed by a department administrator.
            You need to recommend an Azure deployment that provides the ability to segment Azure for the departments. The solution must minimize administrative effort.
            What should you include in the recommendation?
            `,
            answerChoices: [
                "multiple subscriptions",
                "multiple Azure Active Directory (Azure AD) directories",
                "multiple regions",
                "multiple resource groups"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has an Azure subscription that contains the following unused resources:
            ✑ 20 user accounts in Azure Active Directory (Azure AD)
            ✑ Five groups in Azure AD
            ✑ 10 public IP addresses
            ✑ 10 network interfaces
            You need to reduce the Azure costs for the company.
            Solution: You remove the unused network interfaces.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has an Azure subscription that contains the following unused resources:
            ✑ 20 user accounts in Azure Active Directory (Azure AD)
            ✑ Five groups in Azure AD
            ✑ 10 public IP addresses
            ✑ 10 network interfaces
            You need to reduce the Azure costs for the company.
            Solution: You remove the unused public IP addresses.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has an Azure subscription that contains the following unused resources:
            ✑ 20 user accounts in Azure Active Directory (Azure AD)
            ✑ Five groups in Azure AD
            ✑ 10 public IP addresses
            ✑ 10 network interfaces
            You need to reduce the Azure costs for the company.
            Solution: You remove the unused user accounts.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `How should you calculate the monthly uptime percentage?
            `,
            answerChoices: [
                "Downtime in minutes / 60 * 100",
                "Downtime in minutes / 60 * 99.99",
                "Downtime in minutes / 60 * 1.440",
                "(Maximum available minutes - downtime in minutes) / 1,440 * 99.99",
                "(Maximum available minutes - downtime in minutes) / maximum available minutes * 99.99",
                "(Maximum available minutes - downtime in minutes) / maximum available minutes * 100",
            ],
            correctAnswer: 5,
            category: "Azure AZ-900"
        },
        {
            question: `By creating additional resource groups in an Azure subscription, additional costs are incurred.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `By copying several gigabits of data to Azure from an on-premises network over a VPN, additional data transfer costs are incurred.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `By copying several GB of data from Azure to an on-premises network over a VPN, additional data transfer costs are incurred.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A support plan solution that gives you best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost is a [Standard] support plan.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Developer",
                "Basic",
                "Premier"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to deploy several Azure virtual machines.
            You need to ensure that the services running on the virtual machines are available if a single data center fails.
            Solution: You deploy the virtual machines to two or more resource groups.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `In which Azure support plans can you open a new support request?
            `,
            answerChoices: [
                "Premier and Professional Direct only",
                "Premier, Professional Direct, and Standard only",
                "Premier, Professional Direct, Standard, and Developer only",
                "Premier, Professional Direct, Standard, Developer, and Basic"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `You can create an Azure support request from [support.microsoft.com].
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed." If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "the Azure portal",
                "the Knowledge Center",
                "the Security and Compliance admin center"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has an Azure subscription that contains the following unused resources:
            ✑ 20 user accounts in Azure Active Directory (Azure AD)
            ✑ Five groups in Azure AD
            ✑ 10 public IP addresses
            ✑ 10 network interfaces
            You need to reduce the Azure costs for the company.
            Solution: You remove the unused groups.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `What is guaranteed in an Azure Service Level Agreement (SLA)?
            `,
            answerChoices: [
                "uptime",
                "feature availability",
                "bandwidth",
                "performance"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure service is available to all Azure customers when it is in [public preview].
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "private preview",
                "development",
                "an Enterprise Agreement (EA) subscription"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to purchase Azure.
            The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email.
            You need to recommend which support plan meets the support policy requirement.
            Solution: Recommend a Basic support plan.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to purchase Azure.
            The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email.
            You need to recommend which support plan meets the support policy requirement.
            Solution: Recommend a Standard support plan.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to purchase Azure.
            The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email.
            You need to recommend which support plan meets the support policy requirement.
            Solution: Recommend a Premier support plan.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to request an architectural review of an Azure environment from Microsoft.
            The company currently has a Basic support plan.
            You need to recommend a new support plan for the company. The solution must minimize costs.
            Which support plan should you recommend?
            `,
            answerChoices: [
                "Premier",
                "Developer",
                "Professional Direct",
                "Standard"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Most Azure services are introduced in private preview before being introduced in public preview, and then in general availability.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Azure services in public preview can be managed only by using the Azure CLI
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `The cost of an Azure service in private preview decreases when the service becomes generally available.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `What is required to use Azure Cost Management?
            `,
            answerChoices: [
                "a Dev/Test subscription",
                "Software Assurance",
                "an Enterprise Agreement (EA)",
                "a pay-as-you-go subscription"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Your Azure trial account expired last week. You are now unable to [create additional Azure Active Directory (Azure AD) user accounts].
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "start an existing Azure virtual machine",
                "access your data stored in Azure",
                "access the Azure portal"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to purchase Azure.
            The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email.
            You need to recommend which support plan meets the support policy requirement.
            Solution: Recommend a Professional Direct support plan.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company has 10 departments.
            The company plans to implement an Azure environment.
            You need to ensure that each department can use a different payment option for the Azure services it consumes.
            What should you create for each department?
            `,
            answerChoices: [
                "a reservation",
                "a subscription",
                "a resource group",
                "a container instance"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure free account has a spending limit
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure free account has a limit for the amount of data that can be uploaded to Azure.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure free account can contain an unlimited number of web apps.
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure service in private preview is released to all Azure customers.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure service in public preview is released to all Azure customers.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `An Azure service in general availability is released to a subset of Azure customers.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A single Microsoft account can be used to manage multiple Azure subscriptions.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Two Azure subscriptions can be merged into a single subscription by creating a support request.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A company can store resources in multiple subscriptions.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `The Service Level Agreement (SLA) guaranteed uptime for paid Azure services is at least 99.9 percent.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Companies can increase the Service Level Agreement (SLA) guaranteed uptime by adding Azure resources to multiple regions.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Companies can increase the Service Level Agreement (SLA) guaranteed uptime by purchasing multiple subscriptions.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Storing 1 TB of data in Azure Blob storage will always cost the same, regardless of the Azure region in which the data is located.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `When you use a general-purpose v2 Azure Storage account, you are only charged for the amount of data that is stored. All read and write operations are free.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Transferring data between Azure Storage accounts in different Azure regions is free.
            `,
            answerChoices: [
                "true",
                "false"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You plan to provision Infrastructure as a Service (IaaS) resources in Azure.
            Which resource is an example of IaaS?
            `,
            answerChoices: [
                "an Azure web app",
                "an Azure virtual machine",
                "an Azure logic app",
                "an Azure SQL database"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `A team of developers at your company plans to deploy, and then remove, 50 virtual machines each week. All the virtual machines are configured by using Azure
            Resource Manager templates.
            You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines.
            What should you recommend?
            `,
            answerChoices: [
                "Azure Reserved Virtual Machines (VM) Instances.",
                "Azure DevTest Labs",
                "Azure virtual machine scale sets",
                "Microsoft Managed Desktop"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1.
            From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 -- image
            
            UbuntuLTS --generate-ssh-keys -
            You need to create VM1 in Subscription1 by using the command.
            Solution: From the Azure portal, laugnch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1.
            From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 -- image
            
            UbuntuLTS --generate-ssh-keys -
            You need to create VM1 in Subscription1 by using the command.
            Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1.
            From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 -- image
            
            UbuntuLTS --generate-ssh-keys -
            You need to create VM1 in Subscription1 by using the command.
            Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1.
            From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 -- image
            
            UbuntuLTS --generate-ssh-keys -
            You need to create VM1 in Subscription1 by using the command.
            Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command.
            Does this meet the goal?
            `,
            answerChoices: [
                "yes",
                "no"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `If Microsoft plans to end support for an Azure service that does NOT have a successor service, Microsoft will provide notification at least [12 months] before.
            Instructions: Review the underlined text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "6 months",
                "90 days",
                "30 days"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed.
            You need to recommend a cloud deployment solution for all the applications.
            What should you recommend?
            `,
            answerChoices: [
                "Software as a service (SaaS)",
                "Platform as a service (PaaS)",
                "Infrastructure as a service (IaaS)"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `Which service provides serverless computing in Azure?
            `,
            answerChoices: [
                "Azure Virtual Machines",
                "Azure Functions",
                "Azure storage account",
                "Azure Container Instances"
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `Which Azure service provides a set of version control tools to manage code?
            `,
            answerChoices: [
                "Azure Repos",
                "Azure DevTest Labs",
                "Azure Storage",
                "Azure Cosmos DB"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?
            `,
            answerChoices: [
                "Azure Firewall",
                "an application security group",
                "Azure DDoS protection",
                "a network security group (NSG)"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `From [Azure Cloud Shell], you can track your company's regulatory standards and regulations, such as ISO 27001.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed." If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "the Microsoft Cloud Partner Portal",
                "Compliance Manager",
                "the Trust Center"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `The [Microsoft Online Services Privacy Statement] explains what data Microsoft processes, how Microsoft processes the data, and the purpose of processing the data.
            Instructions: Review the underlined text. If it makes the statement correct, select "No change is needed." If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed",
                "Microsoft Online Services Terms",
                "Microsoft Online Service Level Agreement",
                "Online Subscription Agreement for Microsoft Azure"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        },
        {
            question: `Your company plans to migrate to Azure. The company has several departments. All the Azure resources used by each department will be managed by a department administrator.
            What are two possible techniques to segment Azure for the departments?
            `,
            answerChoices: [
                "multiple subscriptions",
                "multiple Azure Active Directory (Azure AD) directories",
                "multiple regions",
                "multiple resource groups"
            ],
            correctAnswer: [0, 3],
            category: "Azure AZ-900"
        },
        {
            question: `Which statement accurately describes the Modern Lifecycle Policy for Azure services
            `,
            answerChoices: [
                "Microsoft provides mainstream support for a service for five years",
                "Microsoft provides a minimum of 12 months' notice before ending suppoort for a service",
                "After a service is made generally available, Microsoft provides support for the service for a minimum of four years",
                "When a service is retired, you can purchase extended support for the service for up to five years."
            ],
            correctAnswer: 1,
            category: "Azure AZ-900"
        },
        {
            question: `You can use [Advisor recommendations] in Azure to send email alerts when the cost of the current billing period for an Azure subscription exceeds a specified limit.
            Instructions: Review the square bracketed text. If it makes the statement correct, select "No change is needed." If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
                "No change is needed.",
                "Access control (IAM)",
                "Budget alerts",
                "Compliance"
            ],
            correctAnswer: 2,
            category: "Azure AZ-900"
        },
        {
            question: `The Azure [Standard] support plan is the lowest cost option to receive 24x7 access to support engineers by phone.
            Instructions: Review the underlined text. If it makes the statement correct, select "No change is needed". If the statement is incorrect, select the answer choice that makes the statement correct.
            `,
            answerChoices: [
            "No change is needed",
            "Developer",
            "Basic",
            "Professional Direct"
            ],
            correctAnswer: 0,
            category: "Azure AZ-900"
        }
    ]
}

export function getPool(enabledCategories, userQuizzes) {
    let allQuestions = [...getAll(), ...userQuizzes];
    let questionsWeWant = allQuestions.filter(question => enabledCategories.includes(question.category));
    return questionsWeWant;
}
