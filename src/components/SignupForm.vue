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
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button
			:disabled="!isUsernameValid || !password || !nickname"
			type="submit"
		>
			회원 가입
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
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
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			this.logMessage = `${data.username} 님이 가입되었습니다.`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
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
