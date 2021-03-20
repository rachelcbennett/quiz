<template>
    <div class="wrapper">
        
        <div class="friends" v-for="friend in friends" :key="friend.id">
        <div class="info">
            <h2>{{friend.first_name}} {{friend.last_name}} <button @click="addFriend(friend)"> ADD FRIEND</button></h2>
            <h2>Bio: I {{friend.bio}} at {{friend.company}}</h2>
        </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'FriendList',
    props: {
        friends: Array
    },
    methods:{
        addFriend(friend){
            this.$root.$data.friends.push(friend)
            this.$root.$data.non_friends.splice(this.$root.$data.non_friends.indexOf(friend),1)
        }
    },
}
</script>


<style scoped>
h2{
    text-align:left;
}

.info{
    border:0.5px solid;
    
    border-width:thick;
    border-color: rgb(2, 3, 3);
    margin:10px;
    padding:10px;
}
</style>