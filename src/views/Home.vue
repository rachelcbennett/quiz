<template>
  <div class="home">
    
    
    
    <div v-if="firstVisit">
        <h1> Welcome! Let's get started! </h1>
        <form v-on:submit.prevent="submitInfo">
                    <input v-model="addedName" placeholder="Name">
                    <br>
                    <input v-model="bio" placeholder="Tell us about yourself!">
                    <br/>
                    <button type="submit"> Submit</button>
                </form>
    </div>
    <div v-else>
        <h1> Welcome, {{addedName}}! Get ready to take the quiz! Remember, you can change your info any time at this <router-link to="/editinfo">link.</router-link> </h1>
        <br>
    <router-link to="/q1"><h1>Start the Quiz!</h1></router-link>

    <br>
    <br>
    <br>

    <h2> Or take a look at our <router-link to="/leaderboard">LEADERBOARD</router-link> where you can add and delete friends and challenge each other! </h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
      return {
          addedName:this.$root.$data.addedName,
          bio:this.$root.$data.bio,
          firstVisit: this.$root.$data.firstVisit
      }
  },
  methods:{
      submitInfo(){
          this.firstVisit= false
          this.$root.$data.addedName=this.addedName
          this.$root.$data.addedName=this.bio
          this.$root.$data.firstVisit = false
          this.$root.$data.friends.push({"id":-100,"name":this.addedName,"bio":this.bio,"avg_score":0})
      },
      
  }
}
</script>


<!-- img alt="Vue logo" src="../assets/logo.png"-->

<style scoped>
*{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
h2{
    
    color:rgb(144, 10, 161);
}
input{
    color:rgb(144, 10, 161);
}
#a.router-link-exact-active {
  color: rgb(144, 10, 161);
}
</style>