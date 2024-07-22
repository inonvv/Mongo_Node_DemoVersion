import express from "express";
import "dotenv/config";
import UserRouter from "./user/user.routes";
import tripRouter from "./testapi/tripRoute";
import FlightTicketRouter from "./flightTicket/flightTicket.routes";
import AirportRouter from "./airport/airport.routes";
import cors from "cors";
const PORT = process.env.PORT || 5555;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", UserRouter);
app.use("/api/TripTicket", tripRouter);
app.use("/api/FlightTicket", FlightTicketRouter);
app.use("/api/AirportRouter", AirportRouter);

//listen to the defined port
app.listen(PORT, () => {
  console.log(`[SERVER] Server is live http://localhost:${PORT}`);
});
