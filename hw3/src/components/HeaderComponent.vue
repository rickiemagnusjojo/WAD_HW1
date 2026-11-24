<template>
    <nav>
        <h2 class="title">PostIt</h2>

        <div class="nav-links">
            <router-link to="/">Home</router-link> |
            <router-link to="/signup">Sign up</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style>
nav {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px 25px;
    background-color: #092747;
    justify-content: space-between;
}

.title {
    color: white;
    margin: 0;
}

.nav-links {
    display: flex;
    gap: 25px;
}

a {
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-decoration: none;
}

a:hover {
    color: #a9c9e8;
}
</style>