import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, postAPost } from './features/posts/postsSlice';

export default function BlogPosts() {
  const { list } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const bodyRef = useRef();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      userId: 1,
    };
    dispatch(postAPost(newPost));
  };
  return (
    <div>
      <h1>BlogPosts</h1>
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
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
