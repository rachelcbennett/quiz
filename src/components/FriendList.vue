<template>
    <div class="wrapper">
        
        <div class="friends" v-for="friend in friends" :key="friend.id">

        <div v-if="self(friend)">
            <div class="info">
                <h2 class="self"> {{friend.name}} </h2>
                <h2 class= "self"> Average Score: {{getScore}} </h2>
            </div>
        </div>
        <div v-else>
        <div class="info">
            <h2>{{friend.first_name}} {{friend.last_name}} <button @click="deleteFriend(friend)"> X</button></h2>
            <h2> Average Score: {{friend.avg_score}} </h2>
        </div>
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
        deleteFriend(friend){
            this.$root.$data.friends.splice(this.$root.$data.friends.indexOf(friend),1); 
        },
        self(friend){
            if (friend.id  ===-100){
                return true;
            }
        }
    },
    computed:{
        getScore: function(){
            return this.$root.$data.average_score
        }
    }

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

.self{
    color:rgb(144, 10, 161);
}
</style>