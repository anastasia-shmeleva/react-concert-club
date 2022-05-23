import { Fragment } from 'react';

export default function Comment(props) {
  const {
    name,
    email,
    body
  } = props.children;

  return(
    <Fragment>
      <div className='comments-item d-flex flex-column'>
        <span className='comments-item__name fw-bold'>{name}</span>
        <span className='comments-item__email fw-bolder'>{email}</span>
        <span className='comments-item__body p-1'>{body}</span>
      </div>
    </Fragment>
  )
}