import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

import "./form.scss"

export default function FormDialog({ open, handleClose, submit }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "18",
        slack: "",
        pincode: ""
    })

    const handleChange = field => event =>{ 
        setFormData({
            ...formData,
            [field]: event.target.value
        })
    }

    const clearData = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            age: "18",
            slack: "",
            pincode: ""
        })
    }

    useEffect(clearData, [open])
  return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to alerts, fill in the following details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="pincode"
            label="Area Pin Code"
            type="pincode"
            value={formData.pincode}
            onChange={handleChange("pincode")}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange("email")}
          />
        <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone number"
            type="phone"
            fullWidth
            value={formData.phone}
            onChange={handleChange("phone")}
          />

          <FormControl component="fieldset" className="radio">
            <FormLabel component="legend">Age</FormLabel>
            <RadioGroup aria-label="age" name="age" value={formData.age} onChange={handleChange("age")}>
                <FormControlLabel value={"18"} control={<Radio />} label="18 - 45" />
                <FormControlLabel value={"45"} control={<Radio />} label="45+" />
            </RadioGroup>
            </FormControl>
            <TextField
                autoFocus
                margin="dense"
                id="slack"
                label="Slack URL"
                type="slack"
                fullWidth
                value={formData.slack}
                onChange={handleChange("slack")}
            />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => submit(formData)} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
  );
}