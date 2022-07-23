import React, { useContext } from 'react';
import Content from './components/Content';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { AppContext } from './context/AppContext';

export default function App() {
  const { name } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Content />} />
      </Route>
    </Routes>
  );
}
