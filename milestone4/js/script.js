const root = new Vue({

  el: '#root',

  data: {

    userMe: {
      name: 'Nome Utente',
      avatar: 'img/avatar_io.jpg',
    },

    welcome: {
      bg: 'phone.jpg',
      phrase: 'Keep your phone connected',
    },

    contacts: [
      {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages: [
          {
            date: '15:30:55 10/01/2020 ',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '15:50:00 10/01/2020 ',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '16:15:22 10/01/2020 ',
            message: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        visible: true,
        messages: [
          {
            date: '16:30:00 20/03/2020 ',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '16:30:55 20/03/2020 ',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'sent'
          },
          {
            date: '16:35:00 20/03/2020 ',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: 'img/avatar_3.jpg',
        visible: true,
        messages: [
          {
            date: '10:10:40 28/03/2020 ',
            message: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '10:20:10 28/03/2020 ',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '16:15:22 28/03/2020 ',
            message: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: 'img/avatar_6.jpg',
        visible: true,
        messages: [
          {
            date: '15:30:55 10/01/2020 ',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '15:50:00 10/01/2020 ',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Angela',
        avatar: 'img/avatar_io.jpg',
        visible: true,
        messages: [
          {
            date: '15:30:55 10/01/2020 ',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '15:50:00 10/01/2020 ',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '16:15:22 10/01/2020 ',
            message: 'Tutto fatto!',
            status: 'received'
          },
        ],
      },
      {
        name: 'Lino',
        avatar: 'img/avatar_8.jpg',
        visible: true,
        messages: [
          {
            date: '16:30:00 20/03/2020 ',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '16:30:55 20/03/2020 ',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'sent'
          },
          {
            ddate: '16:35:00 20/03/2020 ',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          },
        ],
      },
      {
        name: 'Patrizio',
        avatar: 'img/avatar_4.jpg',
        visible: true,
        messages: [
          {
            date: '15:30:55 10/01/2020 ',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '15:50:00 10/01/2020 ',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          },
        ],
      },
      {
        name: 'Simone',
        avatar: 'img/avatar_7.jpg',
        visible: true,
        messages: [
          {
            date: '15:30:55 10/01/2020 ',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '15:50:00 10/01/2020 ',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '16:15:22 10/01/2020 ',
            message: 'Tutto fatto!',
            status: 'received'
          },
        ],
      },
      {
        name: 'Matteo',
        avatar: 'img/avatar_5.jpg',
        visible: true,
        messages: [
          {
            date: '16:30:00 20/03/2020 ',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '16:30:55 20/03/2020 ',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'sent'
          },
          {
            date: '16:35:00 20/03/2020 ',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          },
        ],
      },
    ],

    indexItem: -1,
    isActive: true,
    newStr: '',
    value: '',
  },

  methods: {
    showIndex(index){
      this.indexItem = index;
    },

    addText( ){
      let message = this.contacts[this.indexItem].messages;

      if(this.newStr.length === 0 || !this.newStr.trim().length){
        return
      }

      message.push({
        date: this.getDate(),
        message: this.newStr,
        status: 'sent',
      });
      
      this.newStr= '';
      this.answerOk();
    },

    answerOk(){
      let message = this.contacts[this.indexItem].messages;
      let dateTime = this.getDate();

      setTimeout(function() {
        message.push({
        date: dateTime,
        message: 'Ok',
        status: 'received'
      });
      }, 3000);
    },

    lastMessage(index){
      let messageLast = this.contacts[index].messages[this.contacts[index].messages.length -1].message;
      messageLast = messageLast.slice(0,12)+'...';
      // console.log(messageLast);
      
      return messageLast;
    },

    getDate(){
      let today = new Date().toLocaleDateString();
      let now = new Date().toLocaleTimeString();

      let date = now + ' ' + today;
      return date;
    },

    searchContact(){
      //console.log(this.value);
      this.contacts.forEach(contact => { 
              
        if (contact.name.toLowerCase().includes(this.value.toLowerCase())){
          contact.visible = true;
          console.log('bbbbbbbbb',this.value);
        } else {
          contact.visible = false;
          console.log('cccccccc',this.value);
        }
      });
    },
      
  },
  
});
