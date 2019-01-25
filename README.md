# Welcome to Keep.i Front-End Challenge
Hey dude!
We are exciting to find our next great Front-End member, We expect you be this fuck developer!

To test your skills, We would like to see your ability to improve our great application ** Deck Royale **.

Our development team did a great job building this application, but the layout is pretty simple and we need to fix it.

# The Challenge
#### Create a beautiful, easy-to-navigate layout and improve the data presentation.

### Basic Items
* Improve the home page layout
* Add your css. DO NOT USE some framework like bootstrap ou another. 
* Add charts to present data using the **Highcharts.js** api.

Some extra functionality are welcome to improve our application

**The layout is yours, Be creative.**

## How to delivery
Just make a pull request to our repository.

## Evaluation

* Layout
* UX
* Creativity
* Charts usage
* Clean code
* Code documentation
* Project documentation (readme)
* Performance
* Vue.js usage improvements


## In this project we used
* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Vue](https://vuejs.org/)
* [Bootstrap](https://getbootstrap.com/docs/3.3/)
* [Clash Royale API](https://github.com/martincarrera/clash-royale-api)

## Requirements

* [NodeJs](https://nodejs.org/en/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## About the Project Files
`src\domain\clash\ClashServices.js` - Where we are requesting the Clash Royale API for data and returning JSON objects.

`src\components` - Where we saved all the templates.

`src\components\shared` - Where we saved all the templates that are used in multiple places.

`src\assets` - Where we saved our CSS, JS and static images.

`src\routes` - Where we manage our application Routes (which template is used in which path).

`src\main.js` - Where we import the modules that our application uses, and configure them(the modules).

`package.json` - Has all the info needed by Node about the project.


## Modules Used
### Vue Resource
We used the [Vue Resource](https://www.npmjs.com/package/vue-resource) module so we could consume the Clash Royale API that follows the REST pattern.

### Vue Router
We used the [Vue Router](https://www.npmjs.com/package/vue-router) module so we could define the application routes, making it easy to bing the content with the url path.

### Bootstrap
We used the [Bootstrap v3.3.7](https://www.npmjs.com/package/bootstrap) module to style our application.

## Consuming API
In this project we are consuming the data from the [Clash Royale API](https://github.com/martincarrera/clash-royale-api).

----------
This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell’s Fan Content Policy](http://www.supercell.com/fan-content-policy).


### Troubleshoot
:warning: **UPDATE:** Getting an "Oooooops" error page? Try using **"http://"** instead of **"https://"** when accessing the application.
