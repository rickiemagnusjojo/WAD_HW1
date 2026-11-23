<template>
<div class="signup">
    <HeaderComponent/>
    <p>SIGN UP</p>
    <FooterComponent />
</div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'SignUpView',
    components: {
        HeaderComponent, FooterComponent
    }
}
</script>