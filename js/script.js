const appVue = new Vue(
  {
    el: '#container',
    data: {
      cr_top: 'cr_arrows_top',
      cr_bottom: 'cr_arrows_bottom',

      crItem: 'cr_item',

      crActive: 'cr_active',

      cambiaImmagine: 2,

      itemg: 'item_g',

      itemss: [
        {
          immagine:'img/01.jpg',
          stato:'Svezia',
          descrizione:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        },
        {
          immagine:'img/02.jpg',
          stato:'Svizzera',
          descrizione:'Lorem ipsum',
        },
        {
          immagine:'img/03.jpg',
          stato:'Gran Bretagna',
          descrizione:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          immagine:'img/04.jpg',
          stato:'Germania',
          descrizione:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        },
        {
          immagine:'img/05.jpg',
          stato:'Paradise',
          descrizione:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        }
      ],
    },

    methods: {
      imgSu: function () {
        this.crItem
      },

      imgGiu: function () {
      }
    }
  }
)
console.log("🚀 ~ file: script.js ~ line 6 ~ appVue", appVue)
