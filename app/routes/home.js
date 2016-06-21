module.exports = function(app) {
    app.get('/', function(req, res) {
        var connection = app.infra.connectionFactory();
        var campeonatosBanco = new app.infra.CampeonatosDAO(connection);
        res.render('home/index');
        connection.end();
    });
    app.get('/home/homeUser', function(req, res) {
        var dados = {
            id: '',
            login: req.session.login
        };
        var connection = app.infra.connectionFactory();
        var objetoBanco = new app.infra.CampeonatosDAO(connection);
        objetoBanco.pegaID(dados, function(err, results) {
            if (err) {
                return next(err);
            }
            req.session.adm = results[0].id_adm;
            res.render('home/homeUser', {
                dadosUser: dados
            });
        });
        connection.end();
        //console.log(req.session.id);
    });
    app.post('/home/homeUser', function(req, res) {
        var user = req.body;
        req.session.login = user.login;
        var connection = app.infra.connectionFactory();
        var objetoBanco = new app.infra.CampeonatosDAO(connection);
        objetoBanco.verificaUser(user, function(err, results) {
            if (err) {
                return next(err);
            }
            if (results != '') {
                if ((results[0].login == user.login) && (results[0].senha == user.senha)) { //results retorna um array de objetos

                    res.redirect('/home/homeUser');
                }
            }
            connection.end();
            //console.log(req.session.id);
        });
    });
    app.get('/home/homeUser/cadastroCamp', function(req, res) {
        res.render('campeonatos/cadastro');
    });
}
