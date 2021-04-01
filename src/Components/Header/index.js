import React from 'react';
import "./styles.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Search from "@material-ui/icons/Search";
import HealpOutLineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar className="header_avatar" alt='Anu' src='' />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                <Search />
                <input placeholder="Search" />
            </div>
            <div className="header_right">
                <HealpOutLineIcon />
            </div>
        </div>
    );
};

export default Header;