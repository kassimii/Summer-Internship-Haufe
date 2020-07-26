const express = require('express');

const router = express.Router();

const {
    getGroups,
    getGroupsById,
    updateGroup
} = require('../controllers/groups-controller');

router.get('/', getGroups);
router.get('/:groupId', getGroupsById);
router.patch('/update/:groupId', updateGroup);

module.exports = router;