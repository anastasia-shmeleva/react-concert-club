import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import UserList from './pages/UserList';
import User from './pages/User';
import PostList from './pages/PostList';
import Post from './pages/Post';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Header/>
    <main className="container-xl main">  
      <Routes>
        <Route path='/' element={<UserList/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/user/posts' element={<PostList/>}></Route>
        <Route path='/user/posts/:id' element={<Post/>}></Route>
      </Routes>
    </main>
  </Router>
  );
}

export default App;
