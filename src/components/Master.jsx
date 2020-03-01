import React, { useEffect, useReducer, useState, Fragment } from 'react';
import { AppHeader } from "./AppHeader";
import { AppDrawer } from "./AppDrawer";
import { Playground } from './Playground';
import { Styles } from "../styles/Master";
import { AppTheme } from '../theme/App';
import CssBaseline from "@material-ui/core/CssBaseline";
import { OopsSomethingWentWrong, windowErrorHandler } from './ErrorPage';
import { Route, Link, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { createStore, StoreManager } from '@rootzjs/store';

const defaultTheme = "light";

const Component = ({ state, props }) => {
      const {
            theme,
      } = state;
      const onErrorOccured = (err, stack) => {
            StoreManager.update({
                  didSomethingWentWrong: true,
                  errorDetails: err
            });
      }
      const onReloadPage = () => {
            StoreManager.update({
                  didSomethingWentWrong: false
            });
      }
      useEffect(() => {
            windowErrorHandler(onErrorOccured);
      }, []);

      return (
            <AppTheme theme={theme} forComponent="APP">
                  <Designs
                        onReloadPage={onReloadPage}
                        {...state}
                  />
            </AppTheme>
      )
}

const Designs = props => {
      const styl = Styles();
      return (
            <div className={styl.root} >
                  <CssBaseline />
                  <AppHeader {...props} />
                  {
                        !props.didSomethingWentWrong ?
                              <Fragment>
                                    <AppDrawer {...props} />
                                    <Playground {...props} />
                              </Fragment>
                              :
                              <OopsSomethingWentWrong onReload={props.onReloadPage} details={props.errorDetails} />
                  }
            </div>
      )
}


export const Master =
      createStore({
            storeID: "#MasterComponent",
            Component: Component,
            state: {
                  theme: defaultTheme,
                  didSomethingWentWrong: false,
                  errorDetails: "",
                  route: {
                        title: "Insights"
                  },
            }
      })