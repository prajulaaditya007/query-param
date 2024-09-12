import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const Home = () => {
  const navigate = useNavigate();
  const { contextId } = useContext(AppContext);

  function handleRoutes(route: string) {
    if (contextId) {
      navigate(`/?route=${route}&contextId=${contextId}`);
    } else {
      navigate(`/?route=${route}`);
    }
  }

  return (
    <div>
      <p>Home</p>
      <br />
      <div>
        <span>
          <button onClick={() => handleRoutes("ubuntu")}>Ubuntu</button>{" "}
          <button onClick={() => handleRoutes("fedora")}>Fedora</button>{" "}
          <button onClick={() => handleRoutes("arch-linux")}>Arch Linux</button>{" "}
          <button onClick={() => handleRoutes("open-suse")}>Open-Suse</button>
        </span>
      </div>
    </div>
  );
};

export default Home;
