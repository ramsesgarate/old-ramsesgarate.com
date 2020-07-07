<template>
  <Layout>
    <section class="">
      <div class="post-header">
        <h1>
          {{ $page.post.title }}
        </h1>
        <div class="info-post">
          <div class="author-avatar">
            <g-link to="/" class="avatar">
              <div class="wrapper-avatar">
                <svg width="57" height="57" viewBox="0 0 57 57"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 1.2A27.45 27.45 0 0 0 4.06 15.82L3 15.27A28.65 28.65 0 0 1 28.5 0C39.64 0 49.29 6.2 54 15.27l-1.06.55A27.45 27.45 0 0 0 28.5 1.2zM4.06 41.18A27.45 27.45 0 0 0 28.5 55.8a27.45 27.45 0 0 0 24.44-14.62l1.06.55A28.65 28.65 0 0 1 28.5 57 28.65 28.65 0 0 1 3 41.73l1.06-.55z"></path></svg>
              </div>
              <g-image src=""></g-image>
            </g-link>
          </div>
          <div class="info-data">
            <p>Ramses Garate</p>
            <span class="meta-post">
              <span class="date">Publicado 7 Diciembre 2019.</span>
              <span class="time-lecture"> 3 min de lectura</span>
            </span>
          </div>
        </div>
      </div>

      <div class="post content-box">
        <div class="post__header">
          <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
        </div>

        <div class="post__content" v-html="$page.post.content" />

        <PostTags :tags="$page.post.tags" />
      </div>

    </section>
    

  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY" locale: "es-ES")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-header {
  margin-bottom: 1rem;
}
.post-header h1 {
  margin-bottom: 14px;
  font-size: 2rem;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }
    ul, ol{
    margin-left: 1.2rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.55rem;
    list-style-position: outside;
    list-style-image: none;
    }
    p:first-of-type {
      font-size: 1rem;
      color: var(--title-color);
    }

    img {
      width: 100%;
      display: block;
      max-width: none;
    }
  }
}

.info-post{
  display: flex;
  padding: 10px 0 20px 0;
  align-items: center;
  color: #495057;
  font-size: .85rem;
}

.avatar img {
  width: 48px;
  height: 48px;
  background-color: gray;
  border-radius: 50%;
  vertical-align: middle;
}

.avatar{
  position: relative;
  height: 48px;
  width: 48px;
  margin-right: 20px;
}

.wrapper-avatar {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%) translateY(-47%);
}

svg {
  vertical-align: middle;
}

.info-data p{
  margin-bottom: 0;
}

.meta-post {
  display: flex;
  flex-wrap: wrap;
}
span.date {
  margin-right: 16px;
}

span.time-lecture {
  font-weight: 700;
}

</style>
