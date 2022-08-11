const express = require('express');
const { addMemory, getAllMemories, deleteMemory, getMemory, updateMemory } = require('../controllers/MemoryController');
const router = express.Router();

router.post('/addmemory', addMemory);
router.get('/getallmemories', getAllMemories);
router.get('/getmemory/:id', getMemory);
router.put('/updatememory/:id', updateMemory);
router.delete('/deletememory/:id', deleteMemory);

module.exports = router;