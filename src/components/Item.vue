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
        props: ['item', 'removeItem'],
        data() {
            return {

            }
        },
        methods: {
            remove() {
                this.removeItem(this.item);
            }
        },
    }
</script>