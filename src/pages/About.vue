<template>
  <Layout>
      <h1>Sobre mi</h1>
      <h2>Hola a todos 👋</h2>
      <p>
        Mi nombre es Ramses Garate y tengo 23 años, mi camino en la programación empezó en el año 2016, aprendiendo C y un poco de Python en el ramo de algoritmo y programación de la universidad, sin embargo, no fue sino el año pasado (2019) que le empecé a dedicar más tiempo a la programación, hasta que finalmente me terminó encantando. Actualmente trabajo a tiempo completo como desarrollador en la Startup <a href="https://awto.cl/" target="_blank" rel="noopener noreferrer">Awto</a>.
      </p>
      <div class="mx-auto">
        <g-image src="~/assets/images/caricatura-rg-350x350.png" alt="Caricatura Ramses Garate"></g-image>
      </div>
      <p>
        Nací y crecí en Venezuela, pero a finales del año 2018 me mudé a Chile, mi lenguaje de programación favorito es JavaScript y el framework de JS es VueJS. La programación es interesante, cada año surgen nuevas tecnologías, nuevos lenguajes de programación, nuevas posibilidades, etc..., esto causa que siempre nos mantengamos en constante aprendizaje.
      </p>

      <h2>Motivación para esta web</h2>

      <p>Me suele pasar que estoy aprendiendo algo nuevo y casi siempre tengo que recurrir a buscar en inglés, me arriesgaría a decir que hay muchos más recursos en este idioma, si consigues algo bueno en español, es pago 😕, no estoy hablando de 10$, estoy hablando de más de 500$, no está mal cobrar por eso, son tus horas de trabajo y tu esfuerzo, pero no todos tienen para pagarlo y no todos saben inglés, por eso me motive a crear este espacio en la web, para ir compartiendo mis conocimientos y las cosas que estoy aprendiendo.</p> 
      <p>No soy un desarrollador con 20 años de experiencia, tampoco me considero un desarrollador Senior, pero cuando se está aprendiendo desarrollo web las personas suelen tropezarse con la misma piedra, así que porque no ayudar al desarrollador que quiere saber más o ese que quiere mejorar sus habilidades.</p>
      
      <h2>Mis habilidades</h2>
      <p>Realmente, no se todo sobre estas tecnologías, pero tengo una base y sé que con el tiempo voy a ir mejorándolas:</p>
      <div class="row grid--gutters py-2">
        <div class="col-2 col-1-of-5" v-for="(language, index) in languages" :key="index">
          <div class="target">
            <g-image :src="require(`!!assets-loader!@images/${language.icon}`)" :alt="language.text"></g-image>
            <p>{{language.text}}</p>
          </div>
        </div>
      </div>

      <h2>Construyamos algo juntos</h2>
      <p>No dude en comunicarse si está buscando un desarrollador, tiene una pregunta o simplemente desea conectarse <a  href="mailto:rsgarate@gmail.com">rsgarate@gmail.com</a>.</p>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          icon: 'icons/icons8-html-5-50.png',
          text: 'HTML'
        },
        {
          icon: 'icons/icons8-css3-50.png',
          text: 'CSS'
        },
        {
          icon: 'icons/icons8-sass-50.png',
          text: 'Sass'
        },
        {
          icon: 'icons/icons8-javascript-50.png',
          text: 'JavaScript'
        },
        {
          icon: 'icons/icons8-vue-js-50.png',
          text: 'VueJS'
        }
      ]
    }
  },
  metaInfo: {
    titleTemplate: 'Sobre mi - %s'
  }
}
</script>