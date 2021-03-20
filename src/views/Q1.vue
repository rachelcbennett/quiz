<template>
  <div class="q1">
    
    <h1> YOUR SCORE: {{score}}</h1>
    <div class = 'quiz'>
        <div v-if="questionValid">
            <h1> Which animal is native to North America?</h1>

            
            <button @click ="failQuestion()">  A: {{A_answer}}</button>
            <button @click="failQuestion()">  B: {{B_answer}}</button>
            <button @click ="correctAnswer()">  C: {{C_answer}}</button>
            <button @click ="failQuestion()">  D: {{D_answer}}</button>
        </div>
        <div v-else>
            <div v-if="questionFailed">
                <h1> WRONG </h1>
                <router-link to="/q2">Next Question</router-link>
            </div>
            <div v-else>
                <h1> CORRECT!</h1>

                <router-link to="/q2">Next Question</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Q1',
  components: {
  },
  data(){
      return {
          questionValid: true,
          questionFailed: false,
          
          A_answer: 'Leopard',
          B_answer: 'Panda',
          C_answer: 'Squirrel',
          D_answer: 'Monitor Lizard',
      }
  },
  mounted(){

  },
  computed:{
      score:function(){
          return this.$root.$data.score
      }
  },
  methods:{
      failQuestion(){
          this.questionValid=false
          this.$root.$data.score -= 100
          this.questionFailed=true
      },
      correctAnswer(){
          this.questionValid=false
          this.$root.$data.score += 100
          this.questionFailed=false
      }
  }
}
</script>


<!-- img alt="Vue logo" src="../assets/logo.png"-->



<style scoped>
.duck{
    height: 300px;
    overflow: hidden; 
}

img{
  height:100%;
}

.horse{
    height:500px;
}
.quiz{
    border:2px solid;
    width:75%;
    min-height:300px;
    margin-left:auto;
    margin-right:auto;
}


</style>