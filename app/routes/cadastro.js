module.exports = function(app) {
    app.get('/cadastroUser', function(req, res) {
        res.render('home/cadastroUser', {
            errosValidacao: {}
        });
    });

    app.post('/salvaUser', function(req, res) {
        var user = req.body;
        req.assert('login', 'Login é Obrigatório!').notEmpty();
        req.assert('senha', 'Senha é Obrigatório').notEmpty();
        var erros = req.validationErrors();
        if (erros) {
            res.status(400).render('home/cadastroUser', {
                errosValidacao: erros
            });
            return;
        }
        var connection = app.infra.connectionFactory(); // express-load cria objetos com nome da pasta e as sub-pastas viram propriedades
        var objetoBanco = new app.infra.CampeonatosDAO(connection);
        objetoBanco.verificaLogin(user, function(err, results) {
            if (err) {
                return next(err);
            }
            if (results != '') {
                if (results[0].login == user.login) { //results retorna um array de objetos
                    erros = [{
                        param: 'login',
                        msg: 'Login já existe!! Tente outro!',
                        value: ''
                    }];
                    res.status(400).render('home/cadastroUser', {
                        errosValidacao: erros
                    });
                }
            } else {
                connection.end();
                var connection2 = app.infra.connectionFactory(); // express-load cria objetos com nome da pasta e as sub-pastas viram propriedades
                var objetoBanco = new app.infra.CampeonatosDAO(connection2);
                objetoBanco.salvaUser(user, function(err, results) {
                    if (err) {
                        return next(err);
                    }
                    req.session.login = user.login;
                    res.redirect('/home/homeUser');
                });
                connection2.end();
            }
        });
    });
}
