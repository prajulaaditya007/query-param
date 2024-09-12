import Router from "./Router";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "./context/AppProvider";
import "./App.css";

function App() {
  const { setContextId } = useContext(AppContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Extract contextId from query params
    const contextId = searchParams.get("contextId");

    // Set the contextId if available in the URL
    if (contextId) {
      setContextId(contextId);
    }
  }, [searchParams, setContextId]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
