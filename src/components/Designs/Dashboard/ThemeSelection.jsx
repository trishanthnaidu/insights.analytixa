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
import { createStore, StoreManager } from '@rootzjs/store';

import { Styles } from '../../../styles/Designs/Dashboard';


const MonoColorArr = () => {
      const styl = Styles();
      return (
            <div className={styl.paletteContainer}>
                  {["#fcc1bc", "#fbaea8", "#faa099", "#f9938b", "#f88077", "#f77369", "#f66056", "#f54f43", "#f4473a", "#F44336"].map(x => (
                        <span className={styl.paletteColors} style={{ backgroundColor: x }}></span>
                  ))}
            </div>
      )
}
const GrayColorArr = () => {
      const styl = Styles();
      return (
            <div className={styl.paletteContainer}>
                  {["#F2F2F2E0", "#E2E2E2E0", "#CCCCCCE0", "#AAAAAAE0", "#888888E0", "#777777E0", "#555555E0", "#444444E0", "#333333E0", "#222222E0"].map(x => (
                        <span className={styl.paletteColors} style={{ backgroundColor: x }}></span>
                  ))}
            </div>
      )
}
const BiColorArr = () => {
      const styl = Styles();
      return (<div className={styl.paletteContainer}>
            {["#fae290", "#e4da84", "#d0d37a", "#b4ca6b", "#9fc361", "#96c05d", "#83ba53", "#73b44b", "#48a634", "#15951b"].map(x => (
                  <span className={styl.paletteColors} style={{ backgroundColor: x }}></span>
            ))}
      </div>
      )
}
const HeatColorArr = () => {
      const styl = Styles();
      return (<div className={styl.paletteContainer}>
            {[
                  "#171789",
                  "#4a1b9d",
                  "#7020a4",
                  "#93249c",
                  "#bc397e",
                  "#d0526b",
                  "#e57251",
                  "#f59a39",
                  "#f6bd26",
                  "#eaef1f"
            ].map(x => (
                  <span className={styl.paletteColors} style={{ backgroundColor: x }}></span>
            ))}
      </div>
      )
}
export const Theme = createStore({
      storeID: "#Theme",
      Component: ({ state }) => {
            const styl = Styles();
            const theme = useTheme();

            const onClose = evt => {
                  StoreManager.update("#Theme", {
                        anchor: null
                  })
            }
            const onClick = evt => {
                  StoreManager.update("#Theme", {
                        anchor: evt.currentTarget
                  })
            }
            const onFilterSelect = (ColorArray, type) => {
                  StoreManager.update("#Theme", {
                        filterBy: <ColorArray />,
                        anchor: null
                  })
                  StoreManager.update("#Dashboard", {
                        type
                  })
            }
            return (
                  <Grid item sm={6} md={3} style={{ padding: 0 }}>
                        <Paper elevation={0} className={styl.ƒilterContainer}>
                              <Button className={styl.btnFilterBy} onClick={onClick}>
                                    {state.filterBy}
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
                                    <MenuItem onClick={() => onFilterSelect(MonoColorArr, "GRAY_CHOROPLETH")} >
                                          <GrayColorArr />
                                    </MenuItem>
                                    <MenuItem onClick={() => onFilterSelect(MonoColorArr, "MONO_CHOROPLETH")} >
                                          <MonoColorArr />
                                    </MenuItem>
                                    <MenuItem onClick={() => onFilterSelect(BiColorArr, "BI_CHOROPLETH")}>
                                          <BiColorArr />
                                    </MenuItem>
                                    <MenuItem onClick={() => onFilterSelect(HeatColorArr, "HEAT_CHOROPLETH")}>
                                          <HeatColorArr />
                                    </MenuItem>
                              </Menu>
                        </Paper>
                  </Grid>
            )
      },
      state: {
            anchor: null,
            filterBy: <MonoColorArr />
      }
})