# Promotion Triumph

Promotion triumph app is to give discount coupon codes for the buyers to save money when purchasing for the loved ones and increases the sales for the businesses with nominal subscription. Free for first 6 months.  

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
