<template>
  <div class="home">
    <HeaderComponent />
    <p>POSTS</p>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
  }
}
</script>
