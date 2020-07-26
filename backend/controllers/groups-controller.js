const Group = require('../models/groups');

const getGroups = async(req, res) => {
    let groups;
    try{
        groups = await Group.findAll({
            attributes: ['group_id', 'name']
        }).then(groups => res.json(groups));
        
    }catch(err){
        console.log(err);
    }
   
};

const getGroupsById = async(req, res) => {
    const {groupId} = req.params;

    let group;

    try{
        group = await Group.findAll(
            {
                attributes: ['group_id', 'name'],
                
                where:
            {
            group_id: groupId
            }
        
          }).then(group => res.json(group));
    }catch(err){
        console.log(err);
       
    }

    if(!group){
        console.log('HTTP error 404');
        return ;
    }

    
};


const updateGroup = async(req, res) => {
    const {name} = req.body;
    const {groupId} = req.params;

    let group;

    try{
        group = await Group.update(

            {name: name},
            {
                where:
                
                    {
                    group_id: groupId
                    }
          
            }

        );

    }catch(err){
        console.log(err);
    }

    
};


exports.getGroups = getGroups;
exports.getGroupsById = getGroupsById;
exports.updateGroup = updateGroup;
