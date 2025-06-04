import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../Pages/ChangeProfile";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is Profile Page and User is: {username}</h1>
      <ChangeProfile></ChangeProfile>
    </div>
  );
};
