<template>
  <div class="home">
    <HeaderComponent />
    <div class="posts">
      <PostComponent v-for="post in postList" :post="post" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import PostComponent from '@/components/PostComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent, PostComponent
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
