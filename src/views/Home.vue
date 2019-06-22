<template>
  <div class='content'>
    <el-button type="warning" class="logout-btn" @click="logout">Wyloguj</el-button>
      <div class="search">
        <label for="Search">Szukaj</label>
        <el-input id="search" name="search" v-model="searchValue"></el-input>
        <el-button type="success" v-on:click="getapi" >Dodaj miasto</el-button>
    </div>  
    <div class="data-displayed">
      <template>
        <el-table
        ref="singleTable"
        :data="response"
        style="width:400px" >
        
        <el-table-column 
        prop="city"
        label="Miasto"
        width="100">
        </el-table-column>
        
        <el-table-column
        align="center"
        prop="temperature"
        label="Temperatura"
        width="110">
        </el-table-column>
        
        <el-table-column
        align="center"
        prop="humidity"
        label="Wilgotność"
        width="100">
        </el-table-column>   
        
        <el-table-column
        slot="empty"
        prop=""
        width="0">
        </el-table-column>  
    </el-table>
  </template>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import axios from 'axios';
// @ is an alias to /src
const API = 'http://api.openweathermap.org/data/2.5/weather?q=';   
const API_KEY = '948b7f592d453b664be5fee32eb18ac4';   

export default {
  name: 'home',
  data(){
    return{
      searchValue: '',
      response:[],
    }
  },
  methods:{
    logout: function() {
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    },
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
        this.response.push(zmienna);
        console.log(zmienna['city']);
        console.log(zmienna['temperature']);
        console.log(zmienna['humidity']);
    })
        .catch((error) => {
        console.log(error);
    });
  }),
  }
}

</script>
<style  scoped>
    .data-displayed{
      margin-left:-30px;
    }
    .content{
      margin-left:40%;
    }
    .button-wyloguj{
        margin-top: 50px;
        margin-bottom: 30px;
    }
    .search{
        display: flex;  
        flex-direction: column;
        width: 250px;
        margin-bottom: 30px;
    }
    input{
        height: 30px;
        border-bottom: 1px solid black;
        margin-bottom: 20px;
    }
    td{
      width:150px;
      height: 50px;
    }
    .logout-btn{
      margin-top: 10px;
      float:right;
    }
</style>

