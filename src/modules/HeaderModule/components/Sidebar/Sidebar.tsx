import React, { useState } from 'react';
import { MdViewHeadline, MdCategory, MdPublishedWithChanges } from "react-icons/md";
import './Sidebar.styles.scss';
import { Sidebar as ImportedSidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';

const Sidebar = () => {
    const [active, setActive] = useState(false)
    return (
        <>
        <ProSidebarProvider>
            <div className='Sidebar_Icon'>
                    <MdViewHeadline onClick={() => setActive(!active)}/>
                </div>
                <div className={`Sidebar ${active ? 'active': null}`}>
                    
                <ImportedSidebar rtl={true}>
                    <Menu>
                        <SubMenu label="Charts" icon={<MdPublishedWithChanges/>}>
                        <MenuItem icon={<MdCategory/>}> Pie charts </MenuItem>
                        <MenuItem icon={<MdPublishedWithChanges/>}> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem icon={<MdPublishedWithChanges/>}> Documentation </MenuItem>
                        <MenuItem icon={<MdPublishedWithChanges/>}> Calendar </MenuItem>
                    </Menu>
                </ImportedSidebar>
            </div>

        </ProSidebarProvider>

        </>

    );
};

export default Sidebar;