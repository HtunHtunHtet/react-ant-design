import {Menu} from "antd";
import logo from "../images/logo.png";
import React from "react";


export default function MenuHeader () {
    return(
        <Menu
            mode="horizontal"
            defaultSelectedKeys={['4']}
            style={{
                lineHeight: '64px',
                backgroundColor: 'transparent',
                position: "absolute",
                zIndex: 1

            }}
        >

            <Menu.Item className={"logo-container"}>
                <img src={logo} alt="logo" style={{
                    width: 40,
                    borderBottom: 0
                }}/>
            </Menu.Item>
        </Menu>
    )
}
