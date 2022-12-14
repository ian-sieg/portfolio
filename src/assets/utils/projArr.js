import sofreshsogreen from '../images/sofreshsogreen.png'
import sightCity from '../images/sightcity.png'
import homebuddy from '../images/homebuddy.png'
import techblog from '../images/techblog.png'
import notetaker from '../images/notetaker.png'

const projArr = [
    {
        id: 'sfsg',
        title: 'So Fresh So Green',
        info: 'So Fresh So Green is A Social Networking and E-Commerce App for Plant Lovers. Users can create, like and comment on posts, add plants to their garden, follow other users, list their plants for sale, and purchase plants in the marketplace.',
        tools: 'React, Stripe, Tailwind CSS, Redux, AWS, 3JS (Spline), JWT Authentication, Moment JS, Apollo, GraphQL, MongoDB, Mongoose.',
        resp: 'MongoDB database design and implementation, Apollo/GraphQL routesetting, newsfeed, post and profile functionality/React component setup.',
        image: sofreshsogreen,
        repo: 'https://github.com/So-Fresh-So-Green/so-fresh-so-green',
        link: 'https://so-fresh-so-green-app.herokuapp.com/'
    },
    {
        id: 'sc',
        title: 'SightCity',
        info: "SightCity is an application which allows users to create trip itineraries for cities they would like to visit and email themselves their schedule. Users are also able to view other people's itineraries and get ideas about which hotels and activities to add to their own trip.",
        tools: 'Yelp API, Geoapify API, EmailJS, MySQL, Sequelize, Express.js, Node.js, Handlebars.js, Heroku, Materialize CSS, jQuery.',
        resp: 'Implementation of Geoapify API, EmailJS functionality, MySQL database layout/implementation, routesetting, UX/UI.',
        image: sightCity,
        repo: 'https://github.com/edanahy22/sightcity-travel-planning',
        link: 'https://sight-city.herokuapp.com/'
    },
    {
        id: 'hb',
        title: 'Homebuddy',
        info: 'Everyone wants an evening in, whether it be by themselves or with friends. With the Homebuddy app you can make an evening at home just as memorable as an evening out! Users are able to pair a meal with a cocktail and film of their choice, as well as save recipes for later.',
        tools: 'Edamam API, TMDB API, The Cocktail DB API, BulmaCSS, JavaScript, jQuery.',
        resp: 'Implementation of The Movie Database API and filters, film card css/, UX/UI.',
        image: homebuddy,
        repo: 'https://github.com/MasonMcCoy/meal-prepper',
        link: 'https://masonmccoy.github.io/meal-prepper/'
    },
    {
        id: 'ttb',
        title: 'The Tech Blogg',
        info: "This app was designed to allow users a place to write about new coding skills they've learned, as well as comment on other users' posts. Users are able to create, update and delete their own posts, while also adding comments to other users' posts.",
        tools: 'MySQL, Sequelize, Express.js, Node.js, Handlebars.js, Heroku, Bulma CSS, JavaScript, jQuery.',
        image: techblog,
        repo: 'https://github.com/ian-sieg/tech-blog',
        link: 'https://aqueous-journey-18508.herokuapp.com/'
    },
    {
        id: 'nt',
        title: 'Note Taker',
        info: "This is an app deployed on Heroku that allows the user to write, save, update, and delete notes. The application uses an Express.js back-end and stores notes on a JSON file.",
        tools: 'Express.js, Heroku.',
        image: notetaker,
        repo: 'https://github.com/ian-sieg/notetaker',
        link: 'https://safe-falls-80202.herokuapp.com/'
    },
]

export default projArr