
Vue.component("fiche-produit", {
  template: `<div> 
                <p class="jumbotron">{{name}} 
                    <button v-on:click="add_order(name) ">Commander</button> 
                </p>
              </div>
             `,
  props: ["name"],
  methods: {
    add_order: function (product) {
        //ecouter l'evenement order-added
      this.$emit("order-added", product);
    },
  },
});

/*
Vue.component('fiche-commande',{
    template: `<p class="paragraph">demo-commande </p>`,
})
*/

const app = new Vue({
  el: "#app",
  data: {
    price: "5000e",
    products: ["model1", "model2", "model3"],
    adds: [],
    display: "display-4",
  },
  methods: {
    add_element: function (product) {
      this.adds.push(product);
      //this.calculer(price);
    },
    remove_element: function (index) {
      //retirer l'element sélectionné du tableau
      this.adds.splice(index, 1);
    },
  },
});
