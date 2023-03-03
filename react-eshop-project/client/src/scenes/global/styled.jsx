import { styled, Box } from "@mui/material";
import { shades } from "../../theme";

export const NavbarLayoutStyle = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100px',
    backgroundColor: '#ffffff',
    opacity: '0.9',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
})


export const NavbarInnerBox = styled(Box)({
    width: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const LogoBox = styled(Box)({
    cursor: 'pointer',
    fontSize: '12pt',
    color: shades.secondary[400],
    '&:hover': {
        color: shades.secondary[700],
    }
})

export const IconBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    zIndex: '2',
    color: '#080707'
})

// Styles to pass in sx

export const iconColor = {
    color: 'black'
}