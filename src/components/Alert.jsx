import React, { useState, useEffect } from "react";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Alerts = () => {
    const [open, setOpen] = useState(true); 

  
    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <>
            {open && (
                <Alert
                    variant="filled"
                    severity="none"
                    action={
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => setOpen(false)} 
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: "50px", 
                        backgroundColor: "#0064a0", 
                        color: "white", 
                        fontSize: "16px",
                        marginTop:"10px",
                        padding: "15px 16px", 
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
                    }}
                >
                    Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.
                </Alert>
            )}
        </>
    );
};

export default Alerts;
