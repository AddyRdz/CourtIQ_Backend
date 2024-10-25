import express from 'express'
import Team from '../models/Teams.js'

const teamsRouter = new express.Router()

// Get ALL TEAMS
teamsRouter.get('/', async( req, res) => {
    try {
        const teams = await Team.find()
        res.send(teams)
    } catch (error) {
        console.log(error);
        
    }
})

// CREATE A TEAM
teamsRouter.post('/', async (req, res) => {
    try {
        const team = await Team.create(req.body)
        res.send(team)
    } catch (error) {
        console.log(error);
    }
})

// EDIT A TEAM
teamsRouter.put('/:id', async (req, res) => {
    try {
        const updateTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(updateTeam)
    } catch (error) {
        console.log(error);
        
    }
})

//  DELETE A TEAM
teamsRouter.delete('/:id', async (req,res) => {
    try {
        const deleteTeam = await Team.findByIdAndDelete(req.params.id)

        res.send({
            deleteTeam: deleteTeam,
            message: 'Team Deleted!'
        })
    } catch (error) {
        console.log(error);
        
        
    }
})

export default teamsRouter