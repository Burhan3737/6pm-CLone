import React from "react";

export default function AccountCreated (props){

    return (
        
        <div className="created-main">
           <h1  className="created-h">Your Account Has been Created!</h1>
            <h2 className="created-h2">Name </h2>
            <h4 className="created-h4">{props.name}</h4>
            <h2 className="created-h2">Email </h2>
            <h4 className="created-h4">{props.email}</h4>


        </div>

        

    )
}