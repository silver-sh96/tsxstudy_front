import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const NoticeList = () => {

    type board = { 
        boardNum: number;
        boardTitle: string;
        boardWriter: string;
        boardContents: string;
        boardAttach: string;
        boardRegDate: string;
        boardMdfDate: string;  
    }
    const [boardList, setBoardList] = useState<board[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/boardList')
        .then((Response)=>{
            setBoardList(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
    }, [])
    
    return (
        <div style={{padding:"20px"}}>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th style={{width:"2%"}}>
                            <input type='checkbox'/>
                        </th>
                        <th style={{width:"8%"}}>글번호</th>
                        <th style={{width:"50%"}}>제목</th>
                        <th style={{width:"15%"}}>작성자</th>
                        <th style={{width:"15%"}}>작성일</th>
                        <th style={{width:"10%"}}>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((bl, idx)=>(
                        <tr key={idx}>
                            <td>
                                <input type='checkbox'/>
                            </td>
                            <td>{idx+1}</td>
                            <td>{bl.boardTitle}</td>
                            <td>{bl.boardWriter}</td>
                            <td>{bl.boardRegDate}</td>
                            <td>ooo</td>  
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default NoticeList;