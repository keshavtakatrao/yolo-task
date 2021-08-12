import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
    let history = useHistory()
    let [data, getData] = useState([])
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json')
            .then((response) => {
                getData(response.data)
            })
    }, [])
    return (
        <>
            <div className="container">
            <h1 className="my-4 font-weight-bold .display-4">Dashboard</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((info)=>{
                        return(
                            <tr style={{cursor:"pointer"}} onClick={()=>{
                                history.push('/userprofile')
                            }} >
                                <td>{info.name}</td>
                                <td>{info.email}</td>
                                <td>{info.contact_number}</td>
                                <td>{info.gender}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            </div>
        </>
    )
}

export default Dashboard
