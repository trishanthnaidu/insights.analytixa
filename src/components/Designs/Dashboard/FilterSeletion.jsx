import React from 'react';
import {
      Grid,
      Typography,
      ToggleButtonGroup,
      ToggleButton,
      Paper,
      Button,
      Menu,
      MenuItem,
      Divider,
      ExpandMoreRounded
} from '../../Core';
import { createStore, StoreManager } from '@rootzjs/store';
import { SelectButton } from '../../Toolkit/Selects';

import { Styles } from '../../../styles/Designs/Dashboard';

const yearsItem = ["All", "Populated", "Most Populated", "Less Populated", "Least Populated"];
export const Filter = createStore({
      storeID: "#Filter",
      Component: ({ state }) => {
            const styl = Styles();
            const onFilterChange = (evt, filterBy) => {
                  if(!filterBy) return;
                  StoreManager.update("#Filter", {
                        filterBy
                  })
                  StoreManager.update("#TopBottomFilter", {
                        filterBy
                  })
                  StoreManager.update("#MapInsights", {
                        filterBy
                  })
            }
            return (
                  <Grid item sm={6} md={8} style={{ padding: 0 }}>
                        <Paper elevation={0} className={`${styl.ƒilterContainer} ${styl.transparent}`}>
                              <ToggleButtonGroup
                                    className={styl.toggleButtonGroup}
                                    value={state.filterBy}
                                    exclusive
                                    onChange={onFilterChange}
                                    aria-label="text alignment"
                              >
                                    <ToggleButton value="Population" aria-label="left aligned">Population
                                    </ToggleButton>
                                    <ToggleButton value="GDP" aria-label="centered">GDP
                                    </ToggleButton>
                                    <ToggleButton value="GDP per Capita" aria-label="centered">GDP per Capita
                                    </ToggleButton>
                              </ToggleButtonGroup>
                        </Paper>
                  </Grid>
            )
      },
      state: {
            filterBy: "Population",
      }
})