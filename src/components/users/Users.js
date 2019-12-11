import React from "react";
import UserItem from "./UserItem";
import { Spinner } from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = props => {
  // state = {
  //   users: [
  //     {
  //       id: 1,
  //       login: "mojombo",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //       html_url: "https://github.com/mojombo"
  //     },
  //     {
  //       id: 2,
  //       login: "defunkt",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
  //       html_url: "https://github.com/defunkt"
  //     },
  //     {
  //       id: 3,
  //       login: "pjhyett",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
  //       html_url: "https://github.com/defunkt"
  //     }
  //   ]
  // };

  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
export default Users;
