import { Fragment } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import PostPreview from '../components/PostPreview';
import { nanoid } from 'nanoid';

export default function PostList() {
  const navigate = useNavigate();
  const { posts } = useSelector((store) => store.appSlice);

  return(
    <Fragment>
      <div className='container-xl main-list'>
        <div className='list-item row row-posts'>
          <div className='row'>Посты</div>
          <div className='d-flex flex-column p-0 gap-3'>
          {posts.map((post) => <PostPreview key={nanoid()}>{post}</PostPreview>)}
          </div>
          <div className='p-0'>
            <button type="button" className="btn btn-outline-dark" onClick={() => navigate('/user')}>Назад</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}