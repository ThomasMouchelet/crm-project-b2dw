import { Alert } from "@mui/material";

const StatusRow = ({params}) => {
    const severity = {
        PAID: "success",
        SENT: "warning"
    }

    return ( 
        <Alert severity={severity[params.row.status]}>
            {params.row.status}
        </Alert>
     );
}
 
export default StatusRow;