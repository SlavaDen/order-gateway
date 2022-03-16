import PrimaryLayout from "hoc/PrimaryLayout";
import ContentMiddleLayout from "hoc/ContentMiddleLayout";
import ErrorPage from "pages/ErrorPage";
import GatewayPage from "pages/GatewayPage";
import OrderNotFoundPage from "pages/OrderNotFoundPage";
import ConfirmationSuccessPage from "pages/ConfirmationSuccessPage";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/:orderGuid"
        element={
          <PrimaryLayout>
            <GatewayPage />
          </PrimaryLayout>
        }
      />
      <Route
        path="/confirmation-success"
        element={
          <ContentMiddleLayout>
            <ConfirmationSuccessPage />
          </ContentMiddleLayout>
        }
      />
      <Route
        path="/order/not-found"
        element={
          <ContentMiddleLayout>
            <OrderNotFoundPage />
          </ContentMiddleLayout>
        }
      />
      <Route
        path="/error"
        element={
          <ContentMiddleLayout>
            <ErrorPage />
          </ContentMiddleLayout>
        }
      />
      <Route
        path="*"
        element={
          <ContentMiddleLayout>
            <OrderNotFoundPage />
          </ContentMiddleLayout>
        }
      />
    </Routes>
  )
}

export default App;