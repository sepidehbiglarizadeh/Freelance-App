import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<div>Auth</div>} />
    </Routes>
  );
}

export default App;
