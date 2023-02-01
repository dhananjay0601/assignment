import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import UserList from './components/UserList';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import EditUser from './components/EditUser';

const App = () => {
  return (
    <>
      <main className="container-fluid">
        <div className="row justify-content-center">
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/user" />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/user/add" element={<AddUser />} />
            <Route path="/user/edit/:id" element={<EditUser />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
