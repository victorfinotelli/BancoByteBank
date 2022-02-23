/*
Ser autenticavel significa ter o método autenticar.

duck type em linguagens fracamente tipadas, não precisamos pré definir o que ele vai receber
pois contendo o método pra ele ja basta (ex se ele tem o que precisa ele vai idependente do "tipo").
Em resumo se ele possui o metodo dentro da propriedade que quero utilizar ele aceita. Polimorfismo.
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}