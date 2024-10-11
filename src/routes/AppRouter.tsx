import Main from "@/pages/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Main />} path="/" />
      </Routes>
    </Router>
  );
};

export default AppRouter;
