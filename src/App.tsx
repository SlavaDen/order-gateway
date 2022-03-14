import OrderGatewayPage from "pages/OrderGatewayPage";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<OrderGatewayPage />} />
    </Routes>
  )
}

export default App;