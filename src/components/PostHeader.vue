<template>
  <div class="post-header text-center">
    <h1>
      {{ title }}
    </h1>
    <div class="post-info">
      <p>Ramses Garate</p>
      <post-meta 
        :date="date"
        :time-to-read="timeToRead"
      />
      <g-image 
        alt="Cover image" 
        v-if="coverImage" 
        :src="coverImage"
        quality="100"
      />
    </div>
  </div>
</template>

<script>
import PostMeta from './PostMeta'

export default {
  components: {
    PostMeta
  },
  props: {
    title: {
      type: String
    },
    date: {
      type: String
    },
    timeToRead: {
      type: Number
    },
    coverImage: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/base/variables.scss';

.post-header {
  margin-bottom: 2rem;
  & h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  & img {
    margin-top: 1rem;
    width: 100%;
  }
}

.post-info {
  & p {
    margin: 0;
  }
}
.post-meta {
  display: flex;
  justify-content: center;
  & .dot {
    margin: 0 8px;
  }
}

@include phablet-breakpoint {
    .post-header {
      & h1 {
        font-size: 2.5rem;
      }
    }
}

</style>