import React from 'react';
import { Styles } from '../../styles/ErrorPage';
import {
      Paper,
      useTheme,
      Button
} from '../Core';
import somethingWentWrongLightSVG from '../../assets/images/somethingWentWrongLight.svg';
import somethingWentWrongDarkSVG from '../../assets/images/somethingWentWrongDark.svg';

const errorText = {
      oopsTitle: "Sorry, something went wrong",
      oopsContent: "Try reloading the page. We're working hard to fix Prism for you as soon as possible"
}

export const OopsSomethingWentWrong = ({ onReload, details }) => {debugger;
      const styl = Styles();
      const theme = useTheme();
      const isLight = theme.theme === "light";
      const onGetDetails = () => { 
            console.log(details);
      }
      return (
            <div className={styl.root}>
                  <Paper elevation="0" className={styl.oopsSomethingWentWrongContianer}>
                        <img className={styl.logo} src={isLight ? somethingWentWrongLightSVG : somethingWentWrongDarkSVG} alt="logo" />
                  </Paper>
                  <div className={styl.errorTextTitleContainer}>
                        <div className={styl.title}>{errorText.oopsTitle}</div>
                        <div className={styl.content}>{errorText.oopsContent}</div>
                  </div>
                  <div className={styl.btnContainer}>
                        <Button
                              color="primary"
                              variant="contained"
                              className={styl.btnReload}
                              onClick={onReload}
                        >Reload</Button>
                        <Button
                              color="primary"
                              className={styl.btnDetails}
                              onClick={onGetDetails}
                        >Details</Button>
                  </div>
            </div>
      )
}