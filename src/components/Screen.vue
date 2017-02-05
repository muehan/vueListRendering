<template>
  <div class="container">
      <div class="col-md-4">
          <item v-for="item in items" :item="item" />
      </div>
  </div>
</template>

<script>
    import Item from './Item'

    export default {
        name: 'screen',
        data() {
            return {
                itemsToStore: [{
                    key: 1,
                    text: "test1"
                }, {
                    key: 2,
                    text: "test2"
                }, {
                    key: 3,
                    text: "test3"
                }, {
                    key: 4,
                    text: "test4"
                }, {
                    key: 5,
                    text: "test5"
                }, {
                    key: 6,
                    text: "test6"
                }, ]
            }
        },
        methods: {

        },
        computed: {
            items() {
                return this.$store.getters.items;
            }
        },
        created() {
            this.$store.dispatch('addItems', this.itemsToStore)
        },
        components: {
            Item
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        margin-top: 25px;
    }
</style>