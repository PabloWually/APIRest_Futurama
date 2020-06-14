const Episode = require('../model/episode')

module.exports = {
    saveEpisode : async(req, res) => {
        const episode = new Episode(req.body)
        await episode.save()
        res.send(req.body)
    },

    findAllEpisodes : async(req, res) => {
        const episodes = await Episode.find()
        res.send(episodes)
    },

    deleteEpisodes : async(req, res) => {
        const  id  = req.params.id
        res.send(await Episode.deleteOne({_id:id}))
    },

    updateEpisodes : async(req, res) =>{
        const id = req.params.idUpdate
        res.send(await Episode.updateOne({_id:id}, req.body))
    }
}