<template>
    <div class="signUpPage-container">
        <HeaderComponent/>
        <div class="signup">
            
            <h2>Welcome to PostIt</h2>
            <p>Create an account to get started!</p>

            <form class="signup-form" @submit.prevent="signUp">
                <input type="email" placeholder="email" v-model="email" required />
                <input type="password" placeholder="Enter password" v-model="password" required />
                <p v-if="errorMessage">{{ errorMessage }}</p>
                <button type="submit">Sign Up</button>
            </form>
        </div>

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
                errors.push('be between 8 and 20 characters');
            }
            // check if password contains at least one Uppercase letter
            if (!/[A-Z]/.test(password)) {
                errors.push('contain at least one uppercase letter');
            }
            // check if password contains at least two lowercase letters
            if ((password.match(/[a-z]/g) || []).length < 2) {
                errors.push('contain at least two lowercase characters');
            }
            // check if password contains at least one digit
            if (!/\d/.test(password)) {
                errors.push('contain at least one numeric value');
            }
            // check if password starts with an uppercase letter
            if (!/^[A-Z]/.test(password)) {
                errors.push('start with an uppercase letter');
            }
            // check if password contains "_"
            if (!password.includes('_')) {
                errors.push('include the character "_"');
            }

            if (errors.length > 0) {
                this.errorMessage = "Password must " + errors.join(', ') + ".";
                return;
            }
            
            this.errorMessage = "";
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style>
.signup {
    width: 450px;
    max-width: calc(100% - 30px);
    padding: 20px;
    background-color: lightgray;
    border-radius: 15px;
    text-align: center;
    margin: 40px auto;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
}

input::placeholder {
color: #bdbdbd;
}

.signup h2 {
    margin-bottom: 10px;
    color: #154170;
}

.signup-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin: 0 auto;
}
.signup-form input {
    width: 100%;
    align-self: center;
    padding: 10px;
    border: none;
    border-radius: 5px;
}

.signup-form button {
    color: white;
    background-color: #092747;
    width: 100%;
    align-self: center;
    border: none;
    border-radius: 5px;
    margin: 5px;
    padding: 10px 10px;
    cursor: pointer;

}

.signUpPage-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.signup-form p {
    color: red;
    font-size: 13px;
    margin: 0;
    line-height: 1.5;
}

/* Push footer to the bottom */
.signUpPage-container > *:last-child {
    margin-top: auto;
}

</style>
