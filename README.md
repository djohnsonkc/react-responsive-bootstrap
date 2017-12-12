Springboard for React apps
=====================================
Simple React app to explore the use of routes, modularized components, and consumption of various endpoints of a RESTful API

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a boilerplate app that I started using the new create-react-app NPM module. I extended this to include a variety of other components.

* Added a new src/components directory to add a bit more organization
* Using a simple Bootstrap layout, I broke the HTML into separate React components that could be reused as well as separate view components that assembled these sub-components together.
* Ran "npm install react-router-dom" to include this wrapper for react-router to handle the route/view transitions
* Added the use of fetch to consume a REST API endpoint
* Added "proxy": "http://localhost:3001" to the end of the package.json file as a base endpoint reference to a REST API.
* Added Login.js and Register.js to gain familiarity with JSX form processing and using fetch to do HTTP POST requests to a a REST endpoint. 
* I built https://djohnsonkc-identity-provider.herokuapp.com as a homegrown, RESTful, JWT-based identity provider solution, which persists data to MongoDB
* Added some logic to App.js to allow a custom PropsRoute component to be used when a route needs to receive the state or props (variables or callback functions)





## Deploying to Heroku

This is some great information on how to deploy to Heroku. 

https://blog.heroku.com/deploying-react-with-zero-configuration


### Inspiration

http://stackoverflow.com/questions/43776887/react-router-v4-separating-link-and-route-path-elements

https://codesandbox.io/s/v21BD37NX


