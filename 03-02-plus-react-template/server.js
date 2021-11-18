const express = require("express");
const path = require("path");
const cors = require("cors");

//
const app = express();

//
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

//
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// twilio communication
const twilioAccountSid = "AC901f46a7e72de021ffd6853300e9870a";
const twilioAuthToken = "3669aed13fbacae6ea71966f0ee126ba";
const twilioApiKey = "SK8c363f9157176ecd2cf54a985fbb362c";
const twilioApiSecret = "zHdunuujDaHxbs5A4pNokCP5lsGL1iSm";

app.get("/api/token-service", (req, res) => {
  const AccessToken = require("twilio").jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant; //just creating object
  const videoGrant = new VideoGrant();
  const { identity } = req.query;

  // create access token signed with twilio and return that to client
  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    { identity: identity }
  );

  token.addGrant(videoGrant); //? just declaring a method ?!?

  const accessToken = token.toJwt(); //? just declaring an empty-input method ?!?

  res.send({
    accessToken: accessToken,
  });
});

// as always
app.listen(process.env.PORT || 5000, (port) => {
  console.log("Server just started!");
  console.log(`Listening at port ${port}!`)
});
