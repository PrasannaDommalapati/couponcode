# simple-react-jest-webpack

The idea behind this _boilerplate_ is to be easy going writing `React` components with **ES2015** syntax. If you want to know abit more about why i made this heres a [link to my blog post](https://medium.com/@Nopziiemoo/another-webpack-boilerplate-light-130137604aad#.osa1toant) where i explain why i made this.

# What do you get
1. Easy setup to running a simple front dev enviroment with npm (or yarn if you fancy).
2. A simple dev server running your `react` components
3. A simple test enviroment with `jest` and simple commands to run them.
4. A light wight boilerplate, that allows you to expand as you go.
5. Zero opinion about your architecture, thats your thoughts that matter.


# Getting started
1. [Download the zip]
2. Unzip the file.
3. `$ npm install && npm start`

# Running Tests
Test are all being run from the `__test__` folder, this is configurable if need be in the `jest` key from `package.json`, how to make your own jest config see [Jest Config Guide](https://facebook.github.io/jest/docs/configuration.html)

**To Run**
1. `$ npm run test` - Runs the tests once.
2. `$ npm run test:dev` - Runs the tests and watching if the are being updated.

### Optional (running another devserver host / port)
After clone its possible to utilize your own `HOST`and `PORT` for the dev server, simply run `mv .example.env .env` after this open the `.env` file and fill out the variables `DEV_SERVER_HOST` and `DEV_SERVER_PORT`
