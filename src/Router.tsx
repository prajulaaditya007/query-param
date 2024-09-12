import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Home from "./routes/Home";
import Ubuntu from "./routes/Ubuntu";
import Fedora from "./routes/Fedora";
import ArchLinux from "./routes/ArchLinux";
import FallBackPage from "./routes/FallBackPage";
import OpenSuse from "./routes/OpenSuse";

const Router = () => {
  const [searchParams] = useSearchParams(); // Get URL query parameters
  const navigate = useNavigate();

  const route = searchParams.get("route");

  useEffect(() => {
    // Redirect to home if no route is specified
    if (!route) {
      navigate("/?route=home", { replace: true });
    }
  }, [route, navigate]);

  function getRouteComponent() {
    switch (route) {
      case "home":
        return <Home />;
      case "ubuntu":
        return <Ubuntu />;
      case "fedora":
        return <Fedora />;
      case "arch-linux":
        return <ArchLinux />;
      case "open-suse":
        return <OpenSuse />;
      default:
        return <FallBackPage />;
    }
  }

  return (
    <>
      {/* Basic layout or header/footer can go here */}
      {getRouteComponent()}
    </>
  );
};

export default Router;
