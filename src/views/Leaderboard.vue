<template>
  <div class="leaderboard">
    
    
    <h1> Friends Leaderboard</h1>
    <h1> Want more friends? You can add them <router-link to="/newfriends">here!</router-link></h1>
    
    <FriendList :friends="friends"  />
  
  </div>

    
</template>

<script>
// @ is an alias to /src<CartList :products="cart" />


import FriendList from "../components/FriendList.vue"

export default {
  name: 'Leaderboard',
  components: {
      FriendList
  },
  computed:{
      friends() {
        return this.$root.$data.friends.slice(0).sort((a,b) =>Number(a.avg_score) >Number(b.avg_score) ? -1 : 1);
    },
      new_friends(){
          return this.$root.$data.friends.slice(0).sort((a,b) =>Number(a.avg_score) >Number(b.avg_score) ? -1 : 1);
      }
  },
}
</script>


<!-- img alt="Vue logo" src="../assets/logo.png"-->
