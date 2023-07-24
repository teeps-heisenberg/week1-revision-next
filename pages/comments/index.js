import React,{useState} from 'react'

const CommentsPage = () => {
    const [comments,setComments] = useState([]);
    const [comment,setComment] = useState('');

    const fetchComments = async () => {
        const res = await fetch('/api/comments');
        const data = await res.json();
        setComments(data);
    }
    const submitComment = async ()=>{
        const res = await fetch('/api/comments',{
            method:'POST',
            body:JSON.stringify({comment:comment}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        const data = await res.json();
        setComment('');
        console.log(data);
        fetchComments();
    }

    const deleteComment = async (commentId) => {
        const res = await fetch(`/api/comments/${commentId}`,{
            method:'DELETE',
        });
        const data = await res.json();
        fetchComments();
    }

  return (
    <div>
        <h2>Comments from API </h2>
        <input value={comment} type='text' onChange={(e) => setComment(e.target.value) }/>
        <button onClick={submitComment}>Submit Comment</button>
        <br/>
        <button onClick={fetchComments}>Fetch Comments</button>
        {comments.map(comment =>{
            return (
                <div key={comment.id}>
                    <p>{ comment.id }  {comment.text}</p>
                    <button onClick={() => deleteComment(comment.id)}>Delete</button>
                </div>
            );
        })}
    </div>
  )
}

export default CommentsPage