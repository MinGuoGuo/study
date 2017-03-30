<template>
    <div>
        <h1>The current number is <span class="counter">{{ count }}</span></h1>
        <el-button type="primary" @click="add">+</el-button>
        <el-button @click="sub">-</el-button>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'counter',
    data() {
        return {
            // counter: 0
        }
    },
    computed: {
        ...mapGetters(['count']),
        // count() {
        //     return this.$store.state.counter.count
        // }
    },
    methods: {
        ...mapActions(['ADD', 'SUB']),
        add() {
            // this.$store.dispatch('ADD', {num: 5});
            this.ADD({num: 5});
        },
        sub() {
            // this.$store.dispatch('SUB');
            this,SUB();
        }
        
    }, 
    mounted() {
        console.log(this.$store.state)
    }
}
</script>

<style>
.counter {
    color: #f00;
}
</style>