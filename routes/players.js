import express from 'express'
import Player from '../models/Players.js'

const playersRouter = new express.Router()

// GET ALL PLAYERS
playersRouter.get('/', async (req, res) => {
    try {
        const players = await Player.find()
        res.send(players)
    } catch (error) {
        console.log(error);
        
    }
})

// CREATE A PLAYER
playersRouter.post('/', async (req, res) => {
    try {
        const player = await Player.create(req.body)
        res.send(player)
    } catch (error) {
        console.log(error);
        
    }
})

// EDIT A PLAYER
playersRouter.put('/:id', async (req, res) => {
    try {
        const updatePlayer = await Player.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(updatePlayer)
    } catch (error) {
        console.log();
        
    }
})

// DELETE A PLAYER
playersRouter.delete('/:id', async (req, res) => {
    try {
        const deletePlayer = await Player.findByIdAndDelete(req.params.id)

        res.send({
            deletedPlayer: deletePlayer,
            message: 'Player Deleted!'
        })
    } catch (error) {
        console.log(error);
        
    }
})

export default playersRouter