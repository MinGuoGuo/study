<template>
    <div>
        <h1>The current number is <span>{{ counter }}</span></h1>
        <el-button type="primary">+</el-button>
        <el-button>-</el-button>
    </div>
</template>
<script>
export default {
    name: 'counter',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        conso() {
            console.log(this.$store);
        }
    }, 
    mounted() {
        console.log(this.$store);
    }
}
</script>