<template>
  <div class="editinfo">
    
    
    

        <h1> You can edit your info here:</h1>
        <form v-on:submit.prevent="submitInfo">
                    <input v-model="addedName" placeholder="Name">
                    <br>
                    <input v-model="bio" placeholder="Tell us about yourself!">
                    <br/>
                    <button type="submit"> Submit</button>
                </form>
        <br>
        <br>
        <div v-if="doneEdit">
            Great, thanks! <router-link to="/">Back to Home</router-link>
        </div>

    <br>
    <br>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'EditInfo',
  components: {
  },
  data(){
      return {
          addedName:this.$root.$data.addedName,
          bio:this.$root.$data.bio,
          doneEdit:false
      }
  },
  methods:{
      submitInfo(){
          this.firstVisit= false
          this.$root.$data.addedName=this.addedName
          this.$root.$data.addedName=this.bio
          this.$root.$data.firstVisit = false
          this.$root.$data.friends.push({"id":-100,"name":this.addedName,"bio":this.bio,"avg_score":0})
          this.doneEdit = true
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