const { FileHandler } = require('./filehandler')

class Password extends FileHandler {
    constructor() {
        super('password');
    }
}

class User extends FileHandler {
    constructor() {
        super('user');
    }
}

module.exports = {
    Password: new Password(),
    User: new User()
}