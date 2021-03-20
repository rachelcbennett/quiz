<template>
  <div class="q3">
    
    <h1> YOUR SCORE: {{score}}</h1>
    <div class='quiz'>
        <h1> The correct answer to this question is {{realAnswer}}. </h1>
        <div v-if="questionValid">

            
            <button @click ="failQuestion()">  A: {{A_answer}}</button>
            <button @click="correctAnswer()">  B: {{B_answer}}</button>
            <button @click ="failQuestion()">  C: {{C_answer}}</button>
            <button @click ="failQuestion()">  D: {{D_answer}}</button>
        </div>
        <div v-else>
            <div v-if="questionFailed">
                <h1> WRONG </h1>

                <router-link to="/q5">Next Question</router-link>
            </div>
            <div v-else>
                <h1> CORRECT!</h1>

                <router-link to="/q5">Next Question</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Q3',
  components: {
  },
  data(){
      return {
          realAnswer: 'A',
          questionValid: true,
          questionFailed: false,
          q5_word: 'Vue',
          A_answer: 'Duck',
          B_answer: 'Horse',
          C_answer: 'Pig',
          D_answer: 'Cow',
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
          this.realAnswer='B'
      },
      correctAnswer(){
          this.questionValid=false
          this.$root.$data.score += 100
          this.questionFailed=false
          this.realAnswer='B'
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