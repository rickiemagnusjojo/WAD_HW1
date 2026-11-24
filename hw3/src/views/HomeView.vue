<template>
  <HeaderComponent />
  <div class="home">
    <div class="sidebar"></div>
    <div class="posts">
      <button @click="resetLikes">
        Reset all likes
      </button>
      <PostComponent v-for="post in postList" :post="post" />
    </div>
    <div class="sidebar"></div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import PostComponent from '@/components/PostComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent, PostComponent, FooterComponent
  },
  data: function() {
    return {
  }},
  computed: {
    postList(){
      return this.$store.state.postList
  }},
  methods: {
    resetLikes() {
      this.$store.commit('resetLikes')
    }
  }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
  font-family: "Consolas", monospace;
  margin: 0;
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
  background-color: lightblue;
  border-radius: 5px;
  width: 10%;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
