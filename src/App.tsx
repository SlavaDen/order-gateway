import OrderGatewayPage from "pages/OrderGatewayPage";
import OrderNotFoundPage from "pages/OrderNotFoundPage";
import OrderSuccessConfirm from "pages/OrderSuccessConfirmPage";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<OrderGatewayPage />} />
      <Route path="/success-confirm" element={<OrderSuccessConfirm />} />
      <Route path="/not-found" element={<OrderNotFoundPage />} />
    </Routes>
  )
}

export default App;