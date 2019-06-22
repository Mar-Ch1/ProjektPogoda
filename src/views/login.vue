<template>
    <div class="login">
        <h3>Zaloguj się</h3>
        <el-input class="signup-input" type="text" v-model="email" placeholder="Email" style="width: 300px"></el-input><br>
        <el-input class="signup-input" type="password" v-model="password" placeholder="Hasło" style="width: 300px"></el-input><br>
        <el-button type="primary" @click="login" style="width: 200px">Zaloguj</el-button>
        <p>Nie masz jeszczę konta? Możesz je założyć <router-link to="/signup">tutaj</router-link></p>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name:'login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((user)=>{
                this.$router.replace('home')
            },
            function(err){
                alert('Oops. '+err.message)
            }
            );
        }
    }
}
</script>
<style scoped>
.signup-input{
    padding: 15px;
}
button{
    margin-top: 10px;
    width: 20%;
    padding: 15px;
}
span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>
