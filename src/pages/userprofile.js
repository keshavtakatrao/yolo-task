import axios from 'axios';
import React, { useState,useEffect } from 'react'

const Userprofile = () => {
    let [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/user-profile.json')
            .then((response) => {
                setData(response.data)
            })
    }, [])
    return (
        <div className="container">  
        <center>
        <h1>User Profile</h1>
            <table class="table" style={{width:"40%",fontSize:"30px",marginTop:"100px"}}>
                
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <td >Contact Number</td>
                        <td>{data.contact_number}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{data.gender}</td>
                    </tr>
                </tbody>
            </table>
        </center>
        </div>
    )
}

export default Userprofile
