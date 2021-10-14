const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://16bit-game-store.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://16bit-game-store/",
  issuer: "https://16bit-game-store.us.auth0.com/",
  algorithms: ["RS256"],
});

module.exports = verifyJwt;
