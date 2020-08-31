export function getAll(){
    return [
            {
                "question": "What is the 'protected' modifier do?",
                "answer": "The 'protected' modifier makes the member accessible only from within it's own class as well as inheriting classes."
            },
            {
                "question": "What is the 'internal' modifier do?",
                "answer": "The 'internal' modifier makes the member accessible only from within the assembly it belongs to."
            },
            {
                "question": "What is the difference between a 'for' and a 'foreach' loop?",
                "answer": "A foeach loop will iterate all items in a collection with no guaranteed ordering, while a for loop gives you control of indexing via an indexing variable."
            },
            {
                "question": "What is .NET?",
                "answer": ".NET is a developer framework/platform for developing different types of applications."
            },
            {
                "question": "What are some differences between javascript and C#?",
                "answer": "C# is a type-safe language, while javascript is not. Javascript is dynamically-typed, while C# is statically-typed. C# programs are compiled, while javascript is interpreted."
            }      
        ]
}
    
export function getRandom(){
    let questions = getAll();
    return getRandomItem(questions);
}

function getRandomItem(array){
    return array[Math.floor(Math.random() * array.length - 1) + 1]
}