const Game = require('../models/Game')

const gameController = {}

gameController.createGame = async (req, res) => {
    const game = new Game({
        _id: req.body._id,
        description: req.body.description,
        title: req.body.title,
        instruction: req.body.instruction,
        iterationI: req.body.iterationI,
        iterationJ: req.body.iterationJ,
        mostPlayed: req.body.mostPlayed,
        iframe: req.body.iframe,
        imgPath: req.body.imgPath,
        tags_id: req.body.tags_id
    });
    await game.save();
    res.json({status: 'Juego guardado'})
}

gameController.getGames = async (req, res) => {
    const games = await Game.find()
    res.render('index', {games})
}

gameController.getGame = async (req, res) => {
    const game = await Game.findById(req.params._id)
    res.json(game)
}

gameController.editGame = async (req, res) => {
    const { _id } = req.params
    const game = {
        _id: req.body._id,
        description: req.body.description,
        title: req.body.title,
        instruction: req.body.instruction,
        iterationI: req.body.iterationI,
        iterationJ: req.body.iterationJ,
        mostPlayed: req.body.mostPlayed,
        iframe: req.body.iframe,
        imgPath: req.body.imgPath,
        tags_id: req.body.tags_id
    }
    await Game.findByIdAndUpdate(_id, {$set: game}, {new: true});
    res.json({status: 'Juego actualizado'})
}

gameController.deleteGame = async (req, res) => {
    const { _id } = req.params
    await Game.findByIdAndRemove(_id)
    res.json({status: 'Juego borrado'})
}

module.exports = gameController;
