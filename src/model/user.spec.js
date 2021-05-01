const User = require("./user")

const {describe, expect, test} = require('@jest/globals')

describe('Testes do usuario', () => {
    test('Deve jogar um erro quando o usuario for menor de idade', () => {
        try {
            new User('1', 'Teste', 2015, 'CPF')
        } catch (error) {
            expect(error.message).toBe('Usuario deve ser maior de idade')
        }
    })
    
    test('Deve criar um usuario quando ele for maior de idade', () => {
        const user = new User('1', 'Teste', 2000, 'CPF')
        expect(user.birthdate).toBe(2000)
    })
    
    test('Deve jogar um erro quando não é passado um tipo de identificador', () => {
        try {
            new User('1', 'Teste', 2000)
        } catch (error) {
            expect(error.message).toBe('Deve ser passado o tipo de identificador do usuario')
        }
    })

    test('Deve jogar um erro quando não é passado um identificador', () => {
        try {
            new User(null, 'Teste', 2000, 'CPF')
        } catch (error) {
            expect(error.message).toBe('Deve ser passado o identificador do usuario')
        }
    })

    test('Deve Criar um usuario quando todas os dados são validos', () => {
        try {
            new User('1', 'Teste', 2000, 'CPF')
        } catch (error) {
            expect(error.message).toBe('Deve ser passado o identificador do usuario')
        }
    })
})