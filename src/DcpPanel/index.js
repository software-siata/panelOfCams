import React from "react";
import "./DcpPanel.css";
import { DcpCameraGrid } from "../DcpCameraGrid";

const cameraGroup = [
  {
    name: "nivel",
    actived: true,
  },
  {
    name: "cielo",
    actived: false,
  },
  {
    name: "movimientos de masa",
    actived: false,
  },
  {
    name: "incendio",
    actived: false,
  },
];

function DcpPanel() {
  return (
    <React.Fragment>
      <main>
        <div className="panel-container">
          <ul>
            {cameraGroup.map((group) => (
              <li key={group.name} className={group.name}>
                {group.name}
              </li>
            ))}
          </ul>
          <DcpCameraGrid typeCam="incendio"></DcpCameraGrid>
        </div>
      </main>
    </React.Fragment>
  );
}

export { DcpPanel };
