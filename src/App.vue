<template>
    <div id="App" class="App">
        <header class="App-header">
            <img :src="logo" class="App-logo" alt="logo" />
            <div v-if="!token">
                <a class="btn btn--loginApp-link"
                   :href="loginUrl"
                >
                    Login to Spotify
                </a>
            </div>
            <div v-else-if="!no_data">
                <Player
                  :item="item"
                  :is_playing="is_playing"
                  :progress_ms="progress_ms"
                />
            </div>

            <div v-else-if="no_data">
                <p>
                    You need to be playing a song on Spotify, for something to appear here.
                </p>
            </div>

        </header>
    </div>
</template>

<script>
import Player from "@/components/Player.vue"
import spotifyService from "@/services/spotifyService"
import hash from "@/utils/hash"
import logo from "@/assets/logo.png"
import { clientId, redirectUri, scopes } from "@/services/config"

export default {
  name: "App",
  components: { Player },

  computed: {
    loginUrl() {
      return `${process.env.VUE_APP_API_AUTH}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
    },
  },

  data() {
    return {
      token: null,
      item: {
        album: {
          images: [{ url: "" }],
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0,
      },
      is_playing: false,
      progress_ms: 0,
      no_data: false,
      logo
    }
  },

  methods: {
    tick() {
      if (this.token) {
        this.getCurrentlyPlaying(this.token)
      }
    },

    getCurrentlyPlaying(token) {
      // Make a call using the token
      spotifyService.getCurrentlyPlaying(token)
        .then((res) => {
          if (!res.data) {
            this.no_data = true
            return
          }

          this.item = res.data.item
          this.is_playing = res.data.is_playing
          this.progress_ms = res.data.progress_ms
          this.no_data = false
          /* We need to "reset" the boolean, in case the
             user does not give F5 and has opened his Spotify. */
        })
    }
  },

  mounted() {
    // Set token
    let _token = hash.access_token

    if (_token) {
      // Set token
      this.token = _token
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 1000)
  },

  beforeDestroy() {
    // clear the interval to save resources
    clearInterval(this.interval)
  },
}
</script>

<style>
.App {
  text-align: center
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 35vmin;
  pointer-events: none;
  padding: 5rem;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

body {
  background-color: #333;
  color: #eee;
  font-family: Helvetica, Arial;
  font-size: 3vmin;
}

.hidden {
  display: none
}

/** Buttons **/

.btn {
  background-color: transparent;
  border-radius: 2em;
  border: 0.2em solid #1ecd97;
  color: #1ecd97;
  cursor: pointer;
  font-size: 3vmin;
  padding: 0.7em 1.5em;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

.btn:hover {
  background: #1ecd97;
  color: #333;
}

.btn--login {
  margin: 0 auto;
}

/** Background **/

.background {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  filter: blur(8em) opacity(0.6);
  position: absolute;
}

.main-wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  position: relative;
  width: 80%;
  z-index: 1;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
}

.main-container {
  flex: 1;
}
</style>


/*

Finish exercies and email to interviewer Jonas
put Janina in CC

 */