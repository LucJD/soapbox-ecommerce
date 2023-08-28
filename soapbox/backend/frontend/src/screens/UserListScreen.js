import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Table } from "react-bootstrap";
import Messages from "../components/Messages";
import Loader from "../components/Loader";
import { listUsers, deleteUser } from "../actions/userActions";

function UserListScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigate("login");
    }
  }, [dispatch, navigate, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <div>
      <h1 className="products-title">Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Messages variant="danger">{error}</Messages>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className="table-text-color">ID</th>
              <th className="table-text-color">NAME</th>
              <th className="table-text-color">EMAIL</th>
              <th className="table-text-color">ADMIN</th>
              <th className="table-text-color"></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr className="table-text-color" key={user._id}>
                <td className="table-text-color">{user._id}</td>
                <td className="table-text-color">{user.name}</td>
                <td className="table-text-color">{user.email}</td>
                <td className="table-text-color">
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-check" style={{ color: "red" }}></i>
                  )}
                </td>

                <td>
                  <LinkContainer to={`/admin/user/edit/${user._id}`}>
                    <Button variant="light" className="btn-sm">
                      <img
                        className="pencil"
                        src={require("../nav-images/pencil.png")}
                        alt="edit"
                        width={20}
                      />
                    </Button>
                  </LinkContainer>

                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <img
                      className="trash"
                      src={require("../nav-images/trash.png")}
                      alt="delete"
                      width={20}
                    />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default UserListScreen;
