<template>
  <nav class="nav" :class="{fixed}">
    <div class="nav-container">
        <g-link to="/">
          <g-image src="~/assets/images/Logo-RG-SC.png" class="favicon" alt="Logo Personal"></g-image>
          <span class="text">Ramses Garate</span>
        </g-link>
      <div class="links">
        <g-link 
          v-for="(link, index) in links" 
          :key="index"
          :to="link.link"
        >
          {{link.name}}
        </g-link>
      </div>
      <div class="cta">
          <ToggleTheme/>
        </div>
    </div>
  </nav>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  name: 'nav-bar',
  components: {
    ToggleTheme
  },
  data() {
    return {
      fixed: false, 
      links: [
        {
          name: 'Sobre mi',
          link: '/about/'
        },
        {
          name: 'Blog',
          link: '/blog/'
        },
        {
          name: 'Contacto',
          link: '/contact/'
        }
      ]
    }
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
        if (window.scrollY > 20) {
          this.fixed = true;
        }else {
          this.fixed = false;
        }
    }
},

}
</script>

<style>

.nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    background-color: var(--bg-color);
}

.nav.fixed {
    box-shadow: 1px 2px 18px rgba(0, 0, 0, .1);
}

.nav .cta,
.nav .nav-container {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    height: 55px;
    max-width: 800px;
    margin: auto;
    justify-content: space-between;
    -webkit-transition: height .3s ease;
    transition: height .3s ease;
}

.nav-container {
    padding: 0 1.5rem;
    height: 160px;
    max-width: 800px;
    margin: auto;
    justify-content: space-between;
}

.nav a {
    display: flex;
    align-items: center;
    color: #333;
    margin-right: 0;
    font-weight: 500;
    font-size: 1.15rem;
}

.nav a .text {
    display: none;
}

.favicon {
    height: 40px;
    width: 40px;
    min-width: 40px;
    margin-right: 1rem;
    margin-bottom: 0;
}

.nav .links {
    flex-direction: row;
    justify-content: flex-end;
    flex: 1 1;
    margin: 0;
}

.nav .links,
.nav .links a {
    display: flex;
    align-items: center;
}

.nav .links a {
    font-size: 1.05rem;
    font-weight: 600;
    padding: .75rem;
    margin: 0 .25rem;
    color: rgba(0, 0, 0, .6);
    line-height: 1.2;
    text-align: center;
    border-radius: 6px;
    transition: none 200ms ease-out;
    transition-property: color, background;
}

.nav .links a.active,
.nav .links a:active,
.nav .links a:hover {
    color: rgb(7, 94, 255);
    background: rgba(18, 93, 255, 0.1);
}

button.toggle-theme {
    border: 0;
    margin: 0;
    padding: .75rem .5rem;
    background: transparent;
}

@media (min-width: 620px) {
    .nav.fixed .nav-container {
        height: 60px;
    }
    .nav .nav-container {
        height: 160px;
        padding: 0 2rem;
    }
    .nav a .text {
        display: inline-block;
    }
    .nav .links {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 100%;
    }
    .nav .links a {
        margin: 0 .5rem;
        padding: 0.75rem 1rem;
        border-bottom: 2px solid transparent;
    }
    .nav button.toggle-theme {
        margin: 0;
        font-size: 1.4rem;
        padding: .75rem 1rem;
    }
}
</style>