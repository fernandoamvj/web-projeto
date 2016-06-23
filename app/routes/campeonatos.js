module.exports = function(app) {
    app.post('/home/homeUser/cadastraCamp', function(req, res) {
        var camp = req.body;
        camp.id_adm = req.session.adm;
        //camp.id_adm=req.session.id;
        var connection = app.infra.connectionFactory();
        var objetoBanco = new app.infra.CampeonatosDAO(connection);
        objetoBanco.cadastraCamp(camp, function(err, results) {
            if (err) {
                return next(err);
            }
            res.redirect('/home/User/cadastraEquipes');
        });
        connection.end();
    });

    app.get('/home/homeUser/cadastraEquipes', function(req, res) {
        var user = {
            id_adm: req.session.adm
        };
        var qEquipes = [{
            nEquipes: 0
        }];
        var connection = app.infra.connectionFactory();
        var objetoBanco = new app.infra.CampeonatosDAO(connection);
        objetoBanco.nEquipes(user, function(err, results) {
            if (err) {
                return next(err);
            }
            var campRecente = results.length - 1;
            qEquipes[0].nEquipes = results[campRecente].nEquipes;
            req.session.camp = results[campRecente].id_camp;
            res.render('campeonatos/cadastraTimes', {
                equipes: qEquipes
            });
        });
        connection.end();
    });
    app.post('/home/homeUser/cadastraTimes', function(req) {
        var nomeTime = req.body;
        var times = [{}];
        var connection = app.infra.connectionFactory();
        var objetoBanco = new app.infra.CampeonatosDAO(connection);
        for(var i=0; i < nomeTime.nome.length; i++) {
            times[i].nome = nomeTime.nome[i];
            times[i].ativo = '1';
            times[i].pontuacao = 0;
            times[i].id_camp = req.session.camp;
            co
            objetoBanco.cadastraTimes(times[i], function(err, results) {
                if (err) {
                    return next(err);
                }

            });
        }
        connection.end();
    });
}
