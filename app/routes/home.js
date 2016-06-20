module.exports = function(app){
  app.get('/',function(req,res){
    var connection = app.infra.connectionFactory();
    var campeonatosBanco = new app.infra.CampeonatosDAO(connection);
    res.render('home/index');
    connection.end();
  });
  app.get('/home/homeUser',function(req,res){
    var dados = {
      id:'',
      login : req.session.login
    };
    var connection = app.infra.connectionFactory();
    var objetoBanco = new app.infra.CampeonatosDAO(connection);
    objetoBanco.pegaID(dados,function(err,results){
      if(err){
        return next(err);
      }
      console.log(results[0].id_adm);
      //req.session.id = results[0].id_adm;
    });
    connection.end();
    console.log(req.session.id);
    res.render('home/homeUser',{dadosUser:dados});
  });
}
