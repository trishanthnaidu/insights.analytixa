import React from 'react';
import DialogAPI from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export const Dialog = ({
      title = "Dialog Title",
      open,
      handleClose,
      context,
      actionText = ["agree", "disagree"]
}) =>
      <DialogAPI
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
      >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                        {context}
                  </DialogContentText>
            </DialogContent>
            <DialogActions>
                  <Button onClick={handleClose} color="primary">
                        {actionText[0]}
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                        {actionText[1]}
                  </Button>
            </DialogActions>
      </DialogAPI>
