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
article {
  background-color: #d8d8d8;
  border-radius: 5px;
  padding: 10px;
  max-width: 100%;
}

.postheader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
}

.user {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.profilepicture {
  margin: 0;
  font-size: 1.1em;
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.likes {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.likebutton {
  padding: 0px;
  margin: 0px;
  border: none;
  width: fit-content;
}
</style>