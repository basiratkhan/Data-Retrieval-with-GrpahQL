import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex pa1 justify-between nowrap orange">
            <div className="flex flex-fixed black">
                <div className="fw7 mr1">Links Detail</div>
                <Link to="/" className="ml1 no-underline black">
                    Straight
                </Link>
                <div className="ml1">|</div>
                <Link
                    to="/LinkListReversed"
                    className="ml1 no-underline black"
                >
                    Reversed
                </Link>
            </div>
        </div>
    );
};

export default Header;
