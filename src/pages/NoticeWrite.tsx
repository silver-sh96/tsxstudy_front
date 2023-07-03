import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const NoticeWrite = () => {

    const [boardTitle, setBoardTitle] = useState<string | null>();
    const [boardAttach, setBoardAttach] = useState<string | null>();
    const [boardContents, setBoardContents] = useState<string | null>();
    const boardWriter = "테스터";

    const onSelectFile =(e: any)=>{
        console.log(e.target.files);
    }

    const doWrite =()=>{
        console.log('boardTitle : '+ boardTitle);
        console.log('boardAttach : '+ boardAttach);
        console.log('boardContents : '+ boardContents);
        const formData = new FormData();
        
    }
    

    return (
        <div style={{padding:"20px"}}>
            <form>
                <Table bordered>
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input style={{width:"100%"}} 
                                       value={boardTitle || ''} 
                                       onChange={(e)=>setBoardTitle(e.target.value)} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>첨부파일</td>
                            <td>
                                <input type='file'
                                       multiple={true}
                                       onChange={onSelectFile} 
                                />
                            </td>
                        </tr>
                        <tr style={{height:"400px"}}>
                            <td>내용</td>
                            <td>
                                <textarea style={{width:"100%", height:"400px"}} 
                                          value={boardContents || ''} 
                                          onChange={(e)=>setBoardContents(e.target.value)} 
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </form>
            <div style={{display:"flex", justifyContent:"center"}}>
                <Button variant="primary" onClick={doWrite}>작성</Button>
            </div>
        </div>
    );
};

export default NoticeWrite;