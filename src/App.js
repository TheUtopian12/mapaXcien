import { useState } from "react";
import MapChart from "./components/MapChart";

function App() {
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <div>
      <h1>{content}</h1>
      

      {content === `Coahuila` ? (
        <>Aqui si hay servicio</>
      ) : content === `Nuevo León` ? (
        <>Aqui si hay servicio</>
      ) : content === `Tamaulipas` ? (
        <>Aqui si hay servicio</>
      ) 
      : content === `San Luis Potosí` ? (
        <>Aqui si hay servicio</>
      ) : content === `Querétaro` ? (
        <>Aqui si hay servicio</>
      ) : content === `Guanajuato` ? (
        <>Aqui si hay servicio</>
      ) : content === `Jalisco` ? (
        <>Aqui si hay servicio</>
      ) : content === `México` ? (
        <>Aqui si hay servicio</>
      ) : content === `Yucatán` ? (
        <>Aqui si hay servicio</>
      ) 
      
      
      
      
      : (
        <>No hay servicio</>
      )}

      <MapChart setTooltipContent={setContent} />
    </div>
  );
}

export default App;
