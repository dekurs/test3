const usersModel = require('../models/users')

const crateNewUser = async (req, res) => {
    const {body} = req
    
    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            message: "Mohon lengkapi data anda",
            data: null
        })
    }

    try {
        await usersModel.createNewUser(body)
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })  
    }
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
            serverMessage: error,
        })      
    }
    
}

const updateUser = async (req, res) => {
    const {id} = req.params
    const {body} = req
    try {
        await usersModel.updateUser(body, id)

        res.json({
            message: 'UPDATE users success',
            data: {
                id: id,
                ...body
            }
        })      
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })      
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    try {
        await usersModel.deleteUser(id)
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })      
    }
    
}

module.exports = {
    getAllUsers,
    crateNewUser,
    updateUser,
    deleteUser
}