function numberToHex(number){
  const r = parseFloat(number).toString(16)

  return (r.length ===1) ? `0${r}` : r; 
}

var app = new Vue({
  el: '#app',
  data: {

    // Links site & Repo
    links: {
      site: "https://cedricbeau.pro/",
      siteTitle: "Lien vers mon site perso",
      repo: "https://github.com/cedricbeau/rgba-playground",
      repoTitle: "Lien vers le repo GitHub du projet",
    },

    r: 100,
    g: 100,
    b: 255,
    a: 1,

    // rgba: 'rgba(100, 100, 255, 1)',
    // rgbValue: 'rgba(100, 100, 255, 1)',

    // Selectors
    selectors: [
      {
        id: 1,
        name: 'Red (Rojo)',
        model: 'r',
        defaultValue: 100,
        valueMin: 0,
        valueMax: 255,
        step: 1
      },
      {
        id: 2,
        model: 'g',
        name: 'Green (Verde)',
        defaultValue: 100,
        valueMin: 0,
        valueMax: 255,
        step: 1
      },
      {
        id: 3,
        name: 'Blue (Azul)',
        model: 'b',
        defaultValue: 250,
        valueMin: 0,
        valueMax: 255,
        step: 1
      },
      {
        id: 4,
        name: 'Alpha (Transparencia)',
        defaultValue: 1,
        model: 'a',
        valueMin: 0,
        valueMax: 1,
        step: 0.01
      }
    ]
  },

  computed: {
    rgba(){
      const {r,g,b,a} = this;
      return `rgba(${r},${g},${b},${a})`
    },
    rgb(){
      const {r,g,b,a} = this;
      return `rgb(${r},${g},${b})`
    },
    hex(){
      const {r,g,b,a} = this;
      console.log(numberToHex(r))
      return `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`
    },
    hex2(){
      const {r,g,b,a} = this;
      return `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}${numberToHex(a*255).split('.')[0]}`

    },
    
    
  }
});
