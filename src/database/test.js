const database = require('./db')
const saveOrphanage = require('./saveOrphanage')
const fakeDatabase = require('./fakedata')



database.then(async (db) => {

    await fakeDatabase.forEach(dado => {
        saveOrphanage(db, dado)
    })
    const selectedOrphanages = await db.all("SELECT * FROM orphanages;")

    //apagando todos os dados da tabela
    // const selectedOrphanages = await db.all("DELETE FROM orphanages;")
    console.log(selectedOrphanages)
})