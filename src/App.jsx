import React from 'react';
import './App.scss';
// eslint-disable-next-line no-unused-vars
import { request } from './api/api';
import { FindMovie } from './components/FindMovie/FindMovie';

export const App = () => (
  <div>
    <FindMovie />
  </div>
);
