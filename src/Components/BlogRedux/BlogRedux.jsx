import React,{useRef,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{fetchPosts,postAPost} from './slices/blogSlices.js'
import SinglePost from './singlePost.jsx'
export default function BlogRedux() {
    const dispatch=useDispatch()
    const posts=useSelector((state)=>state.blog.posts)
    useEffect(() => {
        dispatch(fetchPosts());
      }, []);
    const inputTitleRef=useRef();
    const inputTextRef=useRef();
    const inputEditTitle=useRef();
    const inputEditText=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newPost={
            title:inputTitleRef.current.value,
            body:inputTextRef.current.value,
            userId:1,
        };
        dispatch(postAPost(newPost))
    }

  return (
    <div>
        <h2>Blog Redux</h2>
        <form onSubmit={handleSubmit}>
            <h3>Title</h3>
            <input type="text" ref={inputTitleRef} />
            <h3>Text</h3>
            <input type="text" ref={inputTextRef} />
            <button>Submit</button>
        </form>
        <section>
        {posts.map((post)=>(<SinglePost inputEditText={inputEditText} post={post} inputEditTitle={inputEditTitle}/>
        ))}
        </section>
    </div>
  )
}
