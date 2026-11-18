<template>
  <HeaderComponent />
  <div class="home">
    <div class="sidebar"></div>
    <div class="posts">
      <PostComponent v-for="post in postList" :post="post" />
    </div>
    <div class="sidebar"></div>
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

<style>

body {
  font-family: "Consolas", monospace;
}

.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.sidebar {
  background-color: lightgrey;
  border-radius: 5px;
  width: 10%;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
