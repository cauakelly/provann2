import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostDetails = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post details:', error);
    throw error;
  }
};

export const fetchUserDetails = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};