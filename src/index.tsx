import { render } from 'preact';
import './App.css'
import { NextUIProvider } from '@nextui-org/react';
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes';

const root = document.getElementById('root');
if (root) {
  render(<NextUIProvider><RouterProvider router={router} /></NextUIProvider>, root);
}
