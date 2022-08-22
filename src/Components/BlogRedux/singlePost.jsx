import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deletePost,editPost } from './slices/blogSlices'

export default function SinglePost({post,inputEditText,inputEditTitle}) {
    const [edit,setEdit]=useState(false)
    const dispatch=useDispatch();
    const handleEdit=()=>{
        setEdit(!edit)
    }
    const editedMessage=(postId)=>{
            const editedPost={
                id:postId,
                title:inputEditTitle.current.value,
                body:inputEditText.current.value
            }
         dispatch(editPost(editedPost));
         setEdit(!edit)
         console.log(inputEditText)
    }
  return (
    <>
        <article key={post.id}>
            {edit ?(<>
            <form>
            <input ref={inputEditTitle}  type="text"/>
            <input ref={inputEditText} type="text" />
            <button type='button' onClick={()=>editedMessage(post.id)}>Edit</button>
            </form>
            </>) : (
                <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={()=>dispatch(deletePost(post.id))}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
                </>
            )
            }
        </article>
    </>
  )
}
