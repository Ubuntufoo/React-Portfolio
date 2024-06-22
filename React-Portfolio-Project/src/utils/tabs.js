// content in data structures for tabs component

export const tabsExploreLLM = [
 {
    id: 0,
    title: 'About',
    content: "A recreation of the app from 'Beyond ChatBots: ExploreLLM for Structured Thoughts and Personalized Model Responses', this project demonstrates ways to enhance AI interactions by integrating large language models (LLMs) with tailor-made GUIs for structured user experiences.\n\nIt leverages OpenAI API to generate manageable chunks of information for the user, preventing the dreaded wall of text that chatbots are known for, and users struggle to comprehend.",
  },
  {
    id: 1,
    title: 'Journey',
    content: 'A relative who works in the industry approached me with this idea. He developed the back-end and I supplied the front-end, my first React project. I am fascinated with the idea of refining the user experience for collaboration with generative AI.\n\nWhile this implementation is quite similar to the one presented in "Beyond ChatBots: ExploreLLM", it opened my eyes to a specialization path with great potential.',
  },
  {
    id: 2,
    title: 'Lessons',
    content: "I learned about the value of component encapsulation, where markup and styling closely associated with 1 component should reside together. Having to hop file-to-file to tweak closely related Bootstrap utility classes was a poor experience!\n\nAlso, I gained understanding of how the FE and BE can be entirely separate, even in a local environment. I now recognize the code was inefficient and far from best practice.",
  },
  {
    id: 3,
    title: 'Techs',
    content: "Featuring React.js with a Flask back-end. A series of API requests from the client carry user input to the local server, where the input is added to a composite prompt and sent to OpenAI's endpoint.\n\nThe LLM decomposes the prompt into sub-parts with options relating to each, and returns those parts to the user in a visually constructive way. Finally, the sub-parts are recombined and sent to the OpenAI endpoint for a final report. Please see the demonstration video above.",
  },
];

export const tabsBrainteasers = [
  {
    id: 0,
    title: 'About',
    content: "Brainteasers is a responsive, full-stack website which uses traditional routing for a multi-page, full featured experience.\n\n Users have 3 game choices: a Wordle clone with enhanced features, a math game, and an anagram hunt game. A contact form is available for users to reach me. Brainteasers also features user authentication, providing registration and account updating - even adding a custom avatar.",
  },
  {
    id: 1,
    title: 'Journey',
    content: "This was my first significant sense of accomplishment and frustration as a coder. It is a culmination of what I learned and applied following my full-stack developer program at Salem State University; a classic example of knowing just enough to do it but not enough to explain it well.\n\nWordle+ was inspired by a family member who had ideas to improve the original Wordle, and so I implemented them, and love the result.",
  },
  {
    id: 2,
    title: 'Lessons',
    content: "The lessons were frequent and tough. What is this CORS error? How do I protect sensitive credentials? Why is margin-top NOT WORKING? (collapsing margins...). Hours were spent staring dumbfounded at settings.py, where my environment configurations live.\n\nI got my first taste of flexbox and grid, cornerstones of markup styling. And Django itself gave so much to unpack that I still encounter aha! moments when I return to the code base.",
  },
  {
    id: 3,
    title: 'Techs',
    content: "Brainteasers is built with Django, Vue.js, and Bootstrap, and is hosted on the Heroku platform, complete with PostgreSQL integration.\n\nA monolithic file structure, Django handles the server-side logic while also serving the font-end Vue templates. Sendgrid powers the email contact form. Django has a convenient native tool-set that includes an admin UI for CRUD operations, and object-relational mapping, effectively SQL-in-Python.",
  },
];

export const tabsTADA = [
  {
    id: 0,
    title: 'About',
    content: "TADA! is a responsive web experience that re-imagines the cliche TO-DO app. It harnesses the generative AI technology of OpenAI, the creator of ChatGPT.\n\nWith user input, OpenAI's Large Language Model (LLM) generates positive affirmations for the user's various achievements, both big and small. It will even find the silver-lining of an otherwise unsavory moment. Previous inputs from the user are stored in a side drawer for easy reference.",
  },
  {
    id: 1,
    title: 'Journey',
    content: "When I joked about all the TO-DO app coding tutorials on Youtube, my wife pointed out the lack of importance we place in reflecting on whats been done. From that conversation, TADA! was born. I wanted to create a space where users could feel good about their accomplishments, no matter how small.\n\nI was excited to work with OpenAI's API, and the project was a great opportunity to learn about the potential of generative AI in a user-friendly context.",
  },
  {
    id: 2,
    title: 'Lessons',
    content: "I delved into new tools and libraries with TADA!, exploring Generative AI and learning valuable lessons in API usage and data handling. Along the way, I embraced ESLint and Prettier for JavaScript syntax analysis and code formatting.\n\nTransitioning from Bootstrap to Tailwind brought newfound versatility and support to my projects. Additionally, incorporating Express.js expanded my understanding of routing and middleware in backend development.",
  },
  {
    id: 3,
    title: 'Techs',
    content: "Built with React.js and Express.js, and hosted on Render. TADA! combines user input into a server-side composite prompt and sends it to the API endpoint of OpenAI. The Large Language Model (LLM), role-playing a self-help and mindfulness coach, returns a custom response based on the input. I increased the AI model's temperature, i.e. creativity setting, to ensure a variety of responses.\n\nThe project is lightweight allowing the freedom to adapt it as a PWA or mobile app in the future.",
  },
];

export const tabsWorkDash = [
  {
    id: 0,
    title: 'About',
    content: "This dashboard consolidates 6 tools that I use regularly into 1 pinned browser tab. I am able to store a list of my assignments, modify strings of data, and configure server-side scripts that automate aspects of my software, such as Microsoft SQL Server Management Studio or web data retrieval.\n\nEmbedded in the page are other 3rd-party tools such as a web diff checker and my test case management tool.",
  },
  {
    id: 1,
    title: 'Journey',
    content: "My Work Dashboard was born of necessity. Too much time was spent searching bookmark folders, or navigating multi-step authentication flow to download a single file.\n\nI began crafting the Python scripts as stand-alone tools before building out the front-end. With each feature added, I shaved a bit of time off my daily routine. I will adapt this tool to my web dev workflow in the future so I can quickly scaffold new projects and access resources.",
  },
  {
    id: 2,
    title: 'Lessons',
    content: "I discovered the power of executing external processes using the Python subprocess module to automate tasks. In fact, I went deep down the automation rabbit hole, learned a great deal about Selenium for web data retrieval, web scraping tools like Scrapy, and PyAutoGUI for desktop automation.\n\nPreviously I was unfamiliar with the HTML iframe tag; I learned how to use it to embed 3rd-party tools into my dashboard, and I began to see a whole host of use cases for it.",
  },
  {
    id: 3,
    title: 'Techs',
    content: "Built with React.js and Flask, featuring sever-side script automation. By adding a new system env variable and using the Python subprocess module I can execute any CLI tool from my browser.\n\nHTML iframe tags embed 3rd-party tools that have weak or non-existent authentication barriers (thanks Testrail!). Client-side string editing functions ensure data is formatted for quick use in my SQL queries.",
  },
];

export const tabsPortfolio = [
  {
    id: 0,
    title: 'About',
    content: "A responsive site featuring a theme of sharp geometric shapes with a cyan color palette, showcasing my developer accomplishments. Designed from scratch - no component libraries here.\n\nThe content is presented as smooth-transitioning slides thanks to my secret-sauce: a JS library called Fullpage, built by a friendly fellow named Alvaro Trigo. Navigation is encouraged via the up, down, left, and right keys.",
  },
  {
    id: 1,
    title: 'Journey',
    content: "This website is actually a do-over from a previous iteration built with Vue.js. When I chose React as my future focus I put this project on the back burner to lock-in my React skills. Now that I'm 99% done with this project, I realize I wasn't ready to tackle this back then as a Vue.js beginner. I was naive to working with a large library's callbacks and methods, prop drilling, and the like.\n\nMany new doors have opened thanks to the concepts I discovered through this process.",
  },
  {
    id: 2,
    title: 'Lessons',
    content: "So many lessons learned here. For starters: Intrinsic vs extrinsic sizing, advanced layout techniques, multi-browser/device support, UX design for images, Tailwind customization... \n\nI'm comfortable telling on myself: Why is there a vertical distortion beneath images when the Fullscreen.js method is called, just a Fullpage.js quirk? How can I widen my net for device compatibility? Why does the marquee on the Skills page inexplicably overlap icons on rare occasion?",
  },
  {
    id: 3,
    title: 'Techs',
    content: "Built with React.js, hosted on Netlify. The Fullpage.js library aids layout and navigation. No back-end was required thanks to a lightweight library called EmailJS, which grants client-side email functionality.\n\nThe Fullpage.js wrapper exposes many methods and callbacks for customization such as triggers for conditional DOM rendering based on the section or slide the user is on. Fullscreen.js solved the issue of cramped image viewing by simply scaling-in-ratio each image to fit the viewport. ",
  },
];

