import React from "react";
import { ListItem } from "./ListItem/ListItem";
import { Container, Typography } from "@mui/material";
import '../Navbar/styles.css'
import { data } from './data.js'

export default function JobsList() {
    return (
        <Container
            sx={{
                bgcolor: 'red',
                padding: '2rem',
            }}
            className="container applied-section"
        >
            <Typography variant="h3">
                Applications
            </Typography>
            {data.map((item) => (<ListItem key={item.id} data={item} />))}
        </Container>
    );
}
