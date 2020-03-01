import React from 'react';
import {
      Grid,
      Typography,
      ToggleButtonGroup,
      ToggleButton,
      Paper,
      Button,
      Menu,
      MenuItem
} from '../../Core';
import { createStore, StoreManager } from '@rootzjs/store';

import { Styles } from '../../../styles/Designs/Dashboard';

export const Region = createStore({
      storeID: "#Region",
      Component: ({ state }) => {
            const styl = Styles();
            const onRegionChange = (evt, region) => {
                  if(!region) return;
                  StoreManager.update("#Region", { region })
            }
            return (
                  <Grid item sm={6} md={4} style={{ padding: 0 }}>
                        <div className={styl.toggleContainer}>
                              <ToggleButtonGroup
                                    className={styl.toggleButtonGroup}
                                    value={state.region}
                                    exclusive
                                    onChange={onRegionChange}
                                    aria-label="text alignment"
                              >
                                    <ToggleButton value="World" aria-label="left aligned">World
                                                </ToggleButton>
                                    <ToggleButton value="India" aria-label="centered">India
                                                </ToggleButton>
                                    <ToggleButton value="USA" aria-label="right aligned">USA
                                                </ToggleButton>
                              </ToggleButtonGroup>
                        </div>
                  </Grid>
            )
      },
      state: {
            region: "World"
      }
})