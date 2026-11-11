<template>
  <div class="home">
    <HeaderComponent />
    <div class="posts">
      <article class="post" v-for="post in postList" :key="post.id">
        <p>{{ post.text }}</p>
      </article>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
  },
  data: function() {
    return {
  }},
  computed: {
    postList(){
      return this.$store.state.postList
  }}
}
</script>
