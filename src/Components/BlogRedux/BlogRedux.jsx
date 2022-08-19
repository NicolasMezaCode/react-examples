import React,{useRef,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import{ createPost,deletePost,editPost} from './slices/blogSlices'
import { v4 as uuid } from 'uuid'
export default function BlogRedux() {
    const [edit,setEdit]=useState(false)
    const dispatch=useDispatch()
    const posts=useSelector((state)=>state.blog.posts)
    console.log(posts)
    const inputPostRef=useRef();
    const inputEditRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const id=uuid()
        const newPost={
            id:id,
            data:inputPostRef.current.value,
        };
        dispatch(createPost(newPost))
    }
    const handleEdit=()=>{
        setEdit(!edit)
    }
    const editedMessage=(postId)=>{
        
            const editedPost={
                id:postId,
                text:inputEditRef.current.value,
            }
         dispatch(editPost(editedPost));
         setEdit(!edit)
    }
  return (
    <div>
        <h2>Blog Redux</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputPostRef} />
            <button>Submit</button>
        </form>
        <section>
        {posts.map((post)=>(
            <article key={post.id}>
                <h2></h2>
                <h3>{post.data}</h3>
                <button onClick={()=>dispatch(deletePost(post.id))}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
                <form  style={{display:edit ? 'flex': 'none'}}>
                <input ref={inputEditRef}  type="text"/>
                <button type='button' onClick={()=>editedMessage(post.id)}>Edit</button>
                </form>
            </article>
        ))}
        </section>
    </div>
  )
}
