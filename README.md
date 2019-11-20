# Web Coding Challenge FrontEnd
this project represents my participation in the recruitment challenge of United Remote.
it was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the App
``` sh
$ git clone https://github.com/razouq/web-coding-challenge-front-end.git
$ cd web-coding-challenge-front-end
$ yarn install
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## External Packages
- [Lodash](https://github.com/lodash/lodash)
- [Axios](https://github.com/axios/axios)
- [Bootstrap](https://github.com/twbs/bootstrap)
- [Jwt-decode](https://github.com/auth0/jwt-decode)
- [redux](https://github.com/reduxjs/redux)
- [react-redux](https://github.com/reduxjs/react-redux)
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [redux-thunk](https://github.com/reduxjs/redux)

## Pages
### 1. Registration
``` http
http://localhost:3000/register
```
the user can create a new account.

### 2. Login
``` http
http://localhost:3000/login
```
the user can login into the application by providing a correct username and password.

### 3. Nearby Shops List
``` http
http://localhost:3000/nearby-shops
```
the application takes automatically the location of user and display a sorted list nearby shops <br>
this page load more shops when the user scroll down or like dislike the shown shops without scrolling.

### 4. Preferred Shops List
``` http
http://localhost:3000/preferred-shops
```
the application displays a list o preferred shops which are liked by the user <br>
this page load more shops when the user scroll down or remove the shown shops withous scrolling.
## Actions
### 1. Like
the user can like a shop displayed in the nearby shops list, this shop will be added to the preferred shops list immediatly.
the user can not like a disliked or preferred shop.
### 2. Dislike
the user can dislike a shop displayed in the nearby shops list, this shop will not be displayd in the nearby shops list during the next 2 Hours.
the user can not dislike a disliked shop.
### 3. remove
the user can remove a shop from preferred shops list 
#Contributor
Anass Bendarsi bendarsi@gmail.com
