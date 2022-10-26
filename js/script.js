/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log(Vue);
// Create app
const { createApp } = Vue;

// 
const app = createApp({
    data(){
        // messaggio con collegamento all'html(<h1>)
        return {
            message: 'Capitain Jack Sparrow',
            myClass: 'red',
            myImage1:  './img/PoC1.jpg',
            myImage2:  './img/PoC2.jpg',
            myImage3:  './img/PoC3.jpg',
            myImage4:  './img/PoC4.jpg',
            myImage5:  './img/PoC5.jpg'
        }
    },

    // metodo 
    methods: {
        //Change color
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

            // image
        },
        //getPhrase 1 up to 6
        getPhrase1(){
            return 'Lo confesso. È mia intenzione requisire una di queste navi, prendere una ciurma a Tortuga, razziare, predare, saccheggiare finché le mie subdole membra cadranno';
        },
        getPhrase2(){
            return 'No! Senza la chiave non apriamo quel che si apre con la chiave che lo apre, e a quale scopo scoprire qualcosa che rimarrebbe comunque chiuso, noi, non avendo, la suddetta chiave che invece lo aprirebbe avendola?!';
        },
        getPhrase3(){
            return 'Signorine, volete gentilmente... shhh, basta. Ebbene sì, ti ho mentito. No, non ti amo. Sì, quel vestito ti ingrassa. Non sono mai stato a Bruxelles, e si pronuncia "egregio". Per inciso no, non ho conosciuto Pizarro ma adoro la sua pizza. E tutto precipita nella insignificanza alla luce del fatto che la mia nave, ancora una volta, è sparita. Comprendi?';
        },
        getPhrase4(){
            return 'Posso capire tutto... Meno la parrucca.';
        },
        getPhrase5(){
            return 'Non vado in cerca di guai! Che orribile stile di vita.';
        }
    }
});

// collegamento all'html (<div id="app">)
app.mount('#app');