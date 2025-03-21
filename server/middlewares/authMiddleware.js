const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    // get token, get user out of token, verify token

    // console.log(req.headers.authorization);

    try {
        // Check if authorization header exists
        // if (!req.headers.authorization) {
        //     return res.status(401).send({ success: false, message: "No token provided" });
        // }
        const token = req.headers.authorization.split(" ")[1];
        const verifiedToken = jwt.verify(token, "Scaler_BMS");
        req.body.userId = verifiedToken.userId;
        next();
        // console.log(verifiedToken);
    } catch (error) {
        console.log("error in authMiddleware");
        res.status(401).send({ success : false, message : "Invalid Token" })
        console.log(error)
    }
}