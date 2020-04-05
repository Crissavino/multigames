var express = require('express');
var router = express.Router();


games =
    [
      {
        title: 'Probando',
        desc: 'esta es una descripcion'
      },
      {
        title: 'Probando2',
        desc: 'esta es una descripcion2'
      },
      {
        title: 'Probando3',
        desc: 'esta es una descripcion3'
      },
      {
        title: 'Probando',
        desc: 'esta es una descripcion'
      },
      {
        title: 'Probando2',
        desc: 'esta es una descripcion2'
      },
      {
        title: 'Probando3',
        desc: 'esta es una descripcion3'
      }
    ];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pilar', games});
});

module.exports = router;
