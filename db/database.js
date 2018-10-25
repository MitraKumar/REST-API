const fs = require('fs');
const crypto = require("crypto");
const util = require('util');

class Database {
    constructor(filename) {
        this.filename = 'data/' + filename
        this.dirname = './data'
        this.createDir()
    }

    createDir() {
        if (!fs.existsSync(this.dirname)) {
            fs.mkdirSync(this.dirname);
        }
    }

    async push(data) {
        // Create a new object with an unique id
        const obj = {
            _id: crypto.randomBytes(16).toString("hex"),
            ...data
        }

        // Checking the content of the file
        const result = await this.findAll()

        // Pushing that object to an array
        result.push(obj)

        // Saving the Array to a file
        const writeFilePromise = util.promisify(fs.writeFile)
        return await writeFilePromise(this.filename, JSON.stringify(result))
    }

    async findAll() {
        if (fs.existsSync(this.filename)) {
            const readFilePromise = util.promisify(fs.readFile)
            const data = JSON.parse(await readFilePromise(this.filename, 'utf8'))
            return data
        }

        return []
    }

    async findOne(id) {
        if (fs.existsSync(this.filename)) {
            const readFilePromise = util.promisify(fs.readFile)
            const data = JSON.parse(await readFilePromise(this.filename, 'utf8'))
            return data.filter(elm => elm._id === id)
        }

        return []
    }

    async update(_id, data) {
        if (fs.existsSync(this.filename)) {
            const readFilePromise = util.promisify(fs.readFile)
            const writeFilePromise = util.promisify(fs.writeFile)

            const file_content = JSON.parse(await readFilePromise(this.filename, 'utf8'))

            const updated_file = file_content
                .map(elm => elm._id === _id ? { ...elm, ...data } : elm)

            return await writeFilePromise(this.filename, JSON.stringify(updated_file))
        }
    }

    async delete(_id) {
        if (fs.existsSync(this.filename)) {
            const readFilePromise = util.promisify(fs.readFile)
            const writeFilePromise = util.promisify(fs.writeFile)

            const file_content = JSON.parse(await readFilePromise(this.filename, 'utf8'))

            const updated_file = file_content
                .filter(elm => (elm._id !== _id))

            return await writeFilePromise(this.filename, JSON.stringify(updated_file))
        }
    }

    async deleteAll() {
        if (fs.existsSync(this.filename)) {
            const writeFilePromise = util.promisify(fs.writeFile)

            const updated_file = []

            return await writeFilePromise(this.filename, JSON.stringify(updated_file))
        }
    }
}

module.exports = Database