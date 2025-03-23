import React from 'react'
import Alerts from './Alert'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import google from "../assets/google.png";
import Dialogbox from './Dialogbox';


const Page = () => {
    return (
        <div >
            <Container>
                <Alerts />
                {/* banner section */}
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "40px" }}>
                    <Box sx={{ width: "50%" }}>
                        <h1>Slack is where the future works</h1>
                        <Typography sx={{ width: "80%" }}>Transform the way you work with one place for everyone and everything you need to get stuff done. Slack Connect channels let you work with your most valued customers, partners and agencies as closely (and as securely) as you work with your own team.</Typography>
                        <Box sx={{ display: "flex", gap: "10px", marginTop: "30px" }}>
                            <Button variant="contained" sx={{ bgcolor: "#642067", padding: "10px 16px" }}> TRY FOR FREE</Button>
                            <Button variant='contained' sx={{ padding: "10px 16px" }}> <img src={google} alt="google img" style={{ width: "25px", marginRight: "10px" }} /> SIGN UF WITH GOOGLE</Button>
                        </Box>
                    </Box>
                    <Box sx={{ width: "50%" }}>
                        <video
                            src="https://a.slack-edge.com/bb974f1/marketing/img/features/hero/refresh/01-channels.IN.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "cover" }}
                        />
                    </Box>
                </Box>

                {/* brands */}
                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "80px" }}>
                    <img style={{ width: "135px" }} src="https://download.logo.wine/logo/Fox_Corporation/Fox_Corporation-Logo.wine.png" alt="company logos" srcset="" />
                    <img style={{ width: "135px" }} src="https://download.logo.wine/logo/Lonely_Planet/Lonely_Planet-Logo.wine.png" alt="company logos" srcset="" />
                    <img style={{ width: "135px" }} src="https://download.logo.wine/logo/Intuit/Intuit-Logo.wine.png" alt="company logos" srcset="" />
                    <img style={{ width: "135px" }} src="https://download.logo.wine/logo/Veritas_Technologies/Veritas_Technologies-Logo.wine.png" alt="company logos" srcset="" />
                    <img style={{ width: "135px" }} src="https://download.logo.wine/logo/Belkin/Belkin-Logo.wine.png" alt="company logos" srcset="" />
                    <img style={{ width: "135px" }} src="https://download.logo.wine/logo/Planar_Systems/Planar_Systems-Logo.wine.png" alt="company logos" srcset="" />
                </Box>

                {/* lower banner */}
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "80px", paddingBottom:"30px" }}>
                    <Box sx={{ width: "50%" }}>
                        <video
                            src="https://a.slack-edge.com/d20cf6d/marketing/img/features/ai/lp/df/ui/video-ui-ai-03.IN.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "cover" }} 
                        />
                    </Box>
                    <Box sx={{ width: "45%" }}>
                        <h2 style={{fontSize:"2rem"}}>Now is your moment to build a better tomorrow</h2>
                        <Typography sx={{ width: "90%" }}>Transform the way you work with one place for everyone and everything you need to get stuff done. Slack Connect channels let you work with your most valued customers, partners and agencies as closely (and as securely) as you work with your own team.</Typography>
                        <Box sx={{ marginTop: "30px" }}>
                            <Button variant="outlined" sx={{ borderColor: "#642067", color:"#642067", padding: "10px 16px" }}> WATCH VIDEO</Button>
                           
                        </Box>
                    </Box>

                </Box>
                <Dialogbox/>
            </Container>
        </div>
    )
}

export default Page