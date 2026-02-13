import './App.css';
import { HashRouter, NavLink, Route, Routes, useNavigate, Outlet, useParams, Link } from 'react-router-dom';

const Todo = () => {
  return <p>這是 Todo 頁面</p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type='button' onClick={() => {
        navigate("/login");
      }}>登出</button>
    </>
  )
};
const Post = () => {
  return (
    <>
      <h3>Post</h3>
      <Link to="5355">PostID:</Link>
      <Outlet />
    </>
  )
};
const PostId = () => {
  const parms = useParams();
  return (
    <>
      {parms.postId}
    </>
  )
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/logout">
            <p>登出 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>ID 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
