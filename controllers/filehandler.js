const fs = require('fs')

class FileHandler {
    constructor(url) {
        this.fileURL = url;
    }

    get(res) {
        fs.readFile(this.fileURL, 'utf8', (err, data) => {
            if (err) throw err
            res.json(JSON.parse(data))
        })
    }

    create(req, res) {
        fs.readFile(this.fileURL, 'utf8', (err, data) => {
            if (err) throw err
            let json_data = JSON.parse(data)
            json_data.push(req.body)
            let string_data = JSON.stringify(json_data)
            fs.writeFile(this.fileURL, string_data, (err, data) => {
                if (err) throw err;
                res.json({
                    'message': 'saved succesfully'
                })
            })
        })
    }

    update(req, res) {
        fs.readFile(this.fileURL, 'utf8', (err, data) => {
            if (err) throw err
            let json_data = JSON.parse(data)
            let req_data = req.body

            for (let i = 0; i < json_data.length; i++) {
                if (json_data[i].id === req_data.id) {
                    json_data[i].id = req_data.id;
                    json_data[i].website = req_data.website;
                    json_data[i].password = req_data.password;
                }
            }

            let string_data = JSON.stringify(json_data)

            fs.writeFile(this.fileURL, string_data, (err, data) => {
                if (err) throw err;
                res.json({
                    'message': 'saved succesfully'
                })
            })
        })
    }

    delete(req, res) {
        fs.readFile(this.fileURL, 'utf8', (err, data) => {
            if (err) throw err
            let json_data = JSON.parse(data)
            let req_data = req.body

            for (let i = 0; i < json_data.length; i++) {
                if (json_data[i].id === req_data.id) {
                    json_data.splice(i, 1)
                }
            }

            let string_data = JSON.stringify(json_data)

            fs.writeFile(this.fileURL, string_data, (err, data) => {
                if (err) throw err;
                res.json({
                    'message': 'Deleted succesfully'
                })
            })
        })
    }
}


module.exports = {
    FileHandler
}