<template>
    <div class="jumbotron">
        <p>{{item.key}}</p>
        <p>{{item.text}}</p>
        <button class="btn btn-primary" @click="remove">Remove</button>
    </div>
</template>

<script>
    export default {
        name: 'item',
        props: ['item'],
        data() {
            return {

            }
        },
        methods: {
            remove() {
                this.$store.dispatch('removeItem', this.item);
            }
        },
    }
</script>