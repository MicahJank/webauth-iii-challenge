const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByDepartment
};


function find() {
    return db('users').select('id', 'username', 'password', 'departments');
  }
  
  function findBy(filter) {
    return db('users').where(filter);
  }

  function findByDepartment(department) {
    return db('users').where('departments', department);
  }
  
function add(user) {
    // const [id] = await db('users').insert(user);
    // return findById(id);
    return db('users').insert(user)
                .then(ids => {
                    const [id] = ids;
                    return findById(id);  
                });
  }
  
  function findById(id) {
    return db('users')
      .where({ id })
      .first()
      .select('id', 'username', 'departments');
  }