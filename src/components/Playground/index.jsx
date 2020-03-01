import React, { useEffect } from 'react';
import { Lines } from '../Designs/Categorial/Lines';
import { Area } from '../Designs/Categorial/Area';
import { Bars } from '../Designs/Categorial/Bars';
import { Pie } from '../Designs/Statistical/Pie';
import { Donut } from '../Designs/Statistical/Donut';
import { ScatterPlot } from '../Designs/Coordinate/ScatterPlot';
import { BubblePlot } from '../Designs/Coordinate/BubblePlot';
import { HeatMaps } from '../Designs/Spacial/HeatMaps';
import { Gauge } from '../Designs/Statistical/Gauge';
import { Radar } from '../Designs/Statistical/Radar';
import { WorldMap } from '../Designs/Spacial/WorldMap';
import { Dashboard } from '../Designs/Dashboard/Master';

import { Styles } from '../../styles/Playground';
import { createStore, StoreManager } from '@rootzjs/store';

const ComponentMap = {
      Collabrate: Dashboard
}

const Component = ({ props, state }) => {
      const styl = Styles();
      const Section = ComponentMap[state.activeSection];
      useEffect(() => {
            const doc = document.getElementById("main-container");
            doc.scrollTop = 0;
      })
      return (
            <main>
                  <div id="main-container" className={styl.root}>
                        <Section />
                  </div>
            </main>
      )
}

export const Playground =
      createStore({
            storeID: "#PlaygroundComponent",
            Component: Component,
            state: {
                  activeSection: StoreManager.getState("#AppDrawerComponent").activeSection
            }
      })