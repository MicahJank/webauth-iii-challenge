
exports.seed = function(knex) {
  return knex('users').insert([
  {
    username: 'fakeUser1',
    password: 'hashPassWord',
    departments: 'Department A'
  },
  {
    username: 'fakeUser2',
    password: 'hashPassWord',
    departments: 'Department B'
  },
  {
    username: 'fakeUser3',
    password: 'hashPassWord',
    departments: 'Department A'
  },
  {
    username: 'fakeUser4',
    password: 'hashPassWord',
    departments: 'Department B'
  }
]);
  
};
