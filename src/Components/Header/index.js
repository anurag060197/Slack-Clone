import React from 'react';
import "./styles.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Search from "@material-ui/icons/Search";
import HealpOutLineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../StateProvider";

const Header = () => {
    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <Avatar className="header_avatar" alt={user?.displayName} src={user?.photoURL} />
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