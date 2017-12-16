function btnConf(){
    $.confirm({
        title: 'Renovação',
        content: 'Gostaria de renovar este livro?', 
        buttons: {
            Confirmar: function () {
                $.alert('O aluguel do livro foi renovado');
            },
            Cancelar: function () {
            
            },
        }
    })
};

function btnAlug() {
    $.confirm({
        title: 'Reservar',
        content: 'Vocẽ gostaria de reservar este livro?',
        buttons: {
            Sim: function () {
                $.confirm({
                    title: "Confirmar reserva!",
                    content:
                    'Para confirmar o aluguel do livros digite seus dados abaixo:' +
                    '<form action="" class="formName">'+
                    '<div class="form-group">' +
                    '<label>Email</label> ' +
                    '<input type="email" class=" form-control" required />' +
                    '<label>Senha</label> ' +
                    '<input type="password" class=" form-control" required />' +
                    '</div>' +
                    '</form>',
                    buttons: {
                        Enviar: function (){
                            $.alert('Livro reservado com sucesso!!!')
                        },
                        Cancelar: function(){
                        }

                        }
                })
            },

            Não: function () {

            },

        }
    })
}

