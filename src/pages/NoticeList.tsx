import React, { useEffect } from 'react';
import axios from 'axios';

const NoticeList = () => {

    useEffect(() => {
        axios.get('http://localhost:8080/apiTest')
        .then((Response)=>{
            console.log(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
    }, [])
    
    return (
        <div>
            나는리스트
        </div>
    );
};

export default NoticeList;