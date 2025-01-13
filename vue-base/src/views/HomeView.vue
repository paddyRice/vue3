<template>
            <button @click="gobang">扫光</button>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter()
// let funList = reactive([
//     {type:'五子棋',url:'/gobang'},
//     {type:'扫光',url:'/ray'},
// ])
function gobang(){
    router.push('/gobang');
}
</script>
<style scoped >
</style>