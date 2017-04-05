<template>
    <div>
        <h1>The current number is <span class="counter">{{ counter }}</span></h1>
        <el-button type="primary" @click="add">+</el-button>
        <el-button @click="sub">-</el-button>
        <h2>从store中拿出的number：<span class="counter">{{ count }}</span></h2>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'counter',
    data() {
        return {
            counter: 0
        }
    },
    computed: {
       ...mapGetters(['count']),
    },
    methods: {
        add() {
            this.counter++;
        },
        sub() {
            this.counter--;
        }
        
    },
    mounted() {
        
    }
}
</script>

<style>
.counter {
    color: #f00;
}
</style>