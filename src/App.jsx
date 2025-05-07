import React from "react";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen p-4 bg-black text-white flex justify-center">
      <div className="w-full max-w-6xl"> {/* Added container with max-width */}
        <Form />
      </div>
    </div>
  );
}

export default App;