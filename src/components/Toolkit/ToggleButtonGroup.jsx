import React from 'react';
import { ToggleButtonArray } from './ToggleButton';
import { ToggleButtonGroup as MUI_ToggleButtonGroup } from '@material-ui/lab';

/**
 * ToggleButtonGroup
 * @param {toggleButtonArrayContents} props {[ToggleButtonProps]}
 */
export const ToggleButtonGroup =
      props =>
            <MUI_ToggleButtonGroup {...props} />


/**
* ToggleButtonGroup
* @param {toggleButtonArrayContents} props {[ToggleButtonProps]}
*/
export const ToggleButtonGroupArray =
      props => {
            const { toggleButtonArrayContents, ...rest } = props;
            return (
                  <MUI_ToggleButtonGroup
                        {...rest}
                  >
                        {ToggleButtonArray(toggleButtonArrayContents)}
                  </MUI_ToggleButtonGroup>
            )
      }