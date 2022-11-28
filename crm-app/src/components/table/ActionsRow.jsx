import { Box, Button } from "@mui/material";

const ActionsRow = ({params}) => {

    const handleEdit = (e) => {
        e.stopPropagation()
        console.log("Edit", params.row._id);
        // TODO: Redirect to edit page
    }

    // Delete
    // fetch delete request
    // refresh data

    return ( 
        <Box display="flex" justifyContent="space-around">
            <Button variant="contained" color="primary" size="small" onClick={handleEdit}>
                Editer
            </Button>
            <Button variant="contained" color="secondary" size="small" sx={{ml: 2}}>
                Supprimer
            </Button>
        </Box>
     );
}
 
export default ActionsRow;