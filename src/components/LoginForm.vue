<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input
				id="username"
				type="text"
				v-model="username"
				:class="{ 'not-valid': username !== '' && !isUsernameValid }"
			/>
			<p class="error-text" v-if="username !== '' && !isUsernameValid">
				올바른 메일주소가 아닙니다.
			</p>
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button :disabled="!isUsernameValid || !password" type="submit">
			로그인
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				console.log(data.user.username);
				this.logMessage = `${data.user.username} 님 환영합니다.`;
				// this.initForm();
			} catch (error) {
				console.log(error.response.data);
				this.logMessage = error.response.data;
				// this.initForm();
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style>
.not-valid {
	border: 1px solid red;
}
.error-text {
	color: red;
	margin: 0;
	font-size: 12px;
}
</style>
