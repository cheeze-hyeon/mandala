import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from 'routes/home/Homepage';
import ChatPage from 'routes/chat/ChatPage';
import QuestionPage from 'routes/question/QuestionPage';
import Resultpage from 'routes/result/ResultPage';
import CheerPage from 'routes/cheer/CheerPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/result" element={<Resultpage />} />
          <Route path="/cheer" element={<CheerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
