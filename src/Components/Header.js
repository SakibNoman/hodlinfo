import React from 'react';
import logo from '../images/HODLINFO.8f78fc06.png';

const Header = () => {
    return (
        <div>
            <div>
                <img className="logo" src={logo} alt="" />
                <p className="" >Powered By <span>Finstreet</span> </p>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Header;