/*
Vue.component('fiche-produit',{
    template:`<p class="paragraph">demo-produit</p>`,
}),

Vue.component('fiche-commande',{
    template: `<p class="paragraph">demo-commande </p>`,
})
*/

const app = new Vue( {
    el: "#app",
    data: {
        price: "5000e",
        products: ["model1", "model2", "model3"],
        adds: [],
    },
    methods:{
        addElement: function(product){
            console.log(product)
            this.adds.push(product);
            this.calculer(price)
        },
        removeElement: function(index){
           //retirer l'element sélectionné du tableau 
           this.adds.splice(index, 1);
        }
    }
})