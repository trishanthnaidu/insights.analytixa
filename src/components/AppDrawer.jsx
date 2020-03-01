import React, { useState, Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import { createStore, StoreManager } from '@rootzjs/store';
import {
      Drawer,
      List,
      ListSubheader,
      ListItem,
      Divider,
      ListItemIcon,
      ListItemText,
      IconButton,
      DashboardRounded,
      useTheme,
      SwipeableDrawer,
      Typography,
      CloseRounded,
      BlurLinearRounded,
      AttachMoneyRounded,
      ShowChartRounded,
      BarChartRounded,
      FilterHdrRounded,
      BubbleChartRounded,
      ScatterPlotRounded,
      PieChartRounded,
      DonutLargeRounded,
      MapRounded,
      ViewCompactRounded,
      WifiTetheringRounded,
      TimelapseRounded
} from './Core';
import { Styles } from "../styles/AppDrawer";

const Component = ({ props, state }) => {
      const { route } = props;
      const { isMenuOpen, sections, iconSvgMappings, activeSection } = state;
      const theme = useTheme();
      const styl = Styles();
      const onSectionClick = item => {
            StoreManager.update("#AppDrawerComponent", {
                  isMenuOpen: false,
                  activeSection: item
            });
            StoreManager.update("#PlaygroundComponent", {
                  activeSection: item
            });
            window.scrollTo(0, 0);
      }
      const generateSections = () => {
            const keys = Object.keys(sections[route.title]);
            return keys.map(key => {
                  const component = [];
                  component.push(
                        <Fragment>
                              <Divider className={styl.divider} />
                              <List>
                                    <ListSubheader component="div" className={styl.listSubHeader}>
                                          {key}
                                    </ListSubheader>
                                    {sections[route.title][key].map((text, index) => {
                                          const MappedIcons = iconSvgMappings[route.title][text];
                                          return (
                                                <ListItem button className={`${styl.listItem} ${activeSection === text && styl.activeSection}`} onClick={() => onSectionClick(text)}>
                                                      <ListItemIcon className={styl.icons}>
                                                            <MappedIcons className={styl.iconSvg} />
                                                      </ListItemIcon>
                                                      <ListItemText primary={text} className={styl.sectionText} />
                                                </ListItem>
                                          )
                                    })}
                              </List>
                        </Fragment>
                  )
                  return component;
            })
      }
      const onMenuClose = () => {
            StoreManager.update("#AppDrawerComponent", {
                  isMenuOpen: false
            });
      }
      const onMenuOpen = () => {
            StoreManager.update("#AppDrawerComponent", {
                  isMenuOpen: true
            });
      }
      const onCloseClick = () => {
            onMenuClose();
      }
      const sideList = side => (
            <div
                  className={styl.list}
                  role="presentation"
            >
                  <div className={styl.logoSectionDrawer}>
                        <div className={styl.logoContainer}>
                              <IconButton className={styl.iconContainer} disabled>
                                    <img className={styl.logo} src={logo} alt="logo" />
                              </IconButton>
                        </div>
                        <Typography className={`${styl.title} ${styl.titleMobileExtraCss}`} variant="h6" color="inherit">
                              Analytixa
                        </Typography>
                        <div className={styl.closeContainer}>
                              <IconButton className={styl.iconContainer}>
                                    <CloseRounded onClick={onCloseClick} />
                              </IconButton>
                        </div>
                  </div>
                  <Divider className={styl.dividerMain} />
                  <List>
                        <ListItem button className={`${styl.listItem} ${activeSection === "Collabrate" && styl.activeSection}`} onClick={() => onSectionClick("Collabrate")}>
                              <ListItemIcon className={styl.icons}>
                                    <DashboardRounded />
                              </ListItemIcon>
                              <ListItemText primary="Collabrate" className={styl.sectionText} />
                        </ListItem>
                  </List>
                  {generateSections()}
            </div>
      )
      return (
            <div className={styl.root}>
                  {
                        theme.isMobile ?
                              <SwipeableDrawer
                                    className={styl.drawer}
                                    classes={{ paper: styl.drawerPaperMobile }}
                                    open={isMenuOpen}
                                    onOpen={onMenuOpen}
                                    onClose={onMenuClose}
                              >
                                    {sideList('left')}
                              </SwipeableDrawer>
                              :
                              <Drawer
                                    className={styl.drawer}
                                    variant="permanent"
                                    classes={{ paper: styl.drawerPaper }}
                              >

                                    <div className={styl.toolbar} />
                                    <List>
                                          <ListItem button className={`${styl.listItem} ${activeSection === "Collabrate" && styl.activeSection}`} onClick={onSectionClick}>
                                                <ListItemIcon className={styl.icons}>
                                                      <DashboardRounded />
                                                </ListItemIcon>
                                                <ListItemText primary="Collabrate" className={styl.sectionText} />
                                          </ListItem>
                                    </List>
                                    {generateSections()}
                              </Drawer>
                  }
            </div>
      );
}

export const AppDrawer =
      createStore({
            storeID: "#AppDrawerComponent",
            Component: Component,
            state: {
                  isMenuOpen: false,
                  activeSection: "Collabrate",
                  sections: {
                        Insights: {
                              Audience: ['Demographics', 'Geo'],
                              Analysis: ['Predictive', 'Performance'],
                        }
                  },
                  iconSvgMappings: {
                        Insights: {
                              "Demographics": ShowChartRounded,
                              "Geo": BarChartRounded,
                              "Predictive": FilterHdrRounded,
                              "Performance": ScatterPlotRounded,
                        },
                  }
            }
      });