import React, { Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import logoDark from '../assets/images/logo1.svg';
import { AppDrawer } from './AppDrawer';
import { StoreManager } from '@rootzjs/store';
import {
      Switch,
      Brightness3Rounded,
      Brightness7Rounded,
      useTheme,
      SearchRounded,
      TrackChangesRounded,
      InputBase,
      Typography,
      IconButton,
      Toolbar,
      AppBar,
      Tooltip,
      Icon,
      Divider,
      ViewModuleRounded,
      MenuOpenRounded,
      MenuRounded
} from './Core';

import { Styles } from "../styles/AppHeader";

export const AppHeader = ({ route }) => {
      const styl = Styles();
      const theme = useTheme();
      const isLight = theme.theme === "light";
      const onThemeChange = evt => {
            StoreManager.update("#MasterComponent", { theme: evt.target.checked ? "dark" : "light" });
      }
      const onMenuOpen = () => {
            StoreManager.update("#AppDrawerComponent", {
                  isMenuOpen: true
            });
      }
      const MobileToolbar = () =>
            <div className={styl.logoContainer}>
                  <Tooltip title={`open filter section`} >
                        <IconButton component="span" className={styl.hamburger}>
                              <MenuRounded onClick={onMenuOpen} />
                        </IconButton>
                  </Tooltip>
            </div>
      const DesktopToolbar = () =>
            <Fragment>
                  <div className={styl.logoContainer}>
                        <IconButton className={styl.iconContainer} disabled>
                              <img className={styl.logo} src={isLight ? logo : logoDark} alt="logo" />
                        </IconButton>
                  </div>
                  {/* <Typography className={styl.title} variant="h6" color="inherit">
                        Analytixa
                  </Typography>
                  <Divider className={styl.divider} orientation="vertical" /> */}
            </Fragment>

      return (
            <div className={styl.root}>
                  <AppBar position="fixed" className={styl.appBar}>
                        <Toolbar variant="dense">
                              {
                                    theme.isMobile ?
                                          <MobileToolbar />
                                          :
                                          <DesktopToolbar />
                              }
                              <Typography className={styl.routeTitle} variant="h6" color="inherit">
                                    {route.title}
                              </Typography>
                              {
                                    theme.isMobile ||
                                    <div className={styl.search}>
                                          <div className={styl.searchIcon}>
                                                <SearchRounded />
                                          </div>
                                          <InputBase
                                                placeholder="Search…"
                                                classes={{
                                                      root: styl.inputRoot,
                                                      input: styl.inputInput,
                                                }}
                                                inputProps={{ 'aria-label': 'search' }}
                                          />
                                    </div>
                              }
                              <Tooltip title={`More Apps`} >
                                    <IconButton component="span" className={styl.moreApps}>
                                          <ViewModuleRounded />
                                    </IconButton>
                              </Tooltip>
                              <Tooltip title={`toggle to ${theme.theme === "light" ? "dark" : "light"} theme`} >
                                    <Switch
                                          className={styl.checkbox}
                                          checked={!isLight}
                                          onChange={onThemeChange}
                                          color="primary"
                                          size="small"
                                          icon={<Brightness3Rounded className={styl.themeTogglerDay} />}
                                          checkedIcon={<Brightness7Rounded className={styl.themeTogglerNight} />}
                                          classes={{
                                                track: styl.checkBoxTrack
                                          }}
                                    />
                              </Tooltip>
                        </Toolbar>
                  </AppBar>
            </div>
      );
}
