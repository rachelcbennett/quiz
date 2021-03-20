<template>
  <div class="leaderboard">
    <h1> <router-link to="/leaderboard">Back to the Leaderboard</router-link></h1>
    <NonFriendList :friends="new_friends"  />
  
  </div>

    
</template>

<script>
// @ is an alias to /src<CartList :products="cart" />


import NonFriendList from "../components/NonFriendList.vue"

export default {
  name: 'newfriends',
  components: {
      NonFriendList
  },
  computed:{
      new_friends(){
          return this.$root.$data.non_friends.slice(0).sort((a,b) =>Number(a.avg_score) >Number(b.avg_score) ? -1 : 1);
      }
  },
}
</script>


<!-- img alt="Vue logo" src="../assets/logo.png"-->

