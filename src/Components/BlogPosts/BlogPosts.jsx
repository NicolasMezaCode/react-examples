import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  fetchPostsFromFirebase,
  postAPost,
  postAPostToFirebase,
} from './features/posts/postsSlice';
import {createUser} from './users/userSlice'
import Post from './Post';

export default function BlogPosts() {
  const { list } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const bodyRef = useRef();
  const emailInput=useRef();
  const passwordInput=useRef();

  const signupHandler=(e)=>{
    e.preventDefault()
    const email=emailInput.current.value;
    const password=passwordInput.current.value;
    const newUser={
      email,password
    };
    dispatch(createUser(newUser));
    console.log(newUser)
  }

  useEffect(() => {
    dispatch(fetchPostsFromFirebase());
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      userId: 1,
    };
    dispatch(postAPostToFirebase(newPost));
  };
  return (
    <div>
      <h1>BlogPosts</h1>
      <form onSubmit={signupHandler}  >
        <label htmlFor="">Email</label>
        <input type="text" ref={emailInput} />
        <label htmlFor="" >Password</label>
        <input type="text" ref={passwordInput} />
        <button>signUp!!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' id='' ref={titleRef} />
        </div>
        <div>
          <label htmlFor='body'>Body</label>
          <textarea name='' id='' cols='30' rows='2' ref={bodyRef}></textarea>
        </div>
        <button>Submit Post</button>
      </form>
      <section>
        {list.map((post) => (
          <Post post={post} />
        ))}
      </section>
    </div>
  );
}
