import React from 'react';
import { Master } from "./components/Master";
import { initiateMockAdapter } from './service/MockAdapter';

import './assets/stylesheets/animate.css';

initiateMockAdapter();

export const AnalytixaApp = () => <Master />
