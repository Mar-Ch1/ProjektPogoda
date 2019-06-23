# pogoda
npm install
npm run serve


Dokumentacja 

Funkcja przyjmuje 2 argumenty email i hasło które nastepnie waliduje, jeśli walidacja przejdzie pomyślnie zostaje utworzony nowy użytkownik. Po założeniu konta nowy użytkownik zostaje przeniesiony do głownego widoku aplikacji i otrzymuje autoryzacje firebase.

signUp: function(){
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((user) => {
        this.$router.replace('home')
    },
    (err)=>{ 
        alert('Oops.' +err.message)
    }
    );
}

Funkcja służaca do logowania użytkownika który posiada już konto, funkcja przyjmuje dwa parametry, następnie sprawdza czy istnieje konto z emailem jaki przekazał użytkownik. Jeśli dane się zgadzają użytkonik zostaje przeniesiony do głownego widoku aplikacji.

login: function() {
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((user)=>{
        this.$router.replace('home')
    },
    function(err){
        alert('Oops. '+err.message)
    }
    );
}

Funkcja służąca do wylogowywania się, kiedy użytkownik ma autoryzacje i jest w głowym widoku aplikacji ma możliwość wylogowania się. Prze kliekniecie przycisk "Wyloguj" po kliknieciu użytkownik traci autoryzacje firebase i zostaje przeniesiony do widoku logowania.

logout: function() {
  firebase.auth().signOut().then(()=>{
    this.$router.replace('login')
  })
},

Funkcja służąca do wysyłania zapytania do API i odbierania odpowiedzi, funkcja pobiera stałe fragmenty zapytania jak API_KEY i skleja to zapytanie z danymi przekazanymi przez użytkonika. Nastepnie zapytanie jest obsługiwane przez API i zwracana odpowiedz w formacie json jest przypisywana do odpowiednich zmiennych.

getapi:(function() {
axios
    .get(`${API}${this.searchValue}&units=metric&APPID=${API_KEY}`)
    .then((response) =>{
    let zmienna = {
        city: response.data.name,
        city_id: response.data.id,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,

    };

Funkcja która nadaje użytkownikowi autoryzacje poprzez poprawne zalogowanie.

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
