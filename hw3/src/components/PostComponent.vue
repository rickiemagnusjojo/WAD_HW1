<template>
<article>
    <div class="postheader">
        <div class="user">
            <img class="profilepicture" src="../assets/me.png">
            <p>{{ post.author }}</p>
        </div>
        <p>{{ post.date }}</p>
    </div>
    <p>{{ post.text }}</p>
    <div class="likes">
        <button class="likebutton">
            <img src="../assets/like.png">
        </button>
        <p>{{ post.likes }}</p>
    </div>
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