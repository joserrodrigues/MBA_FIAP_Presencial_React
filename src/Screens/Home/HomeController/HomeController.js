import React, { useEffect, useRef, useState } from 'react';
import useAPI from '../../../Services/APIs/Common/useAPI';
import persons from '../../../Services/APIs/Persons/persons';
import HomeView from './HomeView';
import { geolocated } from "react-geolocated";
import { useNavigate } from 'react-router-dom';
import Header from '../../../Component/Header/Header';

const HomeController = ({ coords, isGeolocationAvailable, isGeolocationEnabled }) => {

    const getPersonsGetAPI = useAPI(persons.getAllPersons);
    const userCoordinates = useRef(null);
    const navigate = useNavigate();

    if(isGeolocationAvailable &&
       isGeolocationEnabled && coords !== null && coords !== undefined) {
        console.log(coords.latitude + " - " + coords.longitude);
        userCoordinates.current = coords;
    }

    const onChangePage = (info) => {
        navigate("Detail/" + info.id,{
            state: {
                info: JSON.stringify(info)
            }
        });      
    }

    const onAddPage = (info) => {
        navigate("Add/",{
            state: {
                latitude: userCoordinates.current.latitude,
                longitude: userCoordinates.current.longitude
            }
        });
    }    

    const getDataPage = (query) => {
        return new Promise((resolve, reject) => {
            console.log(query);

            let page = query.page + 1
            let info = `page=${page}&perPage=${query.pageSize}`;
            if (query.orderBy !== undefined && query.orderBy !== ""){
                info += `&orderBy=${query.orderBy.field}`
            }
            if (query.orderDirection !== undefined && query.orderDirection !== "") {
                info += `&orderDirection=${query.orderDirection}`
            }
            if (query.search !== undefined && query.search !== "") {
                info += `&search=${query.search}`
            }
            getPersonsGetAPI.requestPromise(info)
            .then(info => {
                console.log(info);
                resolve({
                    data: info.persons,
                    page: info.page-1,
                    totalCount: info.totalItems
                });
            })
            .catch(error => {
                console.log(error);
            })
        })
    }

    return (
        <>
            <Header />
            <HomeView person={getPersonsGetAPI.data} loading={getPersonsGetAPI.loading}
                onChangePage={onChangePage}
                onAddPage={onAddPage}
                getDataPage={getDataPage} />    
        </>
    );
        
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(HomeController);
