# PomodoroTimer
## Install packages
```
cd timer-app
npm i
```
## Run project
```
npm run dev
```
## Run tests
```
npm run test
```
## ChatGPT Prompts
1. How to create a sample react typescript with Chakra UI and NextJs project
```
For efficiency and double check if there is any configurations that i might missed, the response provided me a step by step guide which i have used to create the project
```
2. Add a Pomodoro Timer feature into a project with React, TypeScript, and Chakra UI the application should do the following:
- Display timer
- Start/Pause timer
- Reset Timer at any point
- After the 25-minute work timer completes, a 5-minute break timer should automatically start. Indicate to the user whether the timer is in work or break mode.
- Display work and break cycle counters
```
For efficiency and allowing ChatGPT to tackle the complex logic for me. The response provided a clear and detail code snippets which i have used to integrate with my project accordingly. On top of that, i will refactor the code to make it more readable and add types into it.
```
3. I want to add a circular progress using chakra UI for a timer
```
Since i have not work with Chakra UI before, i want to save time to check if Chakra UI has any circular progress component which they did. ChatGPT provided me a quick code snippet example on how to use it and i just adopted it accordingly.
```
4. How to setup using Jest in React Typescript Nextjs application?
```
There were some complications when i try to run Jest on the project so i seek help from ChatGPT to give me some insights. It provided me some steps which i needed to take with reference to Jest Documentation.
```
5. i seem to be getting this error Property 'toBeInTheDocument' does not exist on type 'JestMatchers<HTMLElement>'.
```
Even after the configuration, there were still one compilation error in the code like above so i use both google search and ChatGPT to see if there is any solution. Turns out for typescript i still need to install one more type package in order to remove the error. It was kind of strange to me that this was not mentioned in the prompt before but at the end the tests are finally running.
```
6. Create a Button component class using React Typescript and Chakra UI
```
To save abit of time, i asked ChatGPT to create a sample button class for my current project. The response was clear and easy for me to do any relevant modifications.
```