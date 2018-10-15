import React from "react";
import { AppBar, UserMenu, MenuItemLink, translate } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";

const CustomUserMenu = translate(({ translate, ...props }) => (
  <UserMenu {...props}>
    <MenuItemLink
      to="/configuration"
      primaryText={translate("pos.configuration")}
      leftIcon={<SettingsIcon />}
    />
  </UserMenu>
));

/*

  
   <IconMenu color={white}
        iconButtonElement={
            <IconButton><ViewModule color={white} /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem key={1} primaryText="Application 1" />
        <MenuItem key={2} primaryText="Application 2" />
        <MenuItem key={3} primaryText="Application 3" />
    </IconMenu>

*/

const CustomAppBar = props => (
  <AppBar {...props} userMenu={<CustomUserMenu />} />
);

export default CustomAppBar;
