import { Box, Button, TextField, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import StatusRow from "../components/table/StatusRow";

const invoices = [
    {
        id: 1,
        customer: {
            firstname: "John",
            lastname: "Doe",
        },
        amount: 500,
        sentAt: "2021-01-01",
        status: "SENT",
    },
    {
        id: 2,
        customer: {
            firstname: "Jane",
            lastname: "Doe",
        },
        amount: 1000,
        sentAt: "2021-01-02",
        status: "PAID",
    },
]

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { 
        field: 'customer', headerName: 'Client', width: 130,
        valueGetter: (params) => 
            `${params.row.customer.firstname} ${params.row.customer.lastname}`,
    },
    { 
        field: 'sentAt', headerName: 'Date d\'envoie', width: 130,
        
     },
    { 
        field: 'status', headerName: 'Status', width: 90,
        valueGetter: (params) => <StatusRow params={params} />
    },
    { field: 'amount', headerName: 'Montant', width: 160 },
];

const InvoiceListePage = () => {
    return ( 
        <Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography variant="h2">Liste des factures</Typography>
                <Button variant="contained">Nouvelle facture</Button>
            </Box>
            <Box component="form">
                <TextField 
                    variant="outlined" 
                    label="Recherche" 
                    sx={{width: "100%"}}
                />
            </Box>
            <Box
                sx={{
                    height: 400, 
                    width: '100%',
                    mt: 4
                }}
            >
                <DataGrid
                    rows={invoices}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </Box>
        </Box>
     );
}
 
export default InvoiceListePage;