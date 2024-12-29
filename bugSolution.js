```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  return (
    <div>Home
      <div>{location.pathname}</div>
    </div>
  );
}

function About() {
  const location = useLocation();
  return (
    <div>About
      <div>{location.pathname}</div>
    </div>
  );
}

export default App;
```