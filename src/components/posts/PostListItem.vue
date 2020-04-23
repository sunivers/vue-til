<template>
	<li>
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			{{ postItem.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';
import bus from '@/utils/bus';

export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deleteItem() {
			if (confirm('You want to delete it?')) {
				await deletePost(this.postItem._id);
				bus.$emit('show:toast', 'Post was deleted');
				this.$emit('refresh');
			}
		},
		routeEditPage() {
			this.$router.push(`/post/${this.postItem._id}`);
		},
	},
};
</script>

<style></style>
