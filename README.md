
# Activity Booking API 


This Repo provides backend functionality for a Activity Booking  System with user authentication, Activity Management, Activity Booking.




## Features

- User Authentication & Authorization: Signup, login with JWT token-based authentication, and secure access to authorized routes.
- Activity Management: Users can view available activities and book them.
- Booking History: Users can view their past and current activity bookings.










## API Reference

### Authentication Routes
| Endpoint           | Method | Description       |
|--------------------|--------|-------------------|
| `/api/users/register` | POST   | User registration |
| `/api/users/login`  | POST   | User login        |





### Activity Routes(Public)
| Endpoint           | Method | Description       |
|--------------------|--------|-------------------|
| `/api/activities` | GET   | Display all Activities |
| `/api/activities`  | POST   | Creates new Activities        |


### Booking Routes
| Endpoint           | Method | Description       |
|--------------------|--------|-------------------|
| `/api/bookings/:id` | POST   | Books the specified activity |
| `/api/bookings/my-bookings`  | GET   | Fetches and displays all the activities that the authenticated user       |






## Run Locally

Clone the project

```bash
  git clone https://github.com/AksharaReddyVulpala/Activity-Booking-App.git
```

Go to the project directory

```bash
  cd Activity-Booking-App
```

Install dependencies

```bash
  npm install
```

Change  Credentials in .env

```bash
1.CONNECTION_STRING : <add_ur_MongoDB_CONNECTION_STRING>
2.ACCESS_TOKEN_SECRET
```


Start the server

```bash
  npm run dev

```


## Additional Refrences

[API-Documentation-Postman](https://www.postman.com/joint-operations-geoscientist-60983476/my-workspace/request/66hnx4p/https-booking-app-six-theta-vercel-app)


[Deployment-Live-URL](https://booking-app-six-theta.vercel.app/)


[Vercel-Deployment-URL](https://vercel.com/aksharareddys-projects/booking-app)


