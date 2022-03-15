# Overview

In this project, you will bring together what you have learned in the previous lessons and build a project off of Codecademy. You will need to create your own files, write your own code, and publish the final product. We'll provide you with high-level tasks to guide your project to completion, but you will be responsible for deciding how to implement them in your code. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

## Project Title

Inspirational Homepage

## Hours to Complete

10

## Short Overview

Working with multiple APIs to build multiple features is a common problem to solve with React and Redux. How you display data is as important as how you fetch it. This project will give you an overview of how to build a React and Redux application that works with different APIs.

## Long Overview

For this project, you will build an inspirational homepage. This application will interact with different APIs to display the current weather, a background image, and an inspirational quote. It will also provide users with a space to write down their goals for the day. You can think of this app as a fancy todo list with dynamic data.

## Project Requirements

- Build the application using React and Redux
- Version control your application with Git and host the repository on GitHub
- Write a README (using Markdown) that documents your project including:
  - The purpose of your project
  - Technologies used
  - Features
  - Future work
- Your application is deployed via Netlify and accessible by users

### Features

- Users can check the current weather
- Users are shown an inspirational image
- Users can cycle through multiple fetched images
- Users are shown an inspirational quote
- Users can write down their goals
- Users can delete goals
- Users can mark goals as complete

## Prerequisites

- HTML
- CSS
- JavaScript, including requests to APIs
- React
- Redux
- Git and GitHub
- Deployment with Netlify

## Setup

### Going Off Platform

You will be doing this project outside of the Codecademy platform, on your own computer.

For this particular project, you will be using your own text editor (we suggest [VS Code](https://code.visualstudio.com/download)) and Git version control. If you need help setting up your text editor, read our [article about setting up a text editor for web development](https://www.codecademy.com/articles/visual-studio-code). If you need a refresher on how to work with Git for version control, [review the Git lesson](https://www.codecademy.com/learn/learn-git) or look at this [cheat sheet](https://www.codecademy.com/learn/learn-git/modules/learn-git-git-workflow-u/cheatsheet).

### APIs

For this project, you are welcome to use any APIs you want. You are encouraged to find new APIs to build new features for your application. Below we provide some recommendations.

- Weather: [OpenWeather API](https://openweathermap.org)
- Quote: [Quotes API](https://quotes)
- Image: [Unsplash API](https://unsplash.com/developers)

## Tasks

### Plan your Project

Visualize your end result. What can it do? Make sure that it satisfies all of the project objectives.

Make a timeline for yourself and avoid the temptation to build things that aren't required. Setting firm boundaries and deadlines will keep you on track and prevent [scope creep](https://en.wikipedia.org/wiki/Scope_creep).

The following tasks will help you identify natural break points.

### Breakdown your Application

Using pencil and paper or a tool of your choice, breakdown what your application will look like as components. You can reference the [React documentation](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy) as a refresher on how to do this.

#### Hint

Think about what the main components of the application will be and how they will interact with each other. Think about how the state will look, which components will read the state, and which components will dispatch actions.

### Create Files and Run it Locally

On your computer, create the files needed for your React and Redux Toolkit application. Run your application locally to see what it looks like in the browser.

#### Hint

You can use [create-react-app](https://create-react-app.dev/) to start your React application. If you want to set up Redux automatically, you can use [the Redux flag](https://redux-toolkit.js.org/introduction/quick-start#using-create-react-app).

### Version control

If you used `create-react-app` above, you can skip this step. `create-react-app` automatically configures the local Git repository. You will still need to set up a remote origin though, you can learn more [here](TODO:REPLACE_WITH_BENS_ARTICLE).

Set up the folder you created previously to be a Git repository. Push the initial files to a repository on GitHub. You should be consistently committing your changes throughout the project. Make sure to have meaningful commit messages.

#### HINT

To initialize your Git repository, you can run the below code in your terminal, where `application` is the name of your project folder.

```git init application```

If you want a refresher on the syntax, look back at the [Git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf).

### Build the Components

Start building your application with mock data. You should focus on how your components will interact with the data rather than how it will get the data from APIs at this point (that comes in a later task). Remember to build reusable components and to keep your components small.

Things to keep in mind:

- You are welcome to use any libraries to help you build features
- You are welcome to use other APIs that are not listed above
- You should be consistent on the folder structure. Remember to think about features, connected components, and presentational components.

### Connect your Components to Redux

Now that you've built your components, you will want to connect them to the Redux store. Related data should belong in the same slice and actions should describe events happening in your application. At this point your application is not connected with the APIs so feel free to set the initial states for the slices to mock data.

HINT
You'll need at least four slices: one for each API and one for the goals list.


### Weather API

You can use the [OpenWeather API](https://openweathermap.org). Here's how to get started:

1. [Create an account](https://home.openweathermap.org/users/sign_up)
2. Go to the [API keys page](https://home.openweathermap.org/api_keys) and copy the `Key` value
3. Read their [API documentation](https://openweathermap.org/api) to see which API gives you the data you need

##### Hint

We will use the [Current Weather API](https://openweathermap.org/current) as an example. Inside of our code, we can get the current weather data like this:

```js
// This is the key you copied from step 2.
const API_KEY = "A_RANDOM_API_KEY";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const getWeather = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
};
```

Don't forget to handle the loading and error states when interacting with APIs.

### Quote

You can use the [Quotes API](https://quotes.rest). Here's how to get started:

1. Read their [API documentation](https://quotes.rest) to see which API gives you the data you need

##### Hint

We will use the [Quote of the day API](https://quotes.rest/#operations-tag-Quote_of_the_day) as an example. Inside of our code, we can get the quote of the day like this:

```js
const API_URL = `https://quotes.rest/qod?language=en`;

const getQuote = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
};
```

### Image

You can use the [Unsplash API](https://unsplash.com/developers). Here's how to get started:

1. [Create an account](https://unsplash.com/join)
2. [Create a new application](https://unsplash.com/oauth/applications/new) on their developer portal. You will need to copy the Access Key.
3. Read their [API documentation](https://unsplash.com/documentation) to see which API gives you the data you need

##### Hint

We will use the [Search photos API](https://unsplash.com/documentation#search-photos) as an example. Inside of our code, we can get photos based on a query like this:

```js
// This is the key you copied from step 2.
const ACCESS_KEY = 'A_RANDOM_ACCESS_KEY'
const API_URL = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}`;

/**
 * @param {string} query - The query used to find relevant images.
 */
const getImages = async (query) => {
  const response = await fetch(`${API_URL}&query=${query}`);
  const json = await response.json();

  return json;
};
```

### Publish to the Web

Congratulations on building your application! Deploy what you've built and share it with the world!

#### Hint

We recommend using [Netlify](https://www.netlify.com/). You can learn how to deploy your application from your repository [here](TODO:REPLACE_WITH_BENS_ARTICLE)

### Next Steps

You've built something amazing! Share it with people, get feedback, and improve it.

## Resources

### Debugging Tips

Feeling stuck? Try the following:

- **Google your question:** oftentimes, someone has had the same question as you! Check out websites like StackOverflow and Quora to see how other folks have found solutions.
- **Read the documentation:** make sure to carefully read through the documentation for any languages and libraries that you are using. Oftentimes they'll have examples of what you're looking for!
- **Rubber ducking:** try to explain a problem to a friend or co-worker. Oftentimes you'll figure out the solution as you're trying to explain it. And if not, getting another pair of eyes on your code can be helpful.

## Example Code

Want to see an example of how someone else has completed this project? Click this [link](TODO:REPLACE_ME) to download a zip file containing one example solution to this project. Remember: your project doesn't have to look anything like this! It should be unique to your vision.

## Sharing

Great work! Visit [our forums](TODO:REPLACE_ME) to compare your project to our sample solution code. After you host your own solution on GitHub, be sure to share it with other learners and see how other learners have built their own projects!

Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.
