var app = new Vue({
  el: '#app',
  data: {
    searchKey: '',
    searchResult: [],
    flags: ['cs','de','en','es','fr','it','ja','ko','pt'],
    posterSearch: 'https://image.tmdb.org/t/p/w342/',
    arrayCast: []
  },
  mounted(){
  },
  methods: {
    search(){
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=f2922e392ad59dc9847c918152adaac0&language=it-IT&query='+this.searchKey).then((result) => {
        this.searchResult = result.data.results;
        this.searchResult.forEach((element, i) => {
          axios.get('https://api.themoviedb.org/3/movie/'+element.id+'/credits?api_key=f2922e392ad59dc9847c918152adaac0&language=it-IT').then((result) => {
            for (var i = 0; i < 5 && i < result.data.cast.length; i++) {
              this.arrayCast.push(result.data.cast[i].name);
            };
            Vue.set(element, 'cast', this.arrayCast)
            this.arrayCast = [];
          }).catch(error => alert('Errore caricamento cast dei film!'));
        });





      }).catch(error => alert('Errore caricamento film!'));
      // axios.get('https://api.themoviedb.org/3/search/tv?api_key=f2922e392ad59dc9847c918152adaac0&language=it-IT&query='+this.searchKey).then((result) => {
      //   this.searchResult = this.searchResult.concat(result.data.results);
      // }).catch(error => alert('Errore caricamento serie tv!'));
      this.searchKey = '';
    },
    starConverter(index,vote){
        return index <= Math.floor(vote / 2) ? 'fas fa-star' : 'far fa-star';
    },
    langFlag(lang){
      if (this.flags.includes(lang)) {
        return 'img/' + lang + '.svg'
      }
      else {
        return 'https://i5.walmartimages.com/asr/f7b829ed-46b3-42e6-940b-cda67af33b89_1.3efb07902f8a8fe14e9dd660e926364e.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'
      }
    },
    // castAdd(){
    //
    //   Vue.set(this.searchResult, 'cast', arrayCast)
    // },
  }
});





















// backdrop_path
// genre_ids
// id
// title --> name-(serie)
// original_language
// original_title --> original_name-(serie)
// overview
// vote_average
// poster_path
// popularity
// vote_count
