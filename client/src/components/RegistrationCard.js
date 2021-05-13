import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'

import "./registrationCard.scss"

export const RegistrationCard = ({ name, phone, age, pincode, slack, email, vaccine, date }) => {
    return (
        <Card className={'registration-card-material'}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className="">
                {age + '+'}
            </Avatar>
            }
            title={`${name} | Pin: ${pincode}`}
            subheader={`Phone: ${phone}`}
      />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {`For date : ${date || "Latest"}`}
            {slack ? <div> Slack Intergration</div> : null}
            {email ? <div> Emails at {email} </div> : null}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" disabled>
          Delete
        </Button>
        <Button size="small" color="primary" disabled>
          Disable
        </Button>
      </CardActions>
     </Card>
    )
}
