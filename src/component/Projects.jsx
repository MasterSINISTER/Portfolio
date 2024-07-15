import React from "react";
import Card from "./Card";

function Projects() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          marginLeft: "10%",
          gap: "5%",
        }}
      >
        <Card
          title="Indian Ghats"
          lang="React"
          imgSource="https://imagetolink.com/ib/xsLJI4SoxI.png"
          desc="Discover India's sacred ghats through interactive storytelling and visuals."
          projectLink="https://github.com/MasterSINISTER/GhatsWebsite"
        />
        <Card
          title="Rn NoteBook"
          lang="MERN Stack"
          imgSource="https://imagetolink.com/ib/Xb0VPAHDfp.png"
          desc="Create and manage notes seamlessly with a MERN stack-powered notebook website"
          projectLink="https://github.com/MasterSINISTER/rnNoteBook"
        />
        <Card
          title="Friday"
          lang="Python"
          imgSource="https://img.freepik.com/premium-vector/robot-assistant-flat-illustration-editable-vector-design_203633-3397.jpg?w=740"
          desc="AI bot built with Python for intelligent, automated responses and interactions."
          projectLink="https://github.com/MasterSINISTER/Friday"
        />
        <Card
          title="Win11Debloat"
          lang="Powershell"
          imgSource="https://raw.githubusercontent.com/LeDragoX/Win-Debloat-Tools/main/src/assets/script-logo.png"
          desc="Optimize Windows 11 performance with a PowerShell-based Debloat tool."
          projectLink="https://github.com/MasterSINISTER/Win-Debloat-Tools"
        />
      </div>
    </>
  );
}

export default Projects;
