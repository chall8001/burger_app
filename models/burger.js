const orm = require('../config/orm.js')

const burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res))
    },
    create(cols, vals, cb) {
        orm.create('burgers', cols, vals, (res) => cb(res))
    },
    update(objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, (res) => cb(res))
    },
    delete(condition, cb) {
        orm.delete('cats', condition, (res) => cb(res) )
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (event){
        console.info('DOM loaded')
    }
})

module.exports = burger