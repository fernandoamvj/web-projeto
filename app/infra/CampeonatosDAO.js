function CampeonatosDAO(connection) { //CLasse
    this._connection = connection; //_ deixar claro q connection é privado
}
CampeonatosDAO.prototype.verificaUser = function(user, callback) { //usando orientação a objeto em Javascript utiliza-se prototype para adicionar um método ou propriedades a uma classe já criada
    this._connection.query('select login,senha from ADM where login = ?', user.login, callback);
    //this._connection.query('select * from ADM', callback);
}
CampeonatosDAO.prototype.verificaLogin = function(user, callback) { //usando orientação a objeto em Javascript utiliza-se prototype para adicionar um método ou propriedades a uma classe já criada
    this._connection.query('select id_adm,login from ADM where login = ?', user.login, callback);
    //this._connection.query('select * from ADM', callback);
}
CampeonatosDAO.prototype.pegaID = function(user, callback) { //usando orientação a objeto em Javascript utiliza-se prototype para adicionar um método ou propriedades a uma classe já criada
    this._connection.query('select id_adm from ADM where login = ?', user.login, callback);
    //this._connection.query('select * from ADM', callback);
}
CampeonatosDAO.prototype.lista = function(callback) { //usando orientação a objeto em Javascript utiliza-se prototype para adicionar um método ou propriedades a uma classe já criada
    this._connection.query('select * from Campeonatos', callback);
}
CampeonatosDAO.prototype.salvaUser = function(user, callback) {
    this._connection.query('insert into ADM set ?', user, callback); //o drive do mysql pra node ja esta preparado para receber um JSOn como foi passado
}
CampeonatosDAO.prototype.cadastraCamp=function(camp, callback){
  this._connection.query('insert into Campeonatos set ?',camp,callback);
}
CampeonatosDAO.prototype.nEquipes = function(user, callback) { //usando orientação a objeto em Javascript utiliza-se prototype para adicionar um método ou propriedades a uma classe já criada
    this._connection.query('select id_camp,nEquipes from Campeonatos where id_adm = ?', user.id_adm, callback);
    //this._connection.query('select * from ADM', callback);
}
CampeonatosDAO.prototype.cadastraTimes=function(times, callback){
    console.log('test')
    this._connection.query('insert into Times set ?',times,callback);
}
module.exports = function() {
    return CampeonatosDAO;
}
