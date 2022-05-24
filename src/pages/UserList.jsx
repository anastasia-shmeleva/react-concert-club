import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, appActions } from "../redux/appSlice";
import { nanoid } from 'nanoid';

export default function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((store) => store.appSlice);

  useEffect(() => {
    dispatch(fetchUsers('https://jsonplaceholder.typicode.com/users'));
  }, [dispatch])
  
  const handleClick = (id) => {
    dispatch(appActions.setUser(id));
    navigate('/user');
  }

  return(
    <Fragment>
      <div className="container-xl main-list">
       {users && <ul className='list-unstyled'>{users.map(
          user => <li className='list-item row' key={nanoid()} onClick={() => handleClick(user.id)}>
            <div className='col col-lg-1'></div>
            <div className='col list-item__name'>{user.name}</div>
            <div className='col col-lg-1'></div>
          </li>
        )}
        </ul>}
      </div>
    </Fragment>
  )
}