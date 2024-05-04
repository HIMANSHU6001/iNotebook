import React from 'react'
import UserContext from './userContext'
import { useState,useEffect } from 'react';

function UserState(props) {

    const host = "http://localhost:5000"
    const { showAlert } = props;
    let tagsInitial = {}
    const [currentTags, setTags] = useState(tagsInitial);

    useEffect(() => {
        console.log("USEEFFECT",currentTags);
      }, [currentTags])
      

    const fetchTags = async() => {
        const url = `${host}/api/auth/getUser`;
        const response = await fetch(url, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYTVjNjdhMWM0MzU2MjkzN2NiYWJhIn0sImlhdCI6MTcxNDc5MzU2N30.Q7b8PH0RFUBT7Butj56dPd8qJDa_ZQmGOBcUEEyxS6Q"
            },
        })
        const json = await response.json();
        setTags(json.tags);
    }

    const createTag = async(tag) => {
        const url = `${host}/api/auth/getUser`;
        const response = await fetch(url, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYTVjNjdhMWM0MzU2MjkzN2NiYWJhIn0sImlhdCI6MTcxNDc5MzU2N30.Q7b8PH0RFUBT7Butj56dPd8qJDa_ZQmGOBcUEEyxS6Q"
            },
        })
        const json = await response.json();
        const id = json._id;

        const newurl = `${host}/api/auth/updateuser/${id}`
        const newresponse = fetch(newurl, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYTVjNjdhMWM0MzU2MjkzN2NiYWJhIn0sImlhdCI6MTcxNDc5MzU2N30.Q7b8PH0RFUBT7Butj56dPd8qJDa_ZQmGOBcUEEyxS6Q"
            },
            body: JSON.stringify({tags:tag})
        })
        setTags({...tag, ...currentTags})
    }
  return (
    <UserContext.Provider value={{currentTags, createTag, fetchTags}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState