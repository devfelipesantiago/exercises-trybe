db.transactions.aggregate([{ $match: { from: 'Dave America' } }]);

db.transactions.aggregate(
  [
    {
      $match: {
        $or: [
          { value: { $gt: 700, $lt: 6000 } },
          { to: 'Lisa Simpson' }
        ]
      }
    }
  ]
);

db.transactions.aggregate([
  { $match: { value: { $gt: 1000 } } }, { $limit: 3 }
]);

// Como você já viu, o campo _id é padrão e é o único que necessita de uma negação explícita para que não seja incluído no documento de saída:
db.transactions.aggregate(
  [
    {
      $project: {
        _id: false, bank: true, value: true,
      }
    }
  ]
);
// Para incluir apenas os campos _id , title e author no documento de saída, utilize o operador $project da seguinte maneira:
db.books.aggregate(
  [
    {
      $project: {
        title: 1,
        author: 1
      }
    }
  ]
);

// Quando você nega um campo específico, todos os outros serão incluídos no documento de saída.

// Podemos usar uma string iniciada com o caractere $ para indicar que queremos projetar um campo, assim: "$nomeDoCampo".
// A operação a seguir adiciona os novos campos isbn , lastname e copiesSold :
db.books.aggregate([
  {
    project: {
      title: 1,
      isbn: {
        prefix: { $substr: ["$isbn", 0, 3] },
        group: { $substr: ["$isbn", 3, 2] },
        publisher: { $substr: ["$isbn", 5, 4] },
        title: { $substr: ["$isbn", 9, 3] },
        checkDigit: { $substr: ["$isbn", 12, 1] }
      },
      lastName: "$author.last",
      copiesSold: "$copies"
    }
  }
]);

//----------------------------------------------------------------
db.sales.insertMany([
  {
    _id: 1,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("2"),
    date: ISODate("2014-03-01T08:00:00Z")
  },
  {
    _id: 2,
    item: "O Homem e Seus Símbolos",
    price: NumberDecimal("20"),
    quantity: NumberInt("1"),
    date: ISODate("2014-03-01T09:00:00Z")
  },
  {
    _id: 3,
    item: "Comunicação Não-Violenta",
    price: NumberDecimal("5"),
    quantity: NumberInt("10"),
    date: ISODate("2014-03-15T09:00:00Z")
  },
  {
    _id: 4,
    item: "Comunicação Não-Violenta",
    price: NumberDecimal("5"),
    quantity: NumberInt("20"),
    date: ISODate("2014-04-04T11:21:39.736Z")
  },
  {
    _id: 5,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("10"),
    date: ISODate("2014-04-04T21:23:13.331Z")
  },
  {
    _id: 6,
    item: "A Coragem de Ser Imperfeito",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("5"),
    date: ISODate("2015-06-04T05:08:13Z")
  },
  {
    _id: 7,
    item: "A Coragem de Ser Imperfeito",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("10"),
    date: ISODate("2015-09-10T08:43:00Z")
  },
  {
    _id: 8,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("5"),
    date: ISODate("2016-02-06T20:20:13Z")
  }
]);

// Você pode utilizar o operador $group para contar o número de documentos da coleção sales.
db.sales.aggregate(
  {
    $group: {
      _id: null, count: { $sum: 1 }
    }
  }
);

// O operador $group também pode ser utilizado para encontrar os valores distintos de um campo. Por exemplo, se quiser saber todos os valores únicos do campo item e quantos são, faça como o exemplo seguinte.
db.sales.aggregate([
  {
    $group: {
      _id: "$item", count: { $sum: 1 }
    }
  }
]);

//Para saber o valor das vendas, você deve utilizar o operador $sum , que, por sua vez, aceita mais modificadores. No exemplo que se segue, multiplica-se o valor do campo price pelo valor do campo quantity.
db.sales.aggregate([
  {
    group: {
      _id: "$item",
      totalSaleAmount: {
        sum: {
          multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

// Também é possível realizar operações equivalentes ao HAVING do SQL , que nada mais é que um filtro depois de um agrupamento. Por exemplo, se você quiser manter o agrupamento anterior, mas saber apenas as vendas que possuem valores maiores do que 100 , é só adicionar mais um estágio no pipeline.
db.sales.aggregate([
  // Primeiro Estágio
  {
    group: {
      _id: "$item",
      totalSaleAmount: {
        sum: {
          multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  // Segundo Estágio
  {
    match: { "totalSaleAmount": { $gte: 100 } }
  }
]);

// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_history"
    }
  }
]);
// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
  {
    lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
  {
    limit: 4,
  },
]);
// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([
  {
    match: { State: 'Florida' },
  },
  {
    lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
]);
