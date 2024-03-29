import {Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signup" element={<SignUpPage/>}/>
    </Routes>
  );
};

export default AuthRoutes;