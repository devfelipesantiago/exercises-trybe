const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
  client.write('Cliente numero 1');
})