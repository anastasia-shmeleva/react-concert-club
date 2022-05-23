import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userActions } from "../redux/userSlice";

export default function PostPreview(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    id,
    title,
    body
  } = props.children;

  const handleClick = () => {
    dispatch(userActions.setPost(id));
    navigate(`/user/posts/${id}`);
  }

  return(
    <Fragment>
      <div className='post-item' onClick={handleClick}>
        <h4 className='fw-bolder'>{title}</h4>
        <p>{body}</p>
      </div>
    </Fragment>
  )
}