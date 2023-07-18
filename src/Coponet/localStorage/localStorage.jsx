import { useEffect, useState } from "react";

function getsavedata(key, value) {
    const savedata = JSON.parse(localStorage.getItem(key))
    if (savedata) return savedata
    return value;}

const LocalStorage = (key, value) => {
    const [updatevalue, setvalue] = useState(() => {
        return getsavedata(key, value)

    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(updatevalue))
    }, [updatevalue]);
    return [updatevalue,setvalue]
};

export default LocalStorage;