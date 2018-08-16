<template>
  <div class="list-posts">
    <div class="row" v-for="post in posts" :key="post.id">
      <h3 class="title"> {{ post.title }} </h3>
      <h5 class="id"> post id: {{ post.id }} </h5>
      <h5 class="text"> {{ post.text }} </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  }
}
</script>
