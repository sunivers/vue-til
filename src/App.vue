<template>
	<div class="app">
		<AppHeader></AppHeader>
		<div class="app-contents">
			<router-view></router-view>
		</div>
		<ToastPopup></ToastPopup>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import ToastPopup from '@/components/common/ToastPopup';

export default {
	components: {
		AppHeader,
		ToastPopup,
	},
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
