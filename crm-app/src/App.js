import InvoiceListePage from "./pages/InvoiceListePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerListePage from "./pages/CustomerListePage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
            <Route path="/" element={<InvoiceListePage />} />
            <Route path="/customers" element={<CustomerListePage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
