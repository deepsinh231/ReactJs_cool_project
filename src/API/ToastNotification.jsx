import React from 'react';
import './toast.css'

const ToastNotification  = () => {

    const Showtos = (e) => {
        var msg = e.target.innerText;
        // let Success = '<i class="fa-solid fa-circle-check"></i> Success Fullu Submitted';
        let Error = '<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error';
        let Invalid = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input Check Again';
        let creadiv = document.createElement('div');
        if (msg == "Success") {
            msg = '<i class="fa-solid fa-circle-check"></i> Success Fullu Submitted';
        } else if (msg == "Error") {
            msg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error'
        } else {
            msg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input Check Again';
        }
        creadiv.innerHTML = msg;
        document.getElementById('toastbox').appendChild(creadiv);
        creadiv.classList.add('toastd');
        if (msg.includes('Error')) {
            creadiv.classList.add('Error')
        }
        if (msg.includes('Invalid')) {
            creadiv.classList.add('Invalid')
        }

        setTimeout(() => {
            creadiv.remove()
        }, 5000);


    }
    return (
        <>
            <div className="button" id="button">
                <button onClick={Showtos}>Success</button>
                <button onClick={Showtos}>Error</button>
                <button onClick={Showtos}>Invalid</button>
            </div>
            <div className="toastboxs" id="toastbox" ></div>
        </>
    );
}

export default ToastNotification;
