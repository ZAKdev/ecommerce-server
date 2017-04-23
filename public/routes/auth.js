const
    express = require("express"),
    router = express.Router(),
    userLogin = require("./../store").userLogin;

router.post('/api/auth', (req, res) => {
    userLogin(req.body.username, req.body.password)
        .then(user => {
            if(user != null){
                return res.status(200).json(user)
            } else {
                return res.status(401).json({
                  "message" : "Error: User Not Found"
                });
            }
        })
        .catch(err => res.json({response: err}))
})

module.exports = router