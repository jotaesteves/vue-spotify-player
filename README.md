# Vue Spotify Player

Have you ever wanted to add Spotify integration into your app or website? Adding personalized music to any application is super easy with the Spotify Developer API.

The Spotify API is easy to use and can be added to any application.

In this post, I am going to walk through how to access the Spotify Developer API in the browser using React. The goal is to be a starting point for frontend devs who want to get set up with Spotify API as quickly as possible. Together, we will be creating a Spotify Web player that displays information about your currently played music from Spotify. We will also demonstrate how to:

- Register an application with Spotify
- Authenticate a user and get authorization to access user data
- Retrieve the data from a Web API endpoint

You can read my in depth blog post that accompanies this code, here: [https://medium.com/@joekarlsson/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6](https://medium.com/@joekarlsson/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6)


## Quickstart

### 1. Register an application with Spotify
If you have the .env file skip this step

Go to the [Dashboard](https://developer.spotify.com/dashboard) page at the Spotify Developer website, and click on ‘My New App.” Be sure to write down the Client ID from your application.

You can read my in depth blog post that accompanies this code, here: [https://medium.com/@joekarlsson/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6](https://medium.com/@joekarlsson/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6)

### 2. Clone example repository

```sh
git clone https://github.com/jotaesteves/vue-spotify-player.git
cd vue-spotify-player
```

### 3. Copy .env file to your environment

Copy `.env` to source your directory.
Or use this as a template and paste the ID from Step 1:

```json
VUE_APP_API_AUTH="https://accounts.spotify.com/authorize"
VUE_APP_API_URL="https://api.spotify.com"
VUE_APP_API_CLIENT_ID="YOUR_ID_HERE"
VUE_APP_REDIRECT_URL="http://localhost:8080/redirect"

```


### 4. Install dependencies & run locally

```sh
npm install
npm run serve # open http://localhost:8080 in your browser
```

## Available Scripts

In the project directory, you can run:

### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://cli.vuejs.org/guide/deployment.html) for more information.


### Contributing TLDR;

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -am 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request :D


### License

#### [MIT](./LICENSE)

### Follow Joe Karlsson on Social

- Twitter - [@JoeKarlsson1](https://twitter.com/JoeKarlsson1)
- GitHub - [@JoeKarlsson](https://github.com/joekarlsson/)
- LinkedIn - [/in/joekarlsson](https://www.linkedin.com/in/joekarlsson/)
- Website - [joekarlsson.com](https://www.joekarlsson.com/)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
