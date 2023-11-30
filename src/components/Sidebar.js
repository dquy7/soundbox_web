import React, { useRef, useState } from 'react'
import './Sidebar.css'
import { FaBars, FaCreditCard, FaHome, FaInfo, FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { Button, useDisclosure } from '@chakra-ui/react';

const Sidebar = ({ children }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const toggle = () => setIsOpenSidebar(!isOpenSidebar);
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const statusAuth = useRef('login');

    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/search",
            name: "Search",
            icon: <FaSearch />
        },
        {
            path: "/library",
            name: "Library",
            icon: <FaCreditCard />
        },
        {
            path: "/contact",
            name: "Contact",
            icon: <FaInfo />
        }
    ];
    return (
        <div className="container-fluid">
            <div className="sidebar" style={{ width: isOpenSidebar ? "300px" : "50px" }}>
                <div className="top_section">
                    <h1 className="logo" style={{ display: isOpenSidebar ? "block" : "none" }}>Sound Box</h1>
                    <div className='bars' style={{ marginLeft: isOpenSidebar ? "30px" : "0px" }}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{ display: isOpenSidebar ? "block" : "none" }}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div className='content'>
                <Header />
                <main>
                    {children}
                </main>
                <Button 
                    colorScheme='teal'>
                        Abc
                    </Button>
                <div className='footer' style={{ background: '#ccc', height: 100,position: 'fixed',bottom:0,width:'100%' }}>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
