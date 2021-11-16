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
        produits: ["model1", "model2", "model3"],
        commandes: [],
    },
    methods:{
        commander: function(produit){
            console.log(produit)
            this.commandes.push(produit);
        }
    }
    
})