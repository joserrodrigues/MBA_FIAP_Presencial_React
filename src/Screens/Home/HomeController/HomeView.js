import React, { useContext }  from 'react';
import { Grid, Typography} from '@mui/material';
import MaterialTable from 'material-table';
import './Home.css'
import CustomButton from '../../../Component/CustomButton/CustomButton';
import { InfoContext } from "../../../store/InfoContext";


export default function HomeView({ loading, onChangePage, getDataPage, onAddPage }) {

    let name = "";

    const context = useContext(InfoContext);
    const columns = [
        {title: 'SobreNome', field: 'lastName',},
        { title: 'Nome', field: 'firstName' },
        { title: 'Telefone', field: 'phone' }
    ];

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center">         
            <Typography xs={12} gutterBottom variant="h3" className="text">
                Lista de Pessoas, {context.info}
            </Typography>
            <Grid item xs={12} className='divTopButton'>
                <CustomButton onClick={onAddPage}>Adicionar Pessoa</CustomButton>
            </Grid>      
            <Grid item xs={12} className='divTopButton'>
                <MaterialTable
                    xs={12}
                    title="Remote Data Preview"
                    columns={columns}
                    className="customTable"
                    data={getDataPage}
                    isLoading={loading}
                    actions={[
                        {
                            icon: 'visibility',
                            tooltip: 'See Detail',
                            onClick: (event, rowData) => {
                                onChangePage(rowData)
                            }
                        }
                    ]}
                    options={{
                        showTitle: false,
                        search: true,
                        actionsColumnIndex: -1,
                        headerStyle:{
                            backgroundColor: '#555',
                            color: '#ed145b',
                        },
                        rowStyle: {
                            color: '#ed145b'
                        },
                        searchFieldStyle: {
                            color: '#ed145b',
                            borderBottom: '2px solid #333',
                        }
                    }}
                    
                />
            </Grid> 
        </Grid>
    );
}