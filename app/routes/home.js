module.exports = function(app){
  app.get('/',function(req,res){
    var connection = app.infra.connectionFactory();
    var campeonatosBanco = new app.infra.CampeonatosDAO(connection);
    res.render('home/index');
    connection.end();
  });
}
