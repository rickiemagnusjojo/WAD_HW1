<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Sign up</router-link>
    </nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style>
nav {
    padding: .5em;
    background-color: lightgrey;
    border-radius: 5px;
}

a {
    color: black;
    text-decoration: none;
}
</style>