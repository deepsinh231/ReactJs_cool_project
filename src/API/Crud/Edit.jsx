import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');

    const naviget = useNavigate()
    const data = { Name, Email, Address, Phone }
    useEffect(() => {
        const url = `http://localhost:3000/users/${id}`
        axios.get(url)
            .then((res) => {
                setName(res.data.Name)
                setEmail(res.data.Email)
                setAddress(res.data.Address)
                setPhone(res.data.Phone)
            })
    }, [])
    function update(e) {
        e.preventDefault()      
        axios.put(`http://localhost:3000/users/${id}`, data)
            .then(
                naviget("/link/API/AxiosCRUD")
            )
    }
    const { id } = useParams()

    return (
        <>
            <div className="modals">
                <div className=" modal-dialog  ">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Name' className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea value={Address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder='Address' ></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={Phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Phone' className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={update} className="btn btn-success" value="Add" >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;