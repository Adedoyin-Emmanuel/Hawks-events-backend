const Group = require('../models/group')
const { uuid } = require('uuidv4')

class GroupRepository {
   
   addGroup = async (title) => {
      try {
         const id = uuid()
         console.log(id)
         const newGroup = await Group.create({id, title})
         return JSON.parse(JSON.stringify(newGroup))
      } catch (error) {
         return error
      }
   }
}

module.exports = new GroupRepository;