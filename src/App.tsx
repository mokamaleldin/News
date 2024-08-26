import ArticlePage from "./pages/ArticlePage";
import Card from "./components/Card"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>    
      <div className="mx-16">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
