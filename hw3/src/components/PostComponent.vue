<template>
<article>
    <p>{{ post.text }}</p>
</article>
</template>

<script>
export default {
    name: 'PostComponent',
    props: ['post'],
    data() {
        return {
            post: this.post,
        }
    }
}
</script>

<style>
</style>