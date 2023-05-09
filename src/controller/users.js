const usersModel = require('../models/users')

const crateNewUser = (req, res) => {
    console.log(req.body)
    res.json({
        message: 'CREATE new user success',
        data: req.body
    })
}

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers()

        res.json({
            message: 'GET all users success',
            data: data
        })      
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            data: data
        })      
    }
    
}

const updateUser = (req, res) => {
    const {id} = req.params
    console.log('id :', id)
    res.json({
        message: 'UPDATE user success'
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params
    res.json({
        message: 'DELETE user success',
        data: {
            id: id,
            name: "Dedi Kurniawan",
            email: "krn.dedi@gmail",
            address: "Tangerang"
        }
    })
}

module.exports = {
    getAllUsers,
    crateNewUser,
    updateUser,
    deleteUser
}