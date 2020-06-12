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
    }
}