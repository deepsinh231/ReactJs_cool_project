import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {
    const [users, setuser] = useState();
    useEffect(() => {
        const url = `http://localhost:3000/users/${id}`
        axios.get(url)
            .then((res) => {
                setuser(res.data)
            })
    }, [])
    const { id } = useParams()
    return (<>
        <div className='df tex-cen pt-5'>
            <div className='col-50 borderbottom'>
                <p>Name</p>
                <p>Email</p>
                <p>Address</p>
                <p>Phone</p>
            </div>
            {users && <div className='col-50 borderbottom'>
                <p>{users.Name}</p>
                <p>{users.Email}</p>
                <p>{users.Address}</p>
                <p>{users.Phone}</p>
            </div>
            }
        </div>

    </>
    );
};

export default Users;