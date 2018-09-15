const { FileHandler } = require('./filehandler')

class Password extends FileHandler {
    constructor() {
        super('./db/password.json');
    }
}

class User extends FileHandler {
    constructor() {
        super('./db/user.json');
    }
}

module.exports = {
    Password: new Password(),
    User: new User()
}