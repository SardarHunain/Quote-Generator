let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const quotes = [
    {
        quote: "I'm not sure what to do, but I'm not sure what to do.",
        person: "Abraham Lincoln"
    },
    {
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        person: "Albert Einstein"
    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow",
        person: "Mahatma Gandhi"
    },
    {
        quote: "When you change your thoughts, remember to also change your world.",
        person: "Norman Vincent Peale"
    },
    {
        quote: "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
        person: "Walter Anderson"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        person: "Herman Melville"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        person: "Colin R. Davis"
    },
    {
        quote: "Success usually comes to those who are too busy looking for it.",
        person: "Henry David Thoreau"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        person: "Winston S. Churchill"
    },
    {
        quote: "I never dreamed about success. I worked for it.",
        person: "Estée Lauder"
    },
]

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});