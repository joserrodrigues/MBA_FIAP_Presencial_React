import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import DetailView from './DetailView';

const DetailController = () => {

    const { infoID } = useParams();
    let { state: { info } } = useLocation();

    console.log(info);

    let navigate = useNavigate();

    const onBackButton = () => {        
        navigate(-1);
    }

    return (
        <DetailView info={info} onBackButton={onBackButton} />
    );
};

export default DetailController;