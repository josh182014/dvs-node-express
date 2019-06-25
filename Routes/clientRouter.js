// CRUD endpoints


const router = require("express").Router();
const db = require("./users-model");



// // Get a project by ID, with its actions
// router.get("/:id", (req, res) => {
//     const id = req.params.id;

//     db.getById(id)
//         .then(client => {
//             if (client) {
//                 const pActions = { ...client };
//                 db.getProjectWithActions(id).then(actions => {
//                     pActions.actions = actions;
//                     res.status(200).json(pActions);
//                 });
//             } else {
//                 res
//                     .status(400)
//                     .json({ message: "The specified project does not exist." });
//             }
//         })
//         .catch(err => {
//             // console.log(err);
//             res.status(500).json(err.message);
//         });
// });

// POST - Add Registrant 
router.post("/Registration", (req, res) => {
    const newClient = req.body;

    if (!newReg.name || !newReg.description) {
        res.status(400).json({
            message: "Please Register to have access."
        });
    } else {
        db.addClient(newClient)
            .then(client => {
                res.status(201).json(client);
            })
            .catch(err => {
                res.status(500).json(err.message);
            });
    }
});

//POST - CLIENT LOGIN

router.post("/LOGIN", (req, res) => {
    const ClientLogin = req.body;

    if (!ClientLogin.name || !ClientLogin.description) {
        res.status(400).json({
            message: "Please login to access account."
        });
    } else {
        db.ClientLogin(Login)
            .then(ClientLogin => {
                res.status(201).json(ClientLogin);
            })
            .catch(err => {
                res.status(500).json(err.message);
            });
    }
});


//Get 
router.get("/", (req, res) => {
    db.getClients() // whatever this function returns will be passed into "then()"
        .then(client => {
            //Client is what was returned by the db.getClients() function
            res.status(200).json(client);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});









// // Delete Client
// router.delete("/:id", (req, res) => {
//     const id = req.params.id;

//     db.destroyProj(id)
//         .then(count => {
//             if (count > 0) {
//                 res
//                     .status(200)
//                     .json({ message: `${count} project successfully deleted.` });
//             } else {
//                 res
//                     .status(404)
//                     .json({ message: "The specified project does not exist." });
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err.message);
//         });
// });

// // Update Client
// router.put("/:id", (req, res) => {
//     const id = req.params.id;
//     const changes = req.body;

//     db.updateProj(id, changes)
//         .then(changes => {
//             if (changes) {
//                 res
//                     .status(200)
//                     .json({ message: "The project has been successfully updated." });
//             } else {
//                 res
//                     .status(404)
//                     .json({ message: "The specified project does not exist." });
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err.message);
//         });
// });

module.exports = router;
