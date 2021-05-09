const User = require('../../models/User');
const UserSession = require('../../models/UserSession');


module.exports = (app) => {
    /*
    *Sign Up
    */
   app.post('/api/account/signup', (req, res, next) =>{
       console.log(req.body);
       const { body } = req;
       const {
           userName,
           password
       } = body;
       let {email} = body;
       if(!userName){
           return res.send({
               success: false,
               message: 'Error: Username cannot be blank'
           })
       }
       if(!email){
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank'
        })
    }
    if(!password){
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank'
        })
    }
    email = email.toLowerCase();
   
   // Steps:
   // Verify email doesn't exist
   User.find({
    email: email
   }, (err, previousUsers) => {
    if (err) {
        return res.send({success: false,
            message:"Error: Server error"})
    }else if(previousUsers.length >0){
        return res.send({success: false,
            message: "Error: Account already exists."})
    }


// Save the new user
const newUser = new User();

newUser.email = email;
newUser.userName = userName;
newUser.password = newUser.generateHash(password);
newUser.save((err, user)=>{
    if(err){
        return res.send({
            success: false,
            message: 'Error: Server error'
        });
    }
    const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc)=>{
            if (err){
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }

            return res.send({
                success: true,
                message: 'Signed up',
                token: doc._id
            });
        });

 });
   });

   });



   app.post('/api/account/signin', (req, res, next) =>{
    console.log(req.body);
    const { body } = req;
    const {
        password
    } = body;
    let {email} = body;
    if(!email){
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank'
        })
    }
    if(!password){
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank'
        })
    }


    email = email.toLowerCase();

    User.find({ 
        email: email
    }, (err, users)=>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: server error'
            });
        }

        if(users.length != 1){
            return res.send({
                success: false,
                message: 'Error: invalid username or password'
            });
        }
    

        const user = users[0];
        if(!user.validPassword(password)){
            return res.send({
                success: false,
                message: 'Error: invalid username or password'
            });
        }

        // Otherwise correct user 

        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc)=>{
            if (err){
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }

            return res.send({
                success: true,
                message: 'Valid sign in',
                token: doc._id
            });
        });

        });
    });


    app.get('/api/account/verify', (req, res, next)=>{
        // console.log(req.body);
        const{query} = req;
        const{token} = query;
        // ?token = test

        //verify the token is one of a kind and its not deleted

        UserSession.find({
            _id:token,
            isDeleted: false
        }, (err, sessions) =>{
            if(err){
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            if(sessions.length != 1){
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }else{
                return res.send({
                    success: true,
                    message: 'Good'
                });
            }

        });
    
    });

    app.get('/api/account/logout', (req, res, next)=>{
        // console.log(req.body);
        const{query} = req;
        const{token} = query;
        // ?token = test
        console.log("Token: " + token)
        //verify the token is one of a kind and its not deleted

        UserSession.findOneAndUpdate({
            _id:token,
            isDeleted: false
        },
            {$set:{isDeleted: true}}
        , null, (err, sessions) =>{
            if(err){
                console.log("Auth deleting error" + err)
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            console.log("Auth deleting successful")
                return res.send({
                    success: true,
                    message: 'Good'
                });
            

        });
    })

};