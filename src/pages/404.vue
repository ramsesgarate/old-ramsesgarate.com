<template>
  <div class="page-404">
    <g-image src="~/assets/images/icons8-darth-vader-480.png" blur="5" width="300" alt="Dart Vader"></g-image>
    <h3>&lt;404-ERROR/&gt;</h3>
    <h4>Subestimas el poder del lado oscuro</h4>
    <Button to="/" dark>Regresar al Inicio</Button>
  </div>
</template>

<script>
import Button from "~/components/Button"
export default {
  components: {
    Button
  },
  metaInfo: {
    titleTemplate: 'Page Not Found - %s'
  }
}
</script>

<style lang="scss">
.page-404 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #282936;
  

  & h3 {
    margin-bottom: 10px;
    color: #50fa7b !important;
  }
  & h4 {
    margin-top: 10px;
    margin-bottom: 2rem;
    color: #50fa7b !important;
  }
  .button-dark {
    background-color: #ff79c6;
  }

}
</style>