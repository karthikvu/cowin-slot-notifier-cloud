import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'

import "./registrationCard.scss"

export const RegistrationCard = ({ userid, name, phone, age, pincode, slack, email, vaccine, date, notifCount, renewSubscription}) => {
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
          {notifCount > 3 && <Typography variant="body2" color="red" component="p" className="error-text">
              You have reached max number of notifications
          </Typography>}
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" disabled>
          Delete
        </Button>
        <Button size="small" color="primary" disabled>
          Pause
        </Button>
        <Button size="small" color="primary" disabled={notifCount <= 3} onClick={renewSubscription}>
          Renew
        </Button>
      </CardActions>
     </Card>
    )
}
