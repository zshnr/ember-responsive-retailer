# Ember-responsive-retailer

A responsive store front written in JavaScript, HTML & CSS, made with Ember.js

## User Stories

- [x] As a User I can view the products and their category, price, and availability information.
- [x] As a User I can add a product to my shopping cart
- [x] As a User I can remove a product from my shopping cart
- [x] As a User I can view the total price for the products in my shopping cart
- [x] As a User I can apply a voucher to my shopping cart
- [x] As a User I can view the total price for the products in my shopping cart with discounts applied
- [ ] As a User I am alerted when I apply an invalid voucher to my shopping cart
- [x] As a User I am unable to add out of stock products to the shopping cart

## Code Layout

* **app/** : This is where our app lives.
  * **app/adapters**: This is where we specify which adapter we will use with `ember-data`. For example whether its a RESTadapter, localstorage adapter, etc. We also code any customizations to the adapter here.
  * **app/components**: This is where our custom web components alerted.
  * **app/controllers**: This is where our controllers are.
  * **app/helpers**: This is where any helpers that we create are located.
  * **app/models**: This is where our models are
  * **app/routes**: This is where we define and customize our routes.
  * **app/styles**: Any custom CSS goes here
  * **app/templates**: All of our handlebars templates go here.
  * **app/app.js**: This where we define and create our app
  * **app/index.html**: The index.html page
  * **app/router.js**: This is where we define the different URLs of our app.
* **config/**: This is where we set configuration parameters for Ember.js
* **ember-responsive-retailer/**: Is where the output of our build command happens
* **modules/**: Any additional files of addons go here
* **public/**: Is where we keep our assets like images, fonts, robot.txt etc.
* **tests/**: This is where all our tests go
  * **tests/helpers**: contains our test helpers
  * **tests/unit**: Contains all our unit tests
  * **tests/index.html**: Test output to view in browser
  * **tests/test-helper.js**: Sets the resolver for our tests.
* **vendor/**: Any third party assets go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit the app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test --server`

## Thoughts

1. I chose Ember.js to do this tech test in because it had piqued by curiosity. However, most of my woes have been due not only the very steep learning curve of Ember but also its fast changing nature which results in deprecations. To their credit, the core team of Ember is very, very good with documentation and with helping devs migrate from deprecated methods.
2. I initially used `ember-cli-mirage` to mock an API and used a RESTadapter to make the api calls. However, the addon did not allow fixture data to be updated as a normal app would, so I had to fall back on using `localstorage` (through the `localforage` adapter)
3. Learning Ember meant that I had to write the code first and figure out its testing later. Now that i've used Ember for a solid 2-3 weeks, I'm fairly sure I can do a TDD first approach when building apps in Ember.
4. I think most of my pain points was due to using the latest (stable) version of Ember from the get go. When I finally reached a point where `ember-data` and the `localforage` adapter were not persisting data, I had to rollback to a slightly older version. Had I done this earlier I would not have had a WIP list.
5. Designing a website is a lot difficult than it appears. My respect to designers!

#WIP

1. Implement flash notices for adding in cart, removing from cart, and when applying invalid voucher
2. Acceptance tests!!
2. Make the £15 voucher only apply when footwear is in the cart
3. Try to refactor the voucher actions in the cart controller
3. Design and Style the website. Including the shopping cart
4. Implement custom media queries to make it properly responsive
