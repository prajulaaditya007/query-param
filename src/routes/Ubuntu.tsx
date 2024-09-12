import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";

const Ubuntu = () => {
  const { contextId } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <h4>Ubuntu</h4>
      {contextId ? <p>{JSON.stringify(contextId)}</p> : <p>No Context id</p>}

      <div>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
};
export default Ubuntu;
