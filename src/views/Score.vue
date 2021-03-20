<template>
  <div>
      <div v-if="notFinished">
      <h1> Congratulations! Your score is: {{score}}</h1>
      <h1> Your new average is: {{avg_score}}</h1>

      <button @click="reset()"> Finish </button>
      </div>
      <div v-else>
          <h1> Thanks for playing! <router-link to="/">  Back to Home</router-link></h1>
      </div> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Score',
  components: {
    
  },
  data (){
      return {
          notFinished:true
      }
  },
  computed:{
      score: function(){
          return this.$root.$data.score
      },
      avg_score: function(){
          
          return this.$root.$data.average_score
      }
  },
  methods:{
      reset(){
          this.$root.$data.score = 0
          this.notFinished = false
      }
  }
}
</script>
