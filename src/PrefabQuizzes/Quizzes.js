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
            correctAnswer: [2,3],
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
                "The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud" ,
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
                "yes",
                "no"                                   
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
            correctAnswer: [0,2],
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
    ]
}

export function getPool(enabledCategories, userQuizzes) {
    let allQuestions = [...getAll(), ...userQuizzes];
    let questionsWeWant = allQuestions.filter(question => enabledCategories.includes(question.category));
    return questionsWeWant;
}
