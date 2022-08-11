const Memories = require('../models/MemoriesModel');

const addMemory = async (req, res, next) => {
    const { image, place, state, date } = req.body;
    let existingMemory;

    try {
        existingMemory = await Memories.findOne({place});
    } catch (error) {
        console.log(error);
    }

    if (existingMemory) {
        return res.json({ message: `${place} is already added!` });
    }

    const memory = new Memories({
        image: String(image),
        place: String(place),
        state: String(state),
        date: String(date)
    });

    try {
        await memory.save();
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({ message: `${place} is added successfully!` });
};

const getAllMemories = async (req, res, next) => {
    let memories;
    try {
        memories = await Memories.find();
    } catch (error) {
        console.log(error);
    }

    if(!memories){
        return res.json({message : "No memory is added!"});
    }

    return res.status(200).json({memories});
};

const getMemory = async (req, res, next) => {
    let id = req.params.id;

    let memory;
    try {
        memory = await Memories.findById(id);
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json({memory});
};

const updateMemory = async (req, res, next) => {
    const id = req.params.id;
    const {image, place, state, date} = req.body;
    let memory;
    try {
        memory = await Memories.findByIdAndUpdate(id, {
            image : String(image),
            place : String(place),
            state : String(state),
            date : String(date)
        });
        await memory.save();
    } catch (error) {
        console.log(error);
    }
    return res.status(201).json({message : "Memory updated successfully!", memory})
};

const deleteMemory = async (req, res, next) => {
    let id = req.params.id;
    let memory;

    try {
        memory = await Memories.findByIdAndRemove(id);
    } catch (error) {
        console.log(err);
    }
    return res.status(200).json({message : "Memory deleted successfully!"});
};

exports.addMemory = addMemory;
exports.getAllMemories = getAllMemories;
exports.getMemory = getMemory;
exports.updateMemory = updateMemory;
exports.deleteMemory = deleteMemory;