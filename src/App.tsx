import PrimaryLayout from "hoc/PrimaryLayout";
import ErrorPage from "pages/ErrorPage";
import OrderGatewayPage from "pages/OrderGatewayPage";
import OrderNotFoundPage from "pages/OrderNotFoundPage";
import ConfirmationSuccessPage from "pages/ConfirmationSuccessPage";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/:orderGuid" element={
        <PrimaryLayout>
          <OrderGatewayPage />
        </PrimaryLayout>
      } />
      <Route path="/confirmation-success" element={<ConfirmationSuccessPage />} />
      <Route path="/order/not-found" element={<OrderNotFoundPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<OrderNotFoundPage />} />
    </Routes>
  )
}

export default App;