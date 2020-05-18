# ES6-CLI

Este repositório é um experimento de fabricação de CLI's pré-compiladas utilizando-se o ES6 e dando suporte a versões mais baixas do **Node**.
> 
## Motivações

1. Em uma CLI mais complexa, algumas *features* são necessárias como o `optional-chaining` que não é suportado em versões `<= 13.x` do **Node**.

2. Teste de velocidade de uma `CLI compilada` *vs* `CLI runtime`

## Benchmarks
Veja abaixo os testes de performance:
```
$ benchmark ./test/*.spec.js
✔ runtime.spec x 18.37 ops/sec ±72.01% (6 runs sampled)
✔ compiled.spec x 15.02 ops/sec ±39.02% (13 runs sampled)
✨  Done in 23.79s.
```
> Após fazer várias vezes o teste, executando o comando `yarn test` configurado no `package.json`, observamos que o  script compilado acaba sendo mais rápido que o script em runtime
> 
> O que está sendo comparado nesse benchmark é uma versão para produção (compilada) e uma versão de desenvolvimento (runtime). O Benchmark não está fazendo comparação entre códigos ES6 e commonjs.

## Versões Suportadas

- :white_check_mark: 14.x
- :white_check_mark: 13.x
- :white_check_mark: 12.x
- :white_check_mark: 11.x
- :white_check_mark: 10.x
- :white_check_mark: 9.x
- :white_check_mark: 8.x
- :x: <= 7.x

## Issues

### <= v7.x

- Unexpected token ... (Spread operator)
  - Não foi possível ajustar o problema, já que o erro está vindo do pacote `meow`, que não suporta versões mais baixas que a **v8** do **node**