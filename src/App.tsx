import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </div>
  );
};

export default App;
