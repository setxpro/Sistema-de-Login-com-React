# usuário está logado ?
# Se estiver -> Validar o usuário.
# sim ? Libera o Acesso.


Para Logar

[] -> Recebe os dados de login
[] -> Enviar uma requisição para p BACKEND validar esses dados no DB
[] -> True ? Sava-se TOKEN / Alguma referência ao Browser
[] -> False ? Avisar que esta errado

Para Deslogar

[] -> Apago a ref que existir no browser
[] -> Enviar uma req para o BACKEND destruir aquela ref
[] -> Atualizo a pág