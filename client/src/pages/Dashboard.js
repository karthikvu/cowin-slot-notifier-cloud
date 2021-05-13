import { useAuth0 } from '@auth0/auth0-react'
import { Button, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FormDialog from '../components/Form'
import { RegistrationCard } from '../components/RegistrationCard'
import CustomizedSnackbars from '../components/SnackBar'
import { createSubscription, getSubscription, renewSubscription } from '../utils/api'
import "./dashboard.scss"
const data = [{
	name: 'Karthik VU',
	age: 18,
	pincode: 591302,
	vaccine: ['Covishield'],
	date: null,
	slack: '',
	email: ''	
},{
	name: 'Karthik VU',
	age: 45,
	pincode: 591302,
	vaccine: ['Covaxin', 'Covishield'],
	date: '22-07-2021',
	slack: '',
	email: ''	
}]

export default function Dashboard() {
    const [showForm, setShowForm] = useState(false)
    const [subscriptions, setSubscriptions] = useState([])
    const [showSnack, setShowSnack] = useState(false)
    const [snackMessage, setSnackMessage] = useState("")
    const [snackType, setSnackType] = useState("success")
    const { user } = useAuth0();

    useEffect(() => {
        async function fetchSubs() {
            const { data: subscriptions } = await getSubscription()
            setSubscriptions(subscriptions)
        }
        fetchSubs()
    }, [])

    const closeSnack = () => setShowSnack(false)

    const handleSubmit = async formData => {
        try { 
            const { data }  = await createSubscription({ ...formData, name: user.name })
            setShowForm(false)
            setSubscriptions([data[0], ...subscriptions])
            setSnackType("success")
            setSnackMessage("Successfully subscribed !")
            setShowSnack(true)
        } catch (err) {
            const isConflict = err.response.status === 409
            setSnackType("error")
            setSnackMessage(isConflict ? "Subscription already exists for this pincode and age" : "Failed to subscribe ! Retry later")
            setShowSnack(true)
        }

        setTimeout(closeSnack, 5000)
    }

    const renewSubs = async ({userid, pincode, age}) => {
        console.log(userid, pincode, age)
        try { 
            await renewSubscription(userid, pincode, age)
            setSnackType("success")
            setSnackMessage("Successfully renewed !")
            setShowSnack(true)
            const { data: subscriptions } = await getSubscription()
            setSubscriptions(subscriptions)
        } catch (err) {
            setSnackType("error")
            setSnackMessage("Failed to renew ! Retry later")
            setShowSnack(true)
            setTimeout(closeSnack, 5000)
        }
    }
    return (
        <div className="dashboard">
            <CustomizedSnackbars type={snackType} message={snackMessage} open={showSnack} handleClose={closeSnack} />
            <div className="actions-bar">
            <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
                Add new
            </Button>
            </div>
            <Grid container spacing={1} className="cards">
                {subscriptions.map(item => <Grid item xs={12} sm={4} lg={3}><RegistrationCard {...item} renewSubscription={() => renewSubs(item)} /></Grid>)}
                {subscriptions.length === 0 && <Grid item xs={12}>You dont have any alerts subscribed</Grid>}
            </Grid>
            <FormDialog open={showForm} handleClose={() => setShowForm(false)} submit={handleSubmit}/>
        </div>
    )
}
