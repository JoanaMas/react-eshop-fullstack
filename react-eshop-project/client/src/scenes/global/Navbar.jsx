import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton } from '@mui/material';
import * as styled from './styled';
import { MenuOutlined, PersonOutline, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material';

// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';

const Navbar = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

  return (
    <styled.NavbarLayoutStyle>
      <styled.NavbarInnerBox>

        {/* Logo */}
        <styled.LogoBox onClick={() => navigate("/")}
        >
            BIKES E-COMMERCE
        </styled.LogoBox>

        {/* Icons */}
        <styled.IconBox>
            <IconButton sx={styled.iconColor}>
              <SearchOutlined/>
            </IconButton>
            <IconButton sx={styled.iconColor}>
              <PersonOutline />
            </IconButton>
            <IconButton sx={styled.iconColor}>
              <ShoppingBagOutlined />
            </IconButton>
            <IconButton sx={styled.iconColor}>
              <MenuOutlined />
            </IconButton>
        </styled.IconBox>

        
      </styled.NavbarInnerBox>
    </styled.NavbarLayoutStyle>
  );
};

export default Navbar;