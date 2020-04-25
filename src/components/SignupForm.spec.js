import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm', () => {
	test('ID는 이메일 형식이 아니면 경고 메세지가 출력된다.', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});
	test('ID와 PW와 닉네임이 입력되지 않으면 회원가입 버튼이 비활성화 된다.', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: '',
					password: '',
					nickname: '',
				};
			},
		});
		const button = wrapper.find('button');
		expect(button.element.disabled).toBeTruthy();
	});
});
