import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import { Provider } from "react-redux";
import initStore from "./redux/store.redux";
// import { ToastContainer } from "react-toastify";
require("dotenv").config();

const store = initStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <ToastContainer /> */}
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
