<template>
    <div class="sign-up">
        <h3>Załóż nowe konto!</h3>
        <el-input class="signup-input" type="text" v-model="email" placeholder="Email" style="width: 300px"></el-input><br>
        <el-input class="signup-input" type="password" v-model="password" placeholder="Hasło" style="width: 300px"></el-input><br>
        <el-button type="primary" @click="signUp" style="width: 200px">Zarejestruj się</el-button>
        <p>lub jeśli masz konto <router-link to="login">zaloguj się</router-link>.</p>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name:'signUp',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((user) => {
                this.$router.replace('home')
            },
            (err)=>{ 
                alert('Oops.' +err.message)
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
