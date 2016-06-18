function CampeonatosDAO(connection){//CLasse
    this._connection = connection;//_ deixar claro q connection é privado
}
CampeonatosDAO.prototype.lista = function(callback){ //usando orientação a objeto em Javascript utiliza-se prototype para adicionar um método ou propriedades a uma classe já criada
    this._connection.query('select * from Campeonatos', callback);
}
CampeonatosDAO.prototype.salva = function(campeonato,callback){

  this._connection.query('insert into Campeonatos set ?',campeonato,callback);//o drive do mysql pra node ja esta preparado para receber um JSOn como foi passado

}
module.exports = function(){
  return CampeonatosDAO;
}
