import ArticlePage from "./components/ArticlePage";
import Card from "./components/Card"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Router>    
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  )
}

export default App
