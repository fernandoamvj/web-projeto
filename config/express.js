var express = require('express');
var load = require('express-load');

module.exports = function(){
  var app= express();
  app.use(express.static('./app/public'));
  app.set('view engine','ejs');
  app.set('views', './app/views');
  load('routes',{cwd: 'app'}) //carrega as pastas routes e infra da pasta app
      .then('infra')
      .into(app);// basicamente informa que tudo que for carregado vai para o objeto app
  app.use(function(req,res,next){ //criando um middleware q caso o status seja 404 a paginao n existe renderiza a 404.ejs
            res.status(404).render('erros/404');
            next();
          });
  app.use(function(error,req,res,next){
        res.status(500).render('erros/500');
        next();
      });
  return app;    
}
