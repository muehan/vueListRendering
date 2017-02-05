<template>
  <div class="container">
      <div class="col-md-4">
          <item v-for="item in items" :item="item" v-bind:removeItem="removeItem" />
      </div>
  </div>
</template>

<script>
    import Item from './Item'

    export default {
        name: 'screen',
        data() {
            return {
                items: [{
                    key: "1",
                    text: "asdfasdf"
                }, {
                    key: "2",
                    text: "lore ipsum"
                }, {
                    key: "3",
                    text: "qwertz"
                }, {
                    key: "4",
                    text: "sdfgdfgsdfg"
                }, {
                    key: "5",
                    text: "dfg gaertgsd"
                }, {
                    key: "6",
                    text: "fhh5 stg egbv erg"
                }]
            }
        },
        methods: {
            removeItem(itemToRemove) {
                this.items = this.items.filter((i) => {
                    return i.key !== itemToRemove.key
                });
            },
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