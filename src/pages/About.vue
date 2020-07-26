<template>
  <Layout>
      <h1>Sobre mi</h1>
      <h2>Hola a todos 👋</h2>
      <p>
        Mi nombre es Ramses Garate y tengo 23 años, mi camino en la programación empezó en el año 2016, aprendiendo C y un poco de Python en el ramo de algoritmo y programación de la universidad, sin embargo, no fue sino el año pasado (2019) que le empecé a dedicar más tiempo a la programación, hasta que finalmente me terminó encantando. Actualmente trabajo a tiempo completo como desarrollador en la Startup <a href="https://awto.cl/" target="_blank" rel="noopener noreferrer">Awto</a>.
      </p>
      <g-image
        src="~/assets/images/caricatura-rg.png" 
        blur="5"
        alt="Caricatura Ramses Garate" 
        class="caricature img-responsive"></g-image>
      <lazy-component>
        <p>
          Nací y crecí en Venezuela, pero a finales del año 2018 me mudé a Chile, mi lenguaje de programación favorito es JavaScript y el framework de JS es VueJS. La programación es interesante, cada año surgen nuevas tecnologías, nuevos lenguajes de programación, nuevas posibilidades, etc..., esto causa que siempre nos mantengamos en constante aprendizaje.
        </p>
      </lazy-component>

      <h2>Motivación para esta web</h2>

      <lazy-component>
        <p>Me suele pasar que estoy aprendiendo algo nuevo y casi siempre tengo que recurrir a buscar en inglés, me arriesgaría a decir que hay muchos más recursos en este idioma, si consigues algo bueno en español, es pago 😕, no estoy hablando de 10$, estoy hablando de más de 500$, no está mal cobrar por eso, son tus horas de trabajo y tu esfuerzo, pero no todos tienen para pagarlo y no todos saben inglés, por eso me motive a crear este espacio en la web, para ir compartiendo mis conocimientos y las cosas que estoy aprendiendo.</p> 
      </lazy-component>
      <lazy-component>
        <p>No soy un desarrollador con 20 años de experiencia, tampoco me considero un desarrollador Senior, pero cuando se está aprendiendo desarrollo web las personas suelen tropezarse con la misma piedra, así que porque no ayudar al desarrollador que quiere saber más o ese que quiere mejorar sus habilidades.</p>
      </lazy-component>
      
      <h2>Mis habilidades</h2>
      <p>Realmente, no se todo sobre estas tecnologías, pero tengo una base y sé que con el tiempo voy a ir mejorándolas:</p>
      <lazy-component>
        <div class="row">
          <div 
            class="col-2 col-1-of-4 languages" 
            v-for="(language, index) in languages" 
            :key="index">
            <p><span>o</span>{{language.text}}</p>
          </div>
        </div>
      </lazy-component>

      <h2>Construyamos algo juntos</h2>
      <lazy-component>
        <p>No dude en comunicarse si está buscando un desarrollador, tiene una pregunta o simplemente desea conectarse <a  href="mailto:rsgarate@gmail.com">rsgarate@gmail.com</a>.</p>
      </lazy-component>
      
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },
  data() {
    return {
      languages: [
        {
          icon: '',
          text: 'HTML'
        },
        {
          icon: 'images/icons/icons8-css3-100.png',
          text: 'CSS'
        },
        {
          icon: 'images/icons/icons8-sass-100.png',
          text: 'Sass'
        },
        {
          icon: 'images/icons/icons8-javascript-100.png',
          text: 'JavaScript'
        },
        {
          icon: 'images/icons/icons8-vue-js-100.png',
          text: 'Vue'
        },
        {
          icon: 'images/icons/icons8-git-100.png',
          text: 'Git'
        },
        {
          icon: 'images/icons/icons8-logo-de-mysql-100.png',
          text: 'MySql'
        }
      ]
    }
  },
  metaInfo: {
    titleTemplate: 'Sobre mi - %s'
  }
}
</script>

<style lang="scss">
@import '~/assets/style/base/grid.scss';

.caricature {
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 350px;
}
.languages p {
  font-weight: 700;
  span {
    color: #275EFE;
    font-size: 20px;
    margin-right: 6px;
  }
  
}
</style>