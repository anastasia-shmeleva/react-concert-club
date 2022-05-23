import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/userSlice";
import PostPreview from "./PostPreview";
import { nanoid } from 'nanoid';

export default function UserPosts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, posts } = useSelector((store) => store.userSlice);

  useEffect(() => {
    dispatch(fetchPosts(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`));
  }, [dispatch])

  const handleClick = () => {
    navigate('/user/posts');
  }

  return (
    <Fragment>
      <div className='list-item row row-posts'>
        <div className='row'>Посты</div>
        <div className='d-flex p-0 gap-3'>
          {posts.slice(0, 3).map((post) => <PostPreview key={nanoid()}>{post}</PostPreview>)}
        </div>
        <div className='p-0'>
          <button type="button" className="btn btn-outline-dark" onClick={handleClick}>Все посты</button>
        </div>
      </div>
    </Fragment>
  )
}