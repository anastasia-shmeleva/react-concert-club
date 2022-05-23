import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, postComment } from "../redux/commentSlice";
import Comment from '../components/Comment';
import { nanoid } from 'nanoid';

export default function Post() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { post } = useSelector((store) => store.postSlice);
  const { comments } = useSelector((store) => store.commentSlice);
  const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`

  useEffect(() => {
    dispatch(fetchComments(url));
  }, [dispatch, url])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, text } = e.target.elements;
    const body = JSON.stringify({
      name: name.value,
      email: email.value,
      text: text.value,
    });
    dispatch(postComment({body, url}));
    name.value = '';
    email.value = '';
    text.value = '';
  }

  return(
    <Fragment>
      <div className='container-xl'>
        <div className='post-item__main'>
          <h1 className='fw-bolder'>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        <div className='post-item__comments'>
          <p className='fs-3 text fw-bolder'>Комментарии</p>
          {comments && comments.map((comment) => <Comment key={nanoid()}>{comment}</Comment>)}
          <button type="button" className="btn btn-outline-dark" onClick={() => setOpen(true)}>Добавить комментарий</button>
          
          <form className={`form-body ${open ? 'visible' : ''}`} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input className="form-control" id="name" placeholder="Имя" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control" id="email" placeholder="Email" required/>
            </div>
            <div className="form-group">
              <textarea className="form-control" id="text" placeholder="..." required/>
            </div>
            <button type="submit" className="btn btn-outline-secondary">Отправить</button>
          </form>

        </div>
      </div>
    </Fragment>
  )
}