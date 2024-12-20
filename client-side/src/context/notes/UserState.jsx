import React from "react";
import UserContext from "./userContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "dotenv";

function UserState(props) {
  const navigate = useNavigate();
  const host = import.meta.env.VITE_APP_API_URL;
  const { showAlert } = props;
  let tagsInitial = {};
  const [currentTags, setTags] = useState(tagsInitial);
  const [user, setUser] = useState({});

  const getUserData = async () => {
    const url = `${host}/api/auth/getuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      mode: "no-cors",
    });
    const json = await response.json();
    setUser(json);
  };

  const login = async (values) => {
    const url = `${host}/api/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
      mode: "no-cors",
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      props.showAlert("LoggedIn successfully", "success");
      navigate("/");
    } else {
      showAlert("Failed to LogIn", "danger");
    }
  };

  const signup = async (values) => {
    const url = `${host}/api/auth/createuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
      mode: "no-cors",
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      props.showAlert("LoggedIn successfully", "success");
      navigate("/");
    } else {
      showAlert("Failed to SignUp", "danger");
    }
  };

  const oneTap = async (values) => {
    const url = `${host}/api/auth/googleonetap`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        image: values.image,
      }),
      mode: "no-cors",
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      showAlert("LoggedIn successfully", "success");
      navigate("/");
    } else {
      console.log("Failed to oneTap sign in");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/loginsignup");
  };

  const fetchTags = async () => {
    const url = `${host}/api/auth/getUser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      mode: "no-cors",
    });
    const json = await response.json();
    setTags(json.tags);
  };

  const createTag = async (tag) => {
    const url = `${host}/api/auth/getUser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      mode: "no-cors",
    });
    const json = await response.json();
    const id = json._id;

    const newurl = `${host}/api/auth/updateuser/${id}`;
    const newresponse = fetch(newurl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ tags: tag }),
      mode: "no-cors",
    });
    setTags({ ...tag, ...currentTags });
    showAlert("Tag added successfully", "success");
  };
  return (
    <UserContext.Provider
      value={{
        user,
        getUserData,
        oneTap,
        currentTags,
        setTags,
        createTag,
        fetchTags,
        login,
        signup,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;
