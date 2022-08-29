import React from "react";
import { Container, Typography } from '@mui/material'
import { customStyle } from "./styles";
import ListItem from "./ListItem";

export default function Upcoming() {
    return (
        <Container sx={customStyle.container}>
            <Typography variant="h4" gutterBottom>
                Upcomming events
            </Typography>
            <ListItem />
        </Container>
    )
}