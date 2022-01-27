import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Detail.css'

const DetailView = ({ info, onBackButton, latitude, longitude, google }) => {              

    const infoJson = JSON.parse(info);
    return (
        <>
            <Grid container spacing={2} className='box'>
                <Grid item xs={12} md={6}>
                    <Typography gutterBottom variant="h3" className="text">
                        Detalhe da Pessoa
                    </Typography>
                    <p>
                        <img src={infoJson.image} />
                    </p>
                    <p>
                        <Typography gutterBottom variant="body" className="text">
                            Nome: {infoJson.firstName} {infoJson.lastName}
                        </Typography>
                    </p>
                    <p>
                        <Typography gutterBottom variant="body" className="text">
                            Telefone: {infoJson.phone}
                        </Typography>
                    </p>
                    <p>
                        <Typography gutterBottom variant="body" className="text">
                            Endereço: {infoJson.address}
                        </Typography>
                    </p>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Map google={google} zoom={5} className="maps"
                        initialCenter={{ lat: infoJson.latitude, lng: infoJson.longitude }}>
                        <Marker
                            key={1}
                            name={"My Position"}
                            position={{ lat: infoJson.latitude, lng: infoJson.longitude }}
                        />
                    </Map>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant="contained" onClick={() => onBackButton()}>Voltar</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAPS_KEY
})(DetailView);