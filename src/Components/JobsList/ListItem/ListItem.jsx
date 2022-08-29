import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Cstepper from "./Cstepper";
import './styles.css'

export function ListItem({ data }) {
    return (
        <Container sx={{ margin: '2rem auto 2rem auto' }}>
            <Card variant="outlined" className="Item">
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: "row" },
                        justifyContent: 'space-between'
                    }}>
                    <Container
                        disableGutters={true}
                        sx={{ width: "65%", display: "flex", flexDirection: 'row' }}>
                        <div>
                            <img style={{ width: "2rem", height: "2rem", borderRadius: "50%" }} src={data.src} alt={data.c_name}/>
                        </div>
                        <div>
                            <Typography variant="h5" component="div" fontWeight='bold' align="left">
                                {data.c_name}
                            </Typography>
                            <Typography color="text.secondary" align="left">
                                {data.d_name}
                            </Typography>
                        </div>
                    </Container>
                    <Container disableGutters={true}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            width: { xs: '25%', md: '25%' },
                        }}>
                        <Typography sx={{ mt: '3%' }} color="text.secondary" component="span">
                            {data.date}
                            {''}
                        </Typography>
                        <Typography sx={{ mt: '3%' }} color="text.primary" component="span">
                            {data.status}
                            {''}
                        </Typography>
                        <span style={{
                            position: 'relative',
                            width: '.75rem',
                            height: '.75rem',
                            borderRadius: '50%',
                            backgroundColor: (data.status) === 'Active' ? 'green' : 'red',
                            marginTop: '5%'
                        }}></span>
                    </Container>
                </CardContent>
                <CardContent>
                    <Cstepper progress={data.progress} />
                </CardContent>
            </Card>
        </Container >
    )
}
