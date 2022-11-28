import { Alert } from "@mui/material";

const StatusRow = ({params}) => {
    const severity = {
        paid: "success",
        send: "warning"
    }

    return ( 
        <Alert severity={severity[params.row.status]}>
            {params.row.status}
        </Alert>
     );
}
 
export default StatusRow;