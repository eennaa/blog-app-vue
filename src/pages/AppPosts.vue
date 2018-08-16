<template>
  <div>
    <list-posts :posts="posts"> </list-posts>
  </div>
</template>

<script>
import ListPosts from '../components/ListPosts.vue'
import { posts } from '../services/PostsService.js'

export default {
  components: {
    ListPosts
  },

  data() {
    return {
      posts: []
    }
  }
}
</script>

