import React, { useState, useEffect } from "react";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Alerts = () => {
    const [open, setOpen] = useState(true); // State to control alert visibility

    // Ensure alert is visible on page load
    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <>
            {open && (
                <Alert
                    variant="filled"
                    severity="none" // You can change this to "success", "warning", or "error"
                    action={
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => setOpen(false)} // Hide alert on click
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: "50px", // Curved edges
                        backgroundColor: "#0064a0", // Custom background color (Teal Dark)
                        color: "white", // Text color
                        fontSize: "16px",
                        marginTop:"10px",
                        padding: "15px 16px", // Better padding
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for effect
                    }}
                >
                    Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.
                </Alert>
            )}
        </>
    );
};

export default Alerts;
