import { styled, Box } from "@mui/material";
import { shades } from "../../theme";


// NAVBAR

export const NavbarLayoutStyle = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '60px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
})

// Styles to pass in sx

export const iconColor = {
    color: 'black'
}

export const badgeStyle = {
    "& .MuiBadge-badge": {
        right: 5,
        top: 5,
        padding: "0 4px",
        height: "14px",
        minWidth: "10px",
      },
}

// CART

export const FlexBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const Overlay = styled(Box)({
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    zIndex: "10",
    width: "100%",
    height: "100%",
    overflow: "auto"
})

export const Modal = styled(Box)({
    position: "fixed",
    right: "0",
    bottom: "0",
    width: "max(400px, 30%)",
    height: "100%",
    backgroundColor: "white",
})

export const ModalContent = styled(Box)({
    padding: "30px",
    overflow: "auto",
    height: "100%",
})

// Styles to pass in sx

export const buttonStyle = {
    backgroundColor: shades.primary[400],
    color: "white",
    borderRadius: 0,
    minWidth: "100%",
    padding: "20px 40px",
    margin: "20px 0",
}