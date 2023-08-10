import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import UseState1 from './UseState_1.jsx';
import UseEffect2 from './UseEffect_2.jsx';
import UseEffect1 from './UseEffect_1.jsx';
import UseContext1 from './UseContext_1.jsx';
import UseContext2 from './UseContext_2.jsx';
import Usereducer1 from './usereducer_1.jsx';
import UseMemo1 from './UseMemo_1.jsx';
import UseCallback1 from './UseCallback_1.jsx';
import UseRef1 from './UseRef_1.jsx';
import UseImperativeHandle1 from './UseImperativeHandle_1.jsx';
import UseLayoutEffect1 from './UseLayoutEffect_1.jsx';
import Costamhook from './Costamhook.jsx';
import UseLocalStorage from './UseLocalStorage.jsx';
import Usefrom from './Usefrom.jsx';
import UsingAJAX from './UsingAJAX.jsx';
import Reactfetchhook from './Reactfetchhook.jsx';
// import UseQuerys from './useQuerys.jsx';

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
        this.setState({ togal: !this.state.togal })
        this.setState({ icon: "fa-solid fa-grip-lines" })
            this.setState({ icon: "fa-solid fa-grip-lines" })

    }
    togalebtn = () => {
        this.setState({ togal: !this.state.togal })
        if (!this.state.togal) {
            this.setState({ addclass: "thisadd col-20" })
            this.setState({ icon: "fa-solid fa-grip-lines deep" })

        } else {
            this.setState({ addclass: "thisremove col-20" })
            this.setState({ icon: "fa-solid fa-grip-lines" })
        }
    }

    render() {
        return (
            <>

                <button className='togal' onClick={this.togalebtn}><i class={this.state.icon}></i></button>
                <div className='display-flex '>
                    <div className={this.state.addclass}  onClick={this.btnadd}>
                        <div >
                            <Link to="UseState_1"><button className='btn btnp'>UseState_1</button></Link>
                            <Link to="UseEffect_1"><button className='btn btnp'>UseEffect_1</button></Link>
                            <Link to="UseEffect_2"><button className='btn btnp'>UseEffect_2</button></Link>
                            <Link to="UseContext_1"><button className='btn btnp'>UseContext_1</button></Link>
                            <Link to="UseContext_2"><button className='btn btnp'>UseContext_2</button></Link>
                            <Link to="Usereducer_1"><button className='btn btnp'>Usereducer_1</button></Link>
                            <Link to="UseMemo_1"><button className='btn btnp'>UseMemo_1</button></Link>
                            <Link to="UseCallback_1"><button className='btn btnp'>UseCallback_1</button></Link>
                            <Link to="UseRef_1"><button className='btn btnp'>UseRef_1</button></Link>
                            <Link to="UseImperativeHandle_1"><button className='btn btnp'>UseImperativeHandle_1</button></Link>
                            <Link to="UseLocalStorage"><button className='btn btnp'>UseLocalStorage</button></Link>
                            <Link to="UseLayoutEffect_1"><button className='btn btnp'>UseLayoutEffect_1</button></Link>
                            <Link to="Costamhook"><button className='btn btnp'>Costamhook and useDebugValue </button></Link>
                            <Link to="Usefrom"><button className='btn btnp'>Usefrom</button></Link>
                            <Link to="UsingAJAX"><button className='btn btnp'>Using AJAX api</button></Link>
                            <Link to="Reactfetchhook"><button className='btn btnp'>react-fetch-hook</button></Link>
                            {/* <Link to="UseQuerys"><button className='btn btnp'>react-useQuery-hook</button></Link> */}
                        </div>
                    </div>
                    <div className='col-80'>
                        <div className='isname'>
                            <Routes>
                                <Route path='/' element={<> </>}></Route>
                                <Route path='UseState_1' element={<UseState1 />}></Route>
                                <Route path='UseEffect_2' element={<UseEffect2 />}></Route>
                                <Route path='UseEffect_1' element={<UseEffect1 />}></Route>
                                <Route path='UseContext_1' element={<UseContext1 />}></Route>
                                <Route path='UseContext_2' element={<UseContext2 />}></Route>
                                <Route path='Usereducer_1' element={<Usereducer1 />}></Route>
                                <Route path='UseMemo_1' element={<UseMemo1 />}></Route>
                                <Route path='UseCallback_1' element={<UseCallback1 />}></Route>
                                <Route path='UseRef_1' element={<UseRef1 />}></Route>
                                <Route path='UseImperativeHandle_1' element={<UseImperativeHandle1 />}></Route>
                                <Route path='UseLayoutEffect_1' element={<UseLayoutEffect1 />}></Route>
                                <Route path='Costamhook' element={<Costamhook />}></Route>
                                <Route path='UseLocalStorage' element={<UseLocalStorage />}></Route>
                                <Route path='Usefrom' element={<Usefrom />}></Route>
                                <Route path='UsingAJAX' element={<UsingAJAX />}></Route>
                                <Route path='Reactfetchhook' element={<Reactfetchhook />}></Route>
                                {/* <Route path='UseQuerys' element={<UseQuerys />}></Route> */}
                            </Routes>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Hooks;