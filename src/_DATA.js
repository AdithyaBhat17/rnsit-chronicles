let articles = [
    {
        "path": "understanding-react-context-api",
        "title": "Beginners guide to context api",
        "author": "Adithya NR",
        "social": "https://adithyabhat.com",
        "image": "https://cdn-images-1.medium.com/max/800/0*U-fWckdEEMxtdxMY",
        "contents": [
            "Have you ever experienced the pain of trying to get state from the top of your react tree to the bottom? This pain you’re feeling is called “prop threading” and it’s super annoying. You wind up having to pass props through components that don’t care about the data just so you can send it down to components that do care. And as you move components around, this pain is magnified.",
            "So our App is structured in such a way that the App component renders Parent, which renders Child, which renders Grandchild. However, what’s important to notice here is that the Grandchild component wants to render name — but the data for name lives inside the App component."
        ]
    },
    {
        "path": "what-is-web-stack",
        "title": "What is the web stack?",
        "author": "Adithya NR",
        "social": "https://adithyabhat.com",
        "image": "https://cdn-images-1.medium.com/max/800/1*K6phUln6BERyS6jvhWAyjg.jpeg",
        "contents": [
            `There are three types of Web Stack, namely FrontEnd, BackEnd and Full Stack.
            Front-End Stack — This stack works with languages that render with browsers. It’s also called client side. The developers who work with this stack are called Front-End Developers, and normally they work with HTML, CSS and JavaScript. It’s called Front-End Stack because it deals with the stuff you see on websites and interact with. HTML is used to define the structure of the webpage, CSS is used to style this HTML document and JavaScript is used for adding logic and interactivity to the webpage.`,
            `So our App is structured in such a way that the App component renders Parent, which renders Child, which renders Grandchild. However, what’s important to notice here is that the Grandchild component wants to render name — but the data for name lives inside the App component.`
        ]
    },
    {
        "path": "communication",
        "title": "The most underrated skill for a developer: Communication",
        "author": "Adithya NR",
        "social": "https://adithyabhat.com",
        "image": "https://cdn-images-1.medium.com/max/800/1*YCx2KE74Q12KgwuMzy140w.jpeg",
        "contents": [
            `There are three types of Web Stack, namely FrontEnd, BackEnd and Full Stack.
            Front-End Stack — This stack works with languages that render with browsers. It’s also called client side. The developers who work with this stack are called Front-End Developers, and normally they work with HTML, CSS and JavaScript. It’s called Front-End Stack because it deals with the stuff you see on websites and interact with. HTML is used to define the structure of the webpage, CSS is used to style this HTML document and JavaScript is used for adding logic and interactivity to the webpage.`,
            `So our App is structured in such a way that the App component renders Parent, which renders Child, which renders Grandchild. However, what’s important to notice here is that the Grandchild component wants to render name — but the data for name lives inside the App component.`
        ]
    },
];

export default articles;

