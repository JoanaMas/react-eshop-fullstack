import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, IconButton } from '@mui/material';
import * as styled from './styled';
import { MenuOutlined, PersonOutline, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../state'



const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)


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

            <Badge
              badgeContent={cart.length}
              color='secondary'
              invisible={cart.length === 0}
              sx={styled.badgeStyle}
            >
            <IconButton 
            onClick={() => dispatch(setIsCartOpen({}))}
            sx={styled.iconColor}
            >
              <ShoppingBagOutlined />
            </IconButton>
            </Badge>

            <IconButton sx={styled.iconColor}>
              <MenuOutlined />
            </IconButton>
        </styled.IconBox>

        
      </styled.NavbarInnerBox>
    </styled.NavbarLayoutStyle>
  );
};

export default Navbar;