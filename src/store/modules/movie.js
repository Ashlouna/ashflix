export default {
  state: {
    movies: [],
    currentMovie: {},
  },
  mutations: {
    changeMovies(state, movies) {
      state.movies = state.movies.concat(movies);
    },
    changeMovie(state, currentMovie) {
      state.currentMovie = currentMovie;
    },
    clearMovies(state) {
      state.movies = [];
    },
    removeMovie(state) {
      for (const prop of Object.keys(state.currentMovie)) {
        delete state.currentMovie[prop];
      }
    },
  },
  actions: {
    fetchCall(ctx, arr) {
      let url = `http://www.omdbapi.com/?apikey=d4c2ff4e&page=${arr[0]}&s=${arr[1]}&type=${arr[2]}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => json.Search)
        .then((data) => {
          data.forEach((item) => {
            if (localStorage.getItem(item.imdbID) !== null) {
              item.isFavorite = "red";
            } else {
              item.isFavorite = "";
            }
          });

          ctx.commit("changeMovies", data);
        })
        .catch((err) => console.log(err));
    },
    fetchCurrentMovie(ctx, id) {
      let url = `http://www.omdbapi.com/?apikey=d4c2ff4e&i=${id}`;
      fetch(url)
        .then((data) => data.json())
        .then((response) => ctx.commit("changeMovie", response))
        .catch((err) => console.log(err));
    },
    closeModal(ctx) {
      ctx.commit("removeMovie");
    },
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
    showAllInfo(state) {
      return state.currentMovie;
    },
  },
};
