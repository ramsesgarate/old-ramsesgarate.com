<template>
  <div class="bg-gray-900">
    <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-screen-lg">
      <div class="flex justify-between pt-12 flex-col sm:flex-row">
        <div
          class="w-full lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0 flex flex-col justify-center mr-4"
        >
          <h1 class="text-3xl font-medium tracking-normal leading-tight mb-2">
            ¡Hola a todos <span class="wave">👋</span>!
          </h1>
          <h2 class="text-4xl mb-6">
            Soy <span class="italic text-teal-400">Ramses Garate</span>
          </h2>

          <p
            class="text-base font-normal leading-relaxed mb-6 text-grey-200 border-l-2 border-teal-600 pl-3 italic"
          >
            Desarrollador FrontEnd con sede en Chile, personalmente soy un gran
            admirador de Vue.js y su ecosistema. Este sitio web es mi jardín
            digital, un compendio de las cosas que he aprendido y estoy
            aprendiendo.
          </p>
        </div>
        <div
          class="w-full lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0 flex justify-center items-center mx-auto my-auto"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }

  30% {
    transform: rotate(14deg);
  }

  40% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}
</style>
