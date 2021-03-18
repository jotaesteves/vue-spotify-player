<template>
  <div id="Player" class="App">
    <div v-if="item.duration_ms == 0" class="loading">Loading</div>
    <div v-else class="main-wrapper">
      <div class="now-playing__img">
        <img id="img" :src="item.album.images[0].url" />
      </div>
      <div class="now-playing__side">
        <div class="now-playing__name">{{ item.name }}</div>
        <div class="now-playing__artist">{{ item.artists[0].name }}</div>
        <div class="now-playing__status">
          {{ is_playing ? "Playing" : "Paused" }}
        </div>
        <div class="progress">
          <div class="progress__bar" :style="progressBarStyles" />
        </div>
        <div class="now-playing__time">
          <span> {{ progress_ms | formatToMinutes }} </span>
          <span> {{ item.duration_ms | formatToMinutes }} </span>
        </div>
      </div>
      <div class="background" :style="backgroundStyles" />
      {{ " " }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          album: {
            images: [{ url: "" }],
          },
          name: "",
          artists: [{ name: "" }],
          duration_ms: 0,
        };
      },
    },

    is_playing: {
      type: Boolean,
      default: false,
    },

    progress_ms: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    backgroundStyles() {
      return `backgroundImage: url(${this.item.album.images[0].url});`;
    },

    progressBarStyles() {
      return `width: ${(this.progress_ms * 100) / this.item.duration_ms}%;`;
    },
  },
};
</script>

<style scoped>
/** Now Playing **/

.now-playing__name {
  font-size: 1.5em;
  margin-bottom: 0.2em;
}

.now-playing__artist {
  margin-bottom: 1em;
}

.now-playing__status {
  margin-bottom: 1em;
  opacity: 0.5;
  font-weight: 100;
  font-size: 1.1rem;
}

.now-playing__img {
  float: left;
  margin-right: 10px;
  text-align: right;
  width: 45%;
}

.now-playing__img img {
  max-width: 80vmin;
  width: 100%;
}

.now-playing__side {
  margin-left: 5%;
  width: 50%;
  text-align: left;
}

.now-playing__time {
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/** Progress **/

.progress {
  border: 1px solid #eee;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress__bar {
  background-color: #eee;
  height: 4px;
}


/* loading dots */

.loading:after {
  content: ' .';
  animation: dots 1s steps(5, end) infinite;}

@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}}

</style>