import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RoutersComponent } from "./route";
import Layout from "./components/layout";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Box>
          <RoutersComponent />
        </Box>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
