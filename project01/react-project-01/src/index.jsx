import React from "react";
import { createRoot } from 'react-dom/client';
import Page from "./App";
import './style.css'


const root = createRoot(document.getElementById('root'));
root.render(<Page />);