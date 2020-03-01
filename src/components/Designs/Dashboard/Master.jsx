import React, { Fragment } from 'react';
import {
      Grid,
      Typography,
      ToggleButtonGroup,
      ToggleButton,
      Paper,
      Button,
      Menu,
      MenuItem,
      Divider
} from '../../Core';
import { createStore, StoreManager } from '@rootzjs/store';

import { Styles } from '../../../styles/Designs/Dashboard';
import { Filter } from './FilterSeletion';
import { Region } from './RegionSelection';
import { Theme } from './ThemeSelection';
import { TopBottomFilter } from './TopBottomFilterSelection';
import { PopulationByCountry } from './PopulationByCountry';
import { Country } from './CountrySelection';
import { Maps } from './WorldMap';

const DashboardComponent = ({
      state
}) => {
      const styl = Styles();
      return (
            <Fragment>
                  <div className={styl.root} >
                        <Grid container className={styl.gridContainer}>
                              <div className={styl.mapContainer}>
                                    <div className={styl.mapFiterContainer}>
                                          <Typography className={styl.title} variant="h6" color="inherit">
                                                Regional Comparison
                                          </Typography>
                                          <Filter />
                                    </div>
                                    <MapsInsights {...state} />
                              </div>
                        </Grid>
                        <Grid container className={styl.topAndBottomContainer}>
                              <TopBottomFilter {...state} />
                        </Grid>
                  </div>
                  <div className={styl.root} >
                        <Grid container className={styl.gridContainer}>
                              <div className={styl.mapContainer}>
                                    <div className={styl.mapFiterContainer}>
                                          <Typography className={styl.title} variant="h6" color="inherit">
                                                Regional Comparison
                                          </Typography>
                                          <Country />
                                    </div>
                                    <PopulationByCountry />
                              </div>
                        </Grid>
                  </div>
            </Fragment>
      )
}

const Map = ({ state, props }) => <Maps {...state} />

const MapsInsights = createStore({
      storeID: "#MapInsights",
      Component: Map,
      state: {},
      mapAllPropsToState: true
})

export const Dashboard = createStore({
      storeID: "#Dashboard",
      Component: DashboardComponent,
      state: {
            region: "World",
            type: "MONO_CHOROPLETH",
            filterBy: "Population",
            content: "",
            topSelection: "All"
      }
})
