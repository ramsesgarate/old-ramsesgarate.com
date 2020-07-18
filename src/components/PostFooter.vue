<template>
  <div class="post-footer">
    <div class="post-footer-meta">
      <link-edit-page :edit-link="editLink"/>
      <post-tags :tags="$page.post.tags" />
    </div>
    <post-nav-footer :previous-page="previousPage" :next-page="nextPage"/>
  </div>
</template>

<script>
import LinkEditPage from '~/components/LinkEditPage'
import PostNavFooter from '~/components/PostNavFooter'
import PostTags from '~/components/PostTags'

export default {
  props: {
    editLink: {
      type: String
    },
    tags: {
      type: Array
    },
    previousPage: {
      type: Object
    },
    nextPage: {
      type: Object
    }
  },
  components: {
    LinkEditPage,
    PostTags,
    PostNavFooter
  }
  

}
</script>

<style lang="scss">
@import '~/assets/style/base/variables.scss';

.post-footer {
    margin-top: 2rem;
}
.post-footer-meta {
    border-bottom: 1px solid rgb(187, 187, 187);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & .post-tags {
        order: 1;
    }
    & .post-tags,
    & .link-edit-page{
        margin-bottom: 1rem;
    }
}

@include phablet-breakpoint {
    .post-footer {
        margin-top: 2.5rem;
    }
    .post-footer-meta {
        & .post-tags {
            order: -1;
        }
        & .post-tags,
        & .link-edit-page{
            margin-bottom: 2rem;
        }
    }
}

</style>