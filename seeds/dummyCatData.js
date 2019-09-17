
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, title: 'Luna', path: '/data/imgs/photo-1494256997604-768d1f608cac.jpg', tags: 'cat'},
        {id: 2, title: 'Chloe', path: '/data/imgs/photo-1526336024174-e58f5cdd8e13.jpg', tags: 'cat'},
        {id: 3, title: 'Bella', path: '/data/imgs/photo-1543852786-1cf6624b9987.jpg', tags: 'cat'},
      ]);
    });
};
