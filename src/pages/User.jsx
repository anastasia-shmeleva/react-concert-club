import { Fragment } from 'react';
import UserPosts from '../components/UserPosts';
import UserInfo from '../components/UserInfo';

export default function User() {
  return(
    <Fragment>
      <div className='container-xl main-list'>
        <UserInfo/>
        <UserPosts/>
      </div>
    </Fragment>
  )
}