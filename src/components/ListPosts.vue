<template>
  <div class="list-posts">
    <div v-for="post in posts" :key="post.id">
      <h3 class="title"> {{ post.title }} </h3>
      <router-link :to="{ name: 'single-post', params: { id: post.id} }">View Post</router-link> 
      <h5 class="id"> post id: {{ post.id }} </h5>
      <h5 class="text"> {{ post.text }} </h5>
      <h5 class="createdAt">{{ post.createdAt }}</h5>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array  //// Ispravan nacin da se pisu props
  }
}
</script>
