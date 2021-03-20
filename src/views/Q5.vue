<template>
  <div class="q5">
    
    <h1> YOUR SCORE: {{score}}</h1>
    <div class='quiz'>
        <div v-if="questionValid">
            <h1> How many letters in {{q5_word}} </h1>
            <button @click ="failQuestion()">  A: {{A_answer}}</button>
            <button @click="correctAnswer()">  B: {{B_answer}}</button>
            <button @click ="failQuestion()">  C: {{C_answer}}</button>
            <button @click ="failQuestion()">  D: {{D_answer}}</button>
        </div>
        <div v-else>
            <div v-if="questionFailed">
                <h1> WRONG </h1>
                <router-link to="/score">GET YOUR SCORE</router-link>
            </div>
            <div v-else>
                <h1> CORRECT </h1>
                <router-link  to="/score">GET YOUR SCORE</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Q5',
  components: {
  },
  data(){
      return {
          questionValid: true,
          questionFailed: false,
          q5_word: 'Vue',
          A_answer: 4,
          B_answer: 3,
          C_answer: 5,
          D_answer: 2,
      }
  },
  mounted(){
      this.$nextTick(function(){
          window.setInterval(() => {
            this.q5_word += 'e'
            this.A_answer+=1
            this.B_answer+=1
            this.C_answer+=1
            this.D_answer+=1
        },100);
          
      })
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

          this.calcscore()
      },
      correctAnswer(){
          this.questionValid=false
          this.questionFailed=false
          this.$root.$data.score += 100

          this.calcscore()
      },
      calcscore(){
          this.$root.$data.attempts+=1
          this.$root.$data.average_score = (this.$root.$data.average_score + this.$root.$data.score)/ this.$root.$data.attempts
          this.$root.$data.friends[this.$root.$data.friends.length -1].avg_score = this.$root.$data.average_score
      }
  }
}
</script>


<style scoped>

.quiz{
    border:2px solid;
    width:75%;
    min-height:300px;
    margin-left:auto;
    margin-right:auto;
}


</style>


<!-- img alt="Vue logo" src="../assets/logo.png"-->
