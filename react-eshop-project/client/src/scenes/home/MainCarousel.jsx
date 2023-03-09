import React from 'react';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// Nuotraukos
import img1 from '../../assets/biking-1.jpg'
import img2 from '../../assets/biking-2.jpg'
import img3 from '../../assets/biking-3.jpg'
import img4 from '../../assets/biking-4.jpg'
import img5 from '../../assets/biking-5.jpg'
import img6 from '../../assets/biking-6.jpg'
const allImages = [img1, img2, img3, img4, img5, img6];


// Karuselės nustatymai ekrano dydžiui

const MainCarousel = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");


    return (
        <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}

            // Prev-Arrow
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",
                    }}
                >
                    <NavigateBeforeIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}

            // Next-Arrow
            renderArrowNext={(onClickHandler, hasNext, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",
                    }}
                >
                    <NavigateNextIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}
        >
            {allImages.map((image, i) => (
                <Box>
                    <img
                        src={image}
                        alt={`imge-${i}`}
                        style={{
                            width: '100%',
                            height: '700px',
                            objectFit: 'cover',
                            marginTop: '60px',
                            backgroundAttachment: "fixed",
                            opacity: "0.85"
                        }}
                    />
                    <Box
                        color="white"
                        padding="20"
                        textAlign="left"
                        backgroundColor="rgba(0, 0, 0, 0.5)"
                        position="absolute"
                        top="70%"
                        left={isNonMobile ? '10%' : '0'}
                        maxWidth={isNonMobile ? undefined : '500px'}
                        width="800px"
                        height={isNonMobile ? "150px" : "110px"}
                    >
                        <Typography 
                        variant="h1" 
                        fontSize={isNonMobile ? 40 : 20}
                        marginTop="1.5rem"
                        marginLeft="10px"
                        >ARE YOU READY TO EXPLORE?</Typography>
                        <Typography 
                        variant='h5'
                        display="block"
                        borderBottom="1px solid"
                        width="740px"
                        mt="10px"
                        ml="10px"
                        fontSize={isNonMobile ? 20 : 14}
                        >
                            New Arrivals 
                        </Typography>
                    </Box>
                </Box>
            ))}


        </Carousel>
    );
};

export default MainCarousel;