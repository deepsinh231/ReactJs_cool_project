import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');

    const naviget = useNavigate()
    const data = { Name, Email, Address, Phone }
    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/users", data)
            .then(
                naviget("/link/API/AxiosCRUD")
            )
    }

    return (
        <>
            <div className="modals">
                <div className=" modal-dialog  ">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder='Address' ></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Phone' className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={submit} className="btn btn-success" value="Add" >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Adduser;