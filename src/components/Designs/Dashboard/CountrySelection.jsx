import React from 'react';
import {
      Grid,
      Typography,
      ToggleButtonGroup,
      ToggleButton,
      Divider,
      Paper,
      Button,
      Menu,
      MenuItem,
      ExpandMoreRounded,
      PaletteRounded,
      useTheme,
      fade
} from '../../Core';
import World from '../../../assets/CSV/worldMap.json';
import { createStore, StoreManager } from '@rootzjs/store';

import { Styles } from '../../../styles/Designs/Dashboard';

export const Country = createStore({
      storeID: "#Country",
      Component: ({ state }) => {
            const styl = Styles();
            const theme = useTheme();

            const onClose = evt => {
                  StoreManager.update("#Country", {
                        anchor: null
                  })
            }
            const onClick = evt => {
                  StoreManager.update("#Country", {
                        anchor: evt.currentTarget
                  })
            }
            const onFilterSelect = country => {
                  StoreManager.update("#Country", {
                        country,
                        anchor: null
                  });
                  StoreManager.update("#Population", {
                        country
                  })
            }
            return (
                  <Grid item sm={6} md={3} style={{ padding: 0 }}>
                        <Paper elevation={0} className={styl.countrySelectionContainer}>
                              <Button className={styl.btnCountrySelection} onClick={onClick}>
                                    {state.country}
                                    <ExpandMoreRounded />
                              </Button>
                              <Menu
                                    id="simple-menu"
                                    anchorEl={state.anchor}
                                    keepMounted
                                    open={Boolean(state.anchor)}
                                    onClose={onClose}
                                    PopoverClasses={{
                                          paper: styl.popover_Paper
                                    }}
                              >
                                    {
                                          World.map(x => {
                                                return (
                                                      <MenuItem onClick={() => onFilterSelect(x.Name)} >
                                                            {x.Name}
                                                      </MenuItem>
                                                )
                                          })
                                    }
                              </Menu>
                        </Paper>
                  </Grid>
            )
      },
      state: {
            anchor: null,
            country: "World"
      }
})