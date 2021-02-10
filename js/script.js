var app = new Vue({
  el: '#app',
  data: {
    searchKey: '',
    searchResult: []
  },
  mounted(){
    // for (let i = 0; i < 10; i++) {
    //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
    //       this.mail.push(result.data.response);
    //       console.log(result.data.response);
    //     })
    // }
  },
  methods: {
    search(){
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=f2922e392ad59dc9847c918152adaac0&language=it-IT&query='+this.searchKey).then((result) => {
        this.searchResult = result.data.results;
      })
      this.searchKey = '';
    }
  }
});
