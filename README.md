# Teletronics Task
![Teletronics Logo](https://github.com/Mina-Dawood/teletronics-task/blob/master/src/assets/img/teletronics-logo.jpeg?raw=true)

### Live <a href="https://teletronics-task.netlify.app/" target="_blank">Demo</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/6be9eff4-644f-4d88-abe1-a3725533dbe1/deploy-status)](https://app.netlify.com/sites/teletronics-task/deploys)

## How to run this app without Docker

1. Open your terminal
2. Clone this repo by run this command
`git clone https://github.com/Mina-Dawood/teletronics-task`
3. Run `cd teletronics-task`
4. Run `npm install`
5. Run `npm start`

## How to run this app with Docker

1. Open your terminal
2. Clone this repo by run this command
`git clone https://github.com/Mina-Dawood/teletronics-task`
3. Run `cd teletronics-task`
4. Run `npm run build:docker`
5. Run `npm run start:docker`

## Features

- Crypto live dashboard to display user's favorite currencies as cards list.
- Highlight crypto currencies that have price change on real-time.
- Add / Remove crypto currencies to / from live dashboard.
- Display specific crypto currency details in a separate page.

## Assumptions

1. `Home Page` to enter crypto live dashboard page (Lazy Loading Module).
2. `Get Started` button in home page simulating user login.
3. `Authentication Guard` is added to prevent accessing the crypto live dashboard page or any other page until user clicked on `Get Started`, Then it should be directed to home page.
4. `JWT Interceptor` is added to intercept any request and add `Authorization & Content-Type` headers to the request.
5. `Localization` is added for English only, but the implementation is built to serve multi languages.
6. No pagination on add crypto to live dashboard page.


## Technology & Libraries


- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.
- `SCSS` as a pre-processor for CSS to give us new features not exists in the CSS.
- `@ngx-translate` for localizing the app.
- `netlify` for deployment.




## Backend APIs

- API for returning all crypto currencies [ https://api.coincap.io/v2/assets]( https://api.coincap.io/v2/assets)
- API for returning specific crypto currency [ https://api.coincap.io/v2/assets/:id]( https://api.coincap.io/v2/assets/:id)



## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/teletronics-task` directory.

## How to run unit test

1. Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
2. Open `index.html` of code coverage from this path: `coverage/teletronics-task/index.html`.
 ![Code Coverage](https://github.com/Mina-Dawood/teletronics-task/blob/master/src/docs/unit-test-code-coverage.png?raw=true)


# Thank You

