import React, { Fragment } from 'react';
import { ToggleButton as MUI_ToggleButton } from '../Core';

/**
 * ToggleButton customised
 * @param {*} props 
 */
export const ToggleButton =
      props =>
            <MUI_ToggleButton {...props} />

/**
 * ToggleButtonArray extended funtionality for multiple implementation of ToggleButtons specially inside ToggleButtonGroup
 * @param {contents} props [{ToggleButtonProps}] 
 */
export const ToggleButtonArray =
      props =>
            props.map(
                  content =>
                        <MUI_ToggleButton {...content} >{content.children}</MUI_ToggleButton>
            )
