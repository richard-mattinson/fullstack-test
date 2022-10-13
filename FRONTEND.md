# Building a Frontend Project From Scratch
## Inital setup
### Create a react app
- To install the basics of a react app
  - `npx create-react-app . ` to create an app in your current folder
  - `npx create-react-app 'app name here'` to create an app in a new folder
- `npm start` to boot your react app
- inside the `src` folder 
### Install react router version 6
- `npm install react-router-dom@6` to use router functions
  - Inside `index.js` add `import { BrowserRouter } from "react-router-dom";`
  - inside `src/app.js` add `import { Routes, Route } from 'react-router-dom'`
- `npm ci` to install any required dependencies

## To use Bootstrap
### Bootstrap CSS
Either
- `npm install bootstrap@5.2.2`
- add `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
` to the head of `public/index.html`
### Bootstrap Icons
add `<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" rel="stylesheet">` to the head of `public/index.html`

## Create folders and files
- inside the `src` folder create the following folders and files
- `assets`
  - All images wil be stored here
- `pages`
  - Create all your sections of the page here, e.g. header, menu, contact us
- `context` (only necessary if you intend to useContext to pass user info around your application)
  - `LoggedInUser.jsx`

