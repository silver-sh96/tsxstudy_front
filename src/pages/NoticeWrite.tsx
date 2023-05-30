import React from 'react';
import Table from 'react-bootstrap/Table';

const NoticeWrite = () => {
    return (
        <div style={{padding:"20px"}}>
            <form>
                <Table bordered>
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input/>
                            </td>
                        </tr>
                        <tr>
                            <td>첨부파일</td>
                            <td>
                                <input/>
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <input/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </form>
        </div>
    );
};

export default NoticeWrite;