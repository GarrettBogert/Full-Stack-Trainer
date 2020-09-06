export function getAll(){
    return [
            {
                question: "What does the 'protected' modifier do?",
                answer: "The 'protected' modifier makes the member accessible only from within it's own class as well as inheriting classes.",
                category:"csharp"
            },
            {
                question: "What does the 'internal' modifier do?",
                answer: "The 'internal' modifier makes the member accessible only from within the assembly it belongs to.",
                category:"csharp"
            },
            {
                question: "What is the difference between a 'for' and a 'foreach' loop?",
                answer: "A foreach loop will iterate all items in a collection with no guaranteed ordering, while a for loop gives you control of indexing via an indexing variable.",
                category:"csharp"
            },
            {
                question: "What is .NET?",
                answer: ".NET is a developer framework/platform for developing different types of applications.",
                category:"csharp"
            },
            {
                question: "What are some differences between javascript and C#?",
                answer: "C# is a type-safe language, while javascript is not. Javascript is dynamically-typed, while C# is statically-typed. C# programs are compiled, while javascript is interpreted.",
                category:"csharp"
            },
            {
                question: "What html tag denotes text where the formatting and indentation will be preserved?",
                answer: "<pre>",
                category:"html"
            },
            {
                question: "In css, id selectors start with what character?",
                answer: "The '#' sign",
                category:"css"
            },
            {
                question: "In css, class selectors start with what character?",
                answer: "The '.' character",
                category:"css"
            },
            {
                question: "In css, how would you write a selector for <p> elements that are descendants of a <div>?",
                answer: "div p",
                category:"css"
            },
            {
                question: "In css, how would you write a selector for <span> elements that are direct children of a <div>?",
                answer: "div > span",
                category:"css"
            },
            {
                question: "In css, how would you write a selector for <span> elements with an attribute 'alt' that is equal to 'banana'?",
                answer: "span[alt=banana]",
                category:"css"
            },
            {
                question: "In SQL, what keyword is used to filter groups from the group by clause?",
                answer: "HAVING",
                category:"sql"
            },
            {
                question: "In SQL, what operator is used to do string matching with wildcards?",
                answer: "LIKE",
                category:"sql"
            },
               {
                question: "What does HTML stand for?",
                answer: "Hyper Text Markup Language",
                category:"html"
            }                  
        ]
}
    
export function getRandom(enabledCategories, userCards){
    let allQuestions = [...getAll(),...userCards];
    let questionsWeWant = allQuestions.filter(question => enabledCategories.includes(question.category));
    return getRandomItem(questionsWeWant);
}

function getRandomItem(array){
if(array.length > 0){
    return array[Math.floor(Math.random() * array.length - 1) + 1];
}
window.alert(`Your selected categories ${array.join()} do not have any flash cards associated with them.`);
return null;
}