import { Route, Routes } from "react-router-dom";
import InvoiceListePage from "../pages/InvoiceListePage"
import InvoiceForm from "../pages/InvoiceForm"
import CustomerListePage from "../pages/CustomerListePage"

const MainRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<InvoiceListePage />} />
            <Route path="/invoices/:id" element={<InvoiceForm />} />
            <Route path="/invoices/create" element={<InvoiceForm />} />
            <Route path="/customers" element={<CustomerListePage />} />
        </Routes>
     );
}
 
export default MainRouter;