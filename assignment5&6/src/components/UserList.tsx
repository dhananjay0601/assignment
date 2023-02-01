import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  let navigate = useNavigate();
  let { userList, removeUser, updateUser } = useUserContext();
  return (
    <section className="col-12 mt-2">
      <table className="table table-bordered ">
        <thead className="bg-primary text-white">
          <tr>
            <th style={{ width: '5%' }}>Sr</th>
            <th style={{ width: '10%' }}>Student Name</th>
            <th style={{ width: '10%' }}>Mobile Number</th>
            <th style={{ width: '10%' }}>EmailId</th>
            <th style={{ width: '20%' }}>Address</th>
            <th style={{ width: '10%' }}>DOB</th>
            <th style={{ width: '10%' }}>Gender</th>
            <th style={{ width: '25%' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.length !== 0 ? null : (
            <tr>
              <td colSpan={8} className="text-danger fw-bold text-center">
                No User Found
              </td>
            </tr>
          )}
          {userList.map((User, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{User.userName}</td>
                <td>{User.mobileNumber}</td>
                <td>{User.emailId}</td>
                <td>{User.address}</td>
                <td>{User.DOB}</td>
                <td>{User.gender}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    title="delete"
                    onClick={() => removeUser(index)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-primary mx-1"
                    title="edit"
                    onClick={() => navigate('/user/edit/' + User.id)}
                  >
                    <i className="fa fa-edit" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default UserList;
