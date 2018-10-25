const Database = require('../db/database')

class FileHandler {
    constructor(url) {
        this.fileURL = url;
        this.db = new Database(url)

        this.get = this.get.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    getAll(req, res) {
        this.db.findAll()
            .then(data => res.json(data))
    }

    get(req, res) {
        this.db.findOne(req.params._id)
            .then(data => res.json(data))
    }

    create(req, res) {
        this.db.push(req.body)
            .then(_ => res.json({
                'message': 'saved succesfully'
            }))
    }

    update(req, res) {
        this.db.update(req.params._id, req.body)
            .then(_ => res.json({
                'message': 'saved succesfully'
            }))
    }

    delete(req, res) {
        this.db.delete(req.params._id)
            .then(_ => res.json({
                'message': 'Deleted succesfully'
            }))
    }
}


module.exports = {
    FileHandler
}