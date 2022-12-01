import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InvoiceForm = () => {
    const { id } = useParams();
    const [ credantials, setCredantials ] = useState({})
    const [ editMode ] = useState(id ? true : false)

    useEffect(() => {
        console.log(id);
        if(editMode) fetInvoice()
    }, [id])

    const fetInvoice = (e) => {
        fetch(`http://localhost:8000/api/invoices/${id}`)
            .then(response => response.json())
            .then(data => setCredantials(data))
    }

    const handleSubmit = (e) => {
        const method = editMode ? "PUT" : "POST";

        e.preventDefault();
        console.log(credantials);
        fetch(`http://localhost:8000/api/invoices/${editMode && id}`, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credantials)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredantials({
            ...credantials,
            [name]: value,
        })
    }

    return ( 
        <Box
            component="form"
            onSubmit={handleSubmit}
        >
            <FormControl>
                <TextField
                    label="Amount"
                    name="amount"
                    type="number"
                    onChange={handleChange}
                    value={credantials.amount || ""}
                />
            </FormControl>
            <FormControl>
                <Select
                    sx={{width: 300}}
                    value={credantials.status || ""}
                    label="Status"
                    onChange={handleChange}
                    name="status"
                >
                    <MenuItem value="send">Send</MenuItem>
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="cancel">Cancel</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit"> 
                { editMode ? "Modifier" : "Envoyer" }  
            </Button>
        </Box>
     );
}
 
export default InvoiceForm;