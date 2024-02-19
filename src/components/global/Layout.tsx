
import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


interface LayoutProps {
  children: React.ReactNode;
  menuCollapse : boolean;
  setMenuCollapse : React.Dispatch<React.SetStateAction<boolean>>
}

const Layout: React.FC<LayoutProps> = ({ menuCollapse, setMenuCollapse,children }) => {
  
  return (
    <>
      <Sidebar menuCollapse={menuCollapse} setMenuCollapse={setMenuCollapse} />
      <div className="content py-3 pl-3 sm:pr-8 pr-3">
        <Topbar menuCollapse={menuCollapse}/>
        {children}
      </div>
    </>
  );
};

export default Layout;
