### Vamos supor os números não ordenados
- coleção = 7 5 1 2 8 4 6 3

### Separamos nosso array em porções menores
- 7 5 1 2         8 4 6 3

### continuamos fazendo isto
### até a menor porção possível (1)
- 7 5    1 2    8 4    6 3

### Até a menor porção possível (1)
- 7    5    1    2    8    4    6    3

### Feito o processo de divisão, vamos ao processo de conquista.
### Vamos reagrupando as divisões mas de forma ordenada
- 5 7    1    2    8    4    6    3

- 5 7    1 2    8    4    6    3

- 5 7     1 2    4 8    6    3

- 5 7     1 2    4 8    3 6

### Continuamos o reagrupamento
- 1 2 5 7    4 8    3 6

- 1 2 5 7    3 4 6 8

### Por fim misturamos todos os elementos
- 1 2 3 4 5 6 7 8