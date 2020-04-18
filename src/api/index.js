import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	const instance = axios.create({
		// Vue CLI 2.x 버전에서는 .env 설정 값들을 들고오기 위해서는 웹팩에 따로 설정해줬어야 했는데
		// Vue CLI 3 이후 버전에서는 'VUE_APP' 접두사를 붙인 변수는 자동으로 로드됨.
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}

export { registerUser, loginUser };
