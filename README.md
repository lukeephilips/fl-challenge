# Fleet Code Challenge

#### Created by Luke Philips**_

#### _Mock web app using React, react-router-dom, isomorphic-fetch._

## Setup/Installation Requirements


_Setup instructions:_
```
git clone https://github.com/lukeephilips/fleet-code-challenge
npm install
npm run build
npm start
```

## Technologies Used
* create-react-app: I chose this because due to the limited scale of the project, it was a good solution to focus my time on development rather than environment
* react-router-dom for routing: I like this because it's simple and fast to setup, and the client side routing gives a polished feel.
* isomorphic-fetch: It's quick and easy and I like the built in support of the #then method

## Improvements
* The error state rendering doesn't really work correctly, first thing is I'd fix that.
* The API call should be pulled into a microservice rather than left directly in the component.
* The front end could certainly use more polish.

##Additional features with more time
* I originally tackled this coding challenge using redux and redux-thunk, but got bogged down in middleware and decided that I was unnecessarily complicating the challenge. With more time I would finish out building the app with redux. This may be too much showing how the sausage is made, but that repo is here: https://github.com/lukeephilips/Shipstr
* With more time I would use a more robust build template rather than create-react-app.
* Add a test suite.

**_Thanks for taking a look, it was a fun challenge!_**
