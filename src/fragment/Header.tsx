import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{padding:"20px 0px 0px 20px"}}>
            <Link to={'/'}>
                <Button variant="primary" style={{marginRight:"5px"}}>목록</Button>
            </Link>
            <Link to={'/write'}>
                <Button variant="primary">작성</Button>
            </Link>
        </div>
    );
};

export default Header;