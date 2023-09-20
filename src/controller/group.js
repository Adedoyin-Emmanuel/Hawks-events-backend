const {addGroup} = require('../repository/group')


class GroupController {

   createGroup = async(req, res) => {
      try {
         const { title } = req.body; 
         const newGroup = await addGroup(title)
      } catch (error) {
         return res.status(500).json({
            message: "Error creating group",
            error: error.message
         })
      }
   }

}

module.exports = new GroupController;