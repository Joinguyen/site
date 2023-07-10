import {
  createBrowserRouter
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./screens/ErrorPage";
import PrivacyPolicy from "./screens/privacyPolicy";
import TermsAndConditions from "./screens/termsAndConditions";
import Home from "./screens/Home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "terms-and-conditions",
          element: <TermsAndConditions />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
        },
        
      ],
    },
  ]);
  export default router;