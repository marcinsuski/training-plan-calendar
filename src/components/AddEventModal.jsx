import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import { Box } from "@mui/system";
import { Button, FormControl, TextareaAutosize, Typography } from "@mui/material";

const AddEventModal = ({ isOpen, onClose, title, onSubmit, setTitle }) => {
 

    return (
        <>
            <Modal
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    content: {
                        position: "relative",
                        maxWidth: "900px",
                        width: "90%",
                        height: "max-content",
                        //   top: '40px',
                        //   left: '40px',
                        //   right: '40px',
                        //   bottom: '40px',
                        border: "1px solid #ccc",
                        background: "#fff",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "5px",
                        padding: "20px",
                        zIndex: 10,
                    },
                }}
                isOpen={isOpen}
                onRequestClose={onClose}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{ borderBottom: "1px solid #cccccc" }}
                        mb={1}
                        pb={2}
                    >
                        <Typography variant="h5" color="#111111">
                            Szczegóły wydarzenia
                        </Typography>
                    </Box>

                    <FormControl>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={8}
                            placeholder="title"
                            style={{ width: "100%", margin: "1rem 0" }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Box
                            sx={{
                                width: "100%",
                                borderTop: "1px solid #cccccc",
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                            mt={1}
                            pt={2}
                            gap="1rem"
                        >
                            <Button variant="outlined" color="error">
                                Delete
                            </Button>
                            <Button variant="contained" color="primary"  onClick={onSubmit}>
                                Add event
                            </Button>
                        </Box>
                    </FormControl>
                </Box>
            </Modal>
        </>
    );
};

export default AddEventModal;
