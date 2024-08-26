import ArticlePage from "./pages/ArticlePage";
import Card from "./components/Card"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Router>    
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  )
}

export default App
