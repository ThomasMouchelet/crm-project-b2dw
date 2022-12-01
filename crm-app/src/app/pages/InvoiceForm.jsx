import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import invoiceService from "../../setup/services/invoice.service";

const InvoiceForm = () => {
    const { id } = useParams();
    const [ credantials, setCredantials ] = useState({})
    const [ editMode ] = useState(id ? true : false)

    useEffect(() => {
        console.log(id);
        if(editMode) fetInvoice()
    }, [id])

    const fetInvoice = async (e) => {
        try {
            const invoice = await invoiceService.findOneById(id)
            setCredantials(invoice)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editMode ? "update" : "create";

        try {
            await invoiceService[method](credantials)
        } catch (error) {
            console.log(error)
        }
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