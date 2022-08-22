import axios from 'axios';

const postsService ={
    get: async ()=>{
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    },
    post: async(post)=>{
        const response=await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            post
        );
        return response.data;
    }
}

export default postsService;