function telephoneCheck(str) {
  let regex = new RegExp(/^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/)
  return regex.test(str)
}
telephoneCheck("555-555-5555")


^(1\s?)? //primeiro grupo inicia aqui(^) (1\s?)?, digit 1 e um espaço (\s) opcional (?)
(\d{3}|\(\d{3}\)) //segundo grupo (\d{3}|\(\d{3}\)) 3 digitos ou (|) 3 digitos com parenteses
[\-\s]? //[\-\s]? hifen e espaço opcionais
\d{3} //3 digitos
[\-\s]? //[\-\s]? hifen e espaço opcionais
\d{4}$ //4 digitos encerra aqui ($)


/*Validador de número de telefone

Retorna true se a string fornecida se parece com um número telefônico dos Estados Unidos válido.

O usuário pode preencher o campo do formulário de qualquer maneira que escolher contanto que tenha o formato de um número válido dos EUA. Os seguintes são exemplos de formatos válidos para números nos EUA (consulte os testes abaixo para outras variantes):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

Para este desafio, você vai receber uma string como 800-692-7753 ou 8oo-six427676;laskdjf. Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país é fornecido, você deve confirmar que o código do país é 1. Retorne true se a seqüência de caracteres for um número válido de telefone dos EUA; caso contrário, retorne false.
*/
