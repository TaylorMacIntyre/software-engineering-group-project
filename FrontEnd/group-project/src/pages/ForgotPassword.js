import { useHistory } from "react-router-dom";
import PasswordForm from "../components/PasswordForm";
import React, {useEffect, useState} from 'react';

function PasswordPage(){

    const history = useHistory();

  

    const [userData, setLoginData] = useState([]);
    function resetPasswordHandler(user){
        return fetch("http://localhost:9001/user/updatePW", {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
        var resetResponse = data;
        console.log(resetResponse.result);
        if(resetResponse.result){
            history.replace("/login");
        }
        else{
            alert("email or security question was incorrect");
        }
        return resetResponse.result;
        })
    }

    return (
        <div>
            <h1>Reset your password</h1>
            <PasswordForm resetPassword = {resetPasswordHandler}/>
        </div>
        
    )
}

export default PasswordPage;