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
            correctAnswer: [3,4],
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
            correctAnswer: [1,3],
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
            correctAnswer: [0,2],
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
    ]
}

export function getPool(enabledCategories, userQuizzes) {
    let allQuestions = [...getAll(), ...userQuizzes];
    let questionsWeWant = allQuestions.filter(question => enabledCategories.includes(question.category));
    return questionsWeWant;
}
