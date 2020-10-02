/**/
$( document ).ready(function() {
    vue();
});
/* */

function vue(){
    vuecomponents();
    new Vue({
        el: '#app',
        methods:{
            searchit(text){
                alert("Ara:",text);
            },
            inputevent(text){
                alert("Change:",text);
            }
        }
    });
}
function vuecomponents(){
    Vue.component('Searchbox', {
      template: `<div class="searchbox">
      <input type="text" class="searchinput" v-model="searchinput" :placeholder="placeholder" @change="inputevent(searchinput)"/>
      <button v-if="showbutton" class="searchbutton" @click="buttonevent(searchinput)">{{buttontext}}</button>
  </div>`,
      data(){
          return{
            searchinput: '',
          }
      },   
      props:{
        showbutton:{
            type: Boolean,
            default: true
        },
        buttontext:{
            type: String,
            default: 'Search'
        },
        placeholder:{
            type: String,
            default: 'Search'
        },
        buttonevent:{
            type: Function
        },
        inputevent:{
            type: Function
        }
      },
  })   
}