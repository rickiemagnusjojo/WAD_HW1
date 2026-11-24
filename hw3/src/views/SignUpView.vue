<template>
    <div class="signup">
        <HeaderComponent/>
        <p>SIGN UP</p>

        <form class="signup-form" @submit.prevent="signUp">
            <input type="email" placeholder="email" v-model="email" required />
            <input type="password" placeholder="Enter password" v-model="password" required />
            <p v-if="errorMessage">{{ errorMessage }}</p>
            <button type="submit">Sign Up</button>
        </form>
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
    },

    data() {
        return {
            password: "",
            errorMessage: "",
        };
    },
    methods: {
        signUp() {
            const password = this.password;
            const errors = [];

            // check length of password
            if (password.length < 8 || password.length > 20) {
                // this.errorMessage = 'Password must be between 8 and 20 characters.';
                errors.push('Password must be between 8 and 20 characters.');
            }
            // check if password contains at least one Uppercase letter
            if (!/[A-Z]/.test(password)) {
                // this.errorMessage = 'Password must contain at least one uppercase letter.';
                errors.push('Password must contain at least one uppercase letter.');
            }
            // check if password contains at least two lowercase letters
            if ((password.match(/[a-z]/g) || []).length < 2) {
                // this.errorMessage = 'Password must contain at least two lowercase characters.';
                errors.push('Password must contain at least two lowercase characters.');
            }
            // check if password contains at least one digit
            if (!/\d/.test(password)) {
                // this.errorMessage = 'Password must contain at least one numeric value.';
                errors.push('Password must contain at least one numeric value.');
            }
            // check if password starts with an uppercase letter
            if (!/^[A-Z]/.test(password)) {
                // this.errorMessage = 'Password must start with an uppercase letter.';
                errors.push('Password must start with an uppercase letter.');
            }
            // check if password contains "_"
            if (!password.includes('_')) {
                // this.errorMessage = 'Password must include the character "_".';
                errors.push('Password must include the character "_".');
            }

            if (errors.length > 0) {
                this.errorMessage = errors.join(' ');
                return;
            }
            
            this.errorMessage = "";
            this.$router.push({ name: 'home' });
        }
    }
}
</script>