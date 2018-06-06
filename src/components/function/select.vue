<template>
    <div>
        <!--@change='changeType'-->
        <!--select的model和option的value保持一致-->
        <span class="SelectName">选择打牌倍数：</span>
        <select v-model="landowner" class="select">
            <option v-for="user in users" v-bind:value="user.id">
                {{ user.name }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "result",
        data() {
            return {
                users: [
                    { id: 1, name: '5' },
                    { id: 2, name: '10' },
                    { id: 3, name: '15' },
                    { id: 4, name: '20' }
                ]
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .SelectName{
        font-size:1.5rem;
        font-weight: bold;
    }
    .select{
        width: 50%;
        height: 3rem;
        border: 0.1rem solid #2B94FF;
        border-radius: 0.3rem;
    }
</style>
