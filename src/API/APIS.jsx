import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Current_weather_data from './Current_weather_data.jsx'
import MapinmyLocation from './MapinmyLocation.jsx'
import AxiosCRUD from './AxiosCRUD.jsx'
import NumberToWord from './NumberToWord.jsx'
import Users from './Crud/user.jsx'
import Adduser from './Crud/adduser.jsx'
import Edit from './Crud/Edit.jsx'
import Coloergenret from './Coloergenret.jsx'
import ToastNotification from './ToastNotification.jsx'


class Hooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            togal: false,
            addclass: "thisremove col-20",
            icon:"fa-solid fa-grip-lines"
        };
    }
    btnadd = () => {
        this.setState({ addclass: "thisremove col-20" })
        this.setState({ icon: "fa-solid fa-grip-lines" })
        this.setState({ togal: !this.state.togal })
    }
    togalebtn = () => {
        this.setState({ togal: !this.state.togal })
        if (!this.state.togal) {
            this.setState({ addclass: "thisadd col-20" })
            this.setState({ addclass: "thisadd col-20" })
            this.setState({ icon: "fa-solid fa-grip-lines deep" })
            
        } else {
            this.setState({ icon: "fa-solid fa-grip-lines" })
            this.setState({ addclass: "thisremove col-20" })

        }
    }

    render() {
        return (
            <>

                <button className='togal' onClick={this.togalebtn}><i class={this.state.icon}></i></button>
                <div className='display-flex '>
                    <div className={this.state.addclass}  onClick={this.btnadd}>
                        <div >
                            <Link to="Current_weather_data"><button className='btn btnp'>Current_weather_data</button></Link>
                            <Link to="MapinmyLocation"><button className='btn btnp'>Map in my Location</button></Link>
                            <Link to="AxiosCRUD"><button className='btn btnp'>Axios CRUD with JSON SERVER</button></Link>
                            <Link to="NumberToWord"><button className='btn btnp'>Number To Word</button></Link>
                            <Link to="Coloergenret"><button className='btn btnp'>Coloergenret</button></Link>
                            <Link to="ToastNotification"><button className='btn btnp'>Toast Notification</button></Link>
                            
                        </div>
                    </div>
                    <div className='col-80'>
                        <div className='isname'>
                            <Routes>
                                <Route path='/' element={<> </>}></Route>
                                <Route path='Current_weather_data' element={<Current_weather_data/>}></Route>
                                <Route path='MapinmyLocation' element={<MapinmyLocation/>}></Route>
                                <Route path='AxiosCRUD' element={<AxiosCRUD/>}></Route>
                                <Route path='AxiosCRUD/users/:id' element={<Users/>}></Route>
                                <Route path='AxiosCRUD/adduser' element={<Adduser/>}></Route>
                                <Route path='AxiosCRUD/edit/:id' element={<Edit/>}></Route>
                                <Route path='NumberToWord' element={<NumberToWord/>}></Route>
                                <Route path='Coloergenret' element={<Coloergenret/>}></Route>
                                <Route path='ToastNotification' element={<ToastNotification/>}></Route>
                               
                            </Routes>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Hooks;