# Todo-List-App

Todo-List-App as part of The Odin Project curriculum

[Click here to view project live](https://athma-vasi.github.io/Todo-List-App/)

## Things I Learned

### TL;DR

- webpack
- SOLID principles
- Partially applied unary functions

### Webpack

I used webpack for bundling modules. I had to figure out the various plugins and loaders required. Since I am going through the curriculum using TypeScript, I used 'ts-loader' for TS compatibility. I learned about having a separate CSS file instead of inline styles, as Addy Osmani recommends this method for improved performance, and installed MiniCSSExtractPlugin. Debugging in development mode required me to learn about source maps, and a very high level overview of the production mode.

Putting all this together in a webpack.config.js file was difficult initially 😭 , but after some trial and error, I managed to have a working config file.

### Single Responsibility Principle

I managed to organize my code so that the functions did one thing only, separating DOM updating logic from application logic.

### Open-closed principle

Following the principle of loosely coupled objects and functions, I wrote the application in a way that I was able to add new features or components to the application without breaking existing code.

### Partially applied unary functions

I was motivated to learn more about functional programming paradigm and the concept of pure functions and side effects to prepare me to better understand React. It was a real eye-opener 🤯 when I understood the usefulness of currying and 'piping' arguments through. It was also really fun figuring out how to structure the functions in a way that enabled piping.

All the HTML elements were dynamically created using TypeScript. I used currying to create unary functions that returned another function expecting the remaining argument (see element-creators.ts). This allowed me a really elegant way of manipulating the DOM by using the pipe function to pipe through a created element and modifying it using pure functions while saving the side effect (appending to DOM) at the end. I had to ensure the functions all returned a HTMLElement to do this. This also reduced the amount of variables that were needed.

I don't have the best grasp on the terminology yet (and the differences between partial application and currying 🤔), but I am excited to learn more about this method of programming, and add it to my repertoire 💪🏼.
