


        //function confereCadastro(){
            document.getElementById('form').addEventListener('submit', function(event) {
                // Impede o envio do formulário
                event.preventDefault();
                        const nome = document.getElementById('nome').value;
                        const idade = document.getElementById('idade').value;
                        const endereco = document.getElementById('endereco').value;
                        const login = document.getElementById('login').value;
                        const senha = document.getElementById('senha1').value;
                        const reptSenha = document.getElementById('senha2').value;
            
            
                        let errorMessage = '';
            
                // Validação do username
                if (nome === '') {
                    errorMessage += 'O campo Nome é obrigatório.\n';
                } else if (nome.length < 10) {
                    errorMessage += 'nome deve ter pelo menos 10 caracteres.\n';
                }
            
                // Validação do email
                if (idade === '') {
                    errorMessage += 'O campo Idade é obrigatório.\n';
                } 
            
                // Validação do password
                if (endereco === '') {
                    errorMessage += 'O campo Endereço é obrigatório.\n';
                } else if (endereco.length < 6) {
                    errorMessage += 'endereço deve ter pelo menos 6 caracteres.\n';
                }


                if (login === '') {
                    errorMessage += 'O campo Login é obrigatório.\n';
                } else if (login.length > 5) {
                    errorMessage += 'login deve ter pelo menos 5 caracteres.\n';
                }

                if (senha === '') {
                    errorMessage += 'O campo Senha é obrigatório.\n';
                }

                if (reptSenha === '') {
                    errorMessage += 'O campo Confirme sua senha é obrigatório.\n';
                }
            
                // Se houver erros, exibe a mensagem e impede o envio do formulário
                if (errorMessage !== '') {
                    alert(errorMessage);
                } else {
                    // Se não houver erros, envia o formulário
                    alert('Cadastrado com sucesso!');
                 
                     document.getElementById('form').submit();
                }
            });