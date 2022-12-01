import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import invoiceService from "../../../setup/services/invoice.service";

const ActionsRow = ({params, fetchInvoices}) => {

    const handleDelete = async (e) => {
        e.stopPropagation()
        try {
            await invoiceService.remove(params.id)
            fetchInvoices()
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <Box display="flex" justifyContent="space-around">
            <Link to={`/invoices/${params.row._id}`} style={{textDecoration: "none"}}>
                <Button variant="contained" color="primary" size="small">
                    Editer
                </Button>
            </Link>
            <Button variant="contained" color="secondary" size="small" sx={{ml: 2}} onClick={handleDelete}>
                Supprimer
            </Button>
        </Box>
     );
}
 
export default ActionsRow;