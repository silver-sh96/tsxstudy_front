import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={'/'}>
                <button>목록</button>
            </Link>
            <Link to={'/write'}>
                <button>작성</button>
            </Link>
        </div>
    );
};

export default Header;