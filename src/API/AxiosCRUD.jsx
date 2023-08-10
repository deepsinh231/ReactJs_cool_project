import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Crud.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const AxiosCRUD = () => {
    const [user, setuser] = useState([]);
    const tabaledata = async () => {
        const url = "http://localhost:3000/users"
        axios.get(url)
            .then((res) => {
                setuser(res.data.reverse())
            })
    }

    useEffect(() => {
        tabaledata()
    }, [])
    const Delete = async (id) => {

        axios.delete(`http://localhost:3000/users/${id}`)
            .then(
                tabaledata()
            )


    }
    return (
        <>
            <div className='posi-re'>
                <div className="container-xl">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2>Manage <b>Employees</b></h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <Link to={"adduser"} className='btn btn-success'><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Link>
                                        {/* <Link className='btn btn-danger'><i className="material-icons">&#xE15C;</i> <span>Delete</span></Link> */}
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        {/* <th>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="selectAll" />
                                                <label htmlFor="selectAll"></label>
                                            </span>
                                        </th> */}
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user && user.map((users, key) => {
                                        return <tr key={key}>
                                            {/* <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                    <label htmlFor="checkbox1"></label>
                                                </span>
                                            </td> */}
                                            <td>{users.Name}</td>
                                            <td>{users.Email}</td>
                                            <td>{users.Address}</td>
                                            <td>{users.Phone}</td>
                                            <td>
                                                <Link to={`users/${users.id}`} className="View"><i className="material-icons" data-toggle="tooltip" title="View">&#x263B;</i></Link>
                                                <Link to={`edit/${users.id}`} className="edit"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                                                <Link onClick={() => { Delete(users.id) }} className="delete"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Link>
                                            </td>
                                        </tr>
                                    })}


                                </tbody>
                            </table>
                            {/* <div className="clearfix">
				<div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul className="pagination">
					<li className="page-item disabled"><a href="#">Previous</a></li>
					<li className="page-item"><a href="#" className="page-link">1</a></li>
					<li className="page-item"><a href="#" className="page-link">2</a></li>
					<li className="page-item active"><a href="#" className="page-link">3</a></li>
					<li className="page-item"><a href="#" className="page-link">4</a></li>
					<li className="page-item"><a href="#" className="page-link">5</a></li>
					<li className="page-item"><a href="#" className="page-link">Next</a></li>
				</ul>
			</div> */}
                        </div>
                    </div>
                </div>
                {/* addd */}

                {/* save edit */}
                <div className="modals editclass">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit Employee</h4>
                                    <button type="button" className="close" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" value="Cancel" />
                                    <input type="submit" className="btn btn-info" value="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* delete */}
                {/* <div className="modals">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete Employee</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete these Records?</p>
                                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-danger" value="Delete" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
};

export default AxiosCRUD;
const codeString = `
    note:- plz follow 3 line and use
    1. Start To live server "http://localhost:3000"
    2. open db.json file
    3. add this:-{"users": []} 
`