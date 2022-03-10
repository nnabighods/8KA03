import React from "react";

import { MdDashboard } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

 
import { Button } from "ui/buttons";
import {SideBarStyles, SideBarHeader} from './styles'
import ProductOptions from "./ProductOptions";

function SideBar(props) {
  function onLogOutRequest(e) {
    signOut(auth);
  }

  return (
    <SideBarStyles>

      <SideBarHeader>
        <MdDashboard size="1.75rem"/>
        <h2>Dashboard</h2>
      </SideBarHeader>

      <ProductOptions/>
  
      <Button
        onClick={onLogOutRequest}
        padding="0.125rem 0.5rem"
        fs="12px"
        margin="4rem 0"
        width="max-content"
      >
        log out
      </Button>

    </SideBarStyles>
  );
}

export default SideBar;
