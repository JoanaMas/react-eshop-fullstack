import React from 'react';
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { shades } from "../../theme";
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from "../../state";
import { useNavigate } from 'react-router-dom';
import * as styled from './styled';


const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price
    }, 0)


    return (


        // OVERLAY
        <styled.Overlay
        display={isCartOpen ? "block" : "none"}
        >

        {/* MODAL */}
        <styled.Modal>
        
        {/* INSIDE THE MODAL */}
        <styled.ModalContent
        >

        {/* HEADER - INSIDE THE MODAL */}
        <styled.FlexBox mb="15px">  
            <Typography variant="h3">SHOPPING BAG ({cart.lenght})</Typography>
            <IconButton
            onClick={() => dispatch(setIsCartOpen({}))}
            ><CloseIcon /></IconButton>
        </styled.FlexBox>

        {/* CART LIST */}
        <Box>
            {cart.map((item) => (
                <Box key={`${item.attributes.name}-${item.id}`}>
                    <styled.FlexBox p="15px 0">

                        <Box flex="1 1 40%">
                            <img 
                            alt={item?.name}
                            width="123px"
                            height="164px"
                            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                            />
                        </Box>

                        <Box flex="1 1 60%">

                            {/* ITEM NAME - DELETE BUTTON */}
                           <styled.FlexBox mb="5px">
                                <Typography fontWeight="bold">
                                    {item.attributes.name}
                                </Typography>
                                <IconButton onClick={() => dispatch(removeFromCart({id: item.id}))}>
                                    <DeleteForeverIcon />
                                </IconButton>
                           </styled.FlexBox>

                           <Typography>{item.attributes.shortDescription}</Typography>
                           
                            {/* AMOUNT - ADD/REMOVE ITEM */}
                           <styled.FlexBox m="15px 0">
                                <Box 
                                display="flex" 
                                alignItems="center" 
                                border={`1.5px solid ${shades.neutral[500]}`}>

                                    {/* REMOVE ITEM */}
                                    <IconButton
                                    onClick={() => dispatch(decreaseCount({id: item.id }))}
                                    >
                                    <DeleteForeverIcon />
                                    </IconButton>
                                    <Typography>{item.count}</Typography>
                                    
                                    {/* ADD ITEM */}
                                    <IconButton
                                    onClick={() => dispatch(increaseCount({id: item.id }))}
                                    >
                                    <AddIcon />
                                    </IconButton>
                                </Box>

                            {/* PRICE */}
                            <Typography fontWeight="bold">{item.attributes.price}</Typography>
                           </styled.FlexBox>
                        </Box>
                    </styled.FlexBox>
                    <Divider />
                </Box>
            ))}
        </Box> {/* CART LIST END */}
            
                {/* ACTIONS */}
                <Box m="20px 0">
                    <styled.FlexBox>
                        <Typography fontWeight="bold">SUBTOTAL</Typography>
                        <Typography fontWeight="bold">{totalPrice}</Typography>
                    </styled.FlexBox>

                    <Button
                    onClick={() => {
                        navigate("/checkout")
                        dispatch(setIsCartOpen({}))    
                    }}
                    sx={styled.buttonStyle}
                    >
                        CHECKOUT
                    </Button>

                </Box>

        </styled.ModalContent>
        </styled.Modal>
        </styled.Overlay>
    )
};

export default CartMenu;