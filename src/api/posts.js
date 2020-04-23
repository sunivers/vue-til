import { posts } from './index';

// 학습 노트 조회 API
function fetchPosts() {
	return posts.get('/');
}

// 특정 학습 노트 조회 API
function fetchPost(postId) {
	return posts.get(postId);
}

// 학습 노트 데이터 생성 API
function createPost(postData) {
	return posts.post('/', postData);
}

// 학습 노트 삭제 API
function deletePost(postId) {
	return posts.delete(postId);
}

// 학습 노트 수정 API
function editPost(postId, postData) {
	return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
