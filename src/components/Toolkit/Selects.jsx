import React, { Fragment } from 'react';
import { Button } from './Button';
import { Select, Menu } from '../Core';

export const SelectButton =
      props =>
            <Fragment>
                  <Button {...props.ButtonProps}>{props.children}</Button>
                  <Menu {...props.MenuProps}>{props.MenuItems}</Menu>
            </Fragment>

export const SelectDropDown =
      props =>
            <Select {...props}>{props.children}</Select>