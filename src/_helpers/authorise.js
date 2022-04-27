const { expressjwt: jwt } = require("express-jwt");

// checking users role
const authorise = (roles = []) => {
    // make sure roles is an array
    if(typeof roles === "string"){
        roles = [roles]
    }

    // checks users role from token returns 'Unathorised' if user doesnt have sufficient roles
    return [
        jwt({ secret: process.env.SECRET, algorithms: ["HS256"]}),
        async (req, res, next) => {
            if(roles.length && !roles.includes(req.auth.role)) {
                return res.status(401).send({ message: "Unauthorised"});
            }
            next()
        }
    ];
}

module.exports = authorise;