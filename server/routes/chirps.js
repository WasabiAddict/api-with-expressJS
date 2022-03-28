const express = require('express');
const router = express.Router();
const chirpsStore = require('../chirpstore');

router.get('/id?', (req, res) => {
    const id = req.params.id;

    if(id) {
        const chirps = chirpStore.GetChirps(id);
        res.json(chirps);
    } else {
        const chirps = chirpStore.GetChirps();
        res.json(chirps);
    }
});

router.post('/', (req, res) => {
    const body = req.body;

    chirpsStore.CreateChirp(req.body)
    res.sendStatus(200);
});

router.put("/id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    chirpStore.UpdateChirp(id, body);
    res.sendStatus(200);
})

router.delete("/:id?", (req, res) => {
   const id = req.params.id
    chirpsStore.DeleteChirp(id);
    res.sendStatus(200);
});

module.exports = router;