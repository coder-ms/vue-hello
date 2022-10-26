/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log(Vue);
const { createApp } = Vue;

// 
const app = createApp({
    data(){
        // messaggio con collegamento all'html(<h1>)
        return {
            message: 'Capitain Jack Sparrow',
            myClass: 'red',
            myImage:  ''
        }
    },

    // metodo Change color
    methods: {
        changeColor() {
            // metodo 1
            this.myClass = this.myClass === 'red' ? 'blue' : 'red';

            // metodo 2
            /*
            if(this.myClass === 'red'){
                this.myClass = 'blue';
            }
            else{
                this.myClass = 'red';
            }
            */
        },
    }
});

// collegamento all'html (<div id="app">)
app.mount('#app');