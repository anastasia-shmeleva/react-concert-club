import { Fragment } from 'react';
import { useSelector } from "react-redux";

export default function UserInfo() {
  const { user } = useSelector((store) => store.appSlice);

  return(
    <Fragment>
      <div className='list-item row'>
          <div className='col col-lg-1'></div>
          <div className='col'>{user.username}</div>
          <div className='col col-lg-1'></div>
      </div> 
      <div className='list-item row row-info'>
        <div className='col col-lg-1'></div>
        <div className='col'>{user.name}</div>
        <div className='col'>{user.email}</div>
        <div className='col'>{user.phone}</div>
        <div className='col'>{user.website}</div>
        <div className='col col-md-auto'>{user.company.name} <br/> ({user.company.bs})</div>
        <div className='col col-lg-1'></div>
      </div>     
    </Fragment>
  )
}