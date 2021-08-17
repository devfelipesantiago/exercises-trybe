// Do lado do servidor faça um listener para capturar o evento likePost que vai incrementar a quantidade atual de likes do post.
// module.exports = (io) => io.on('connection', (socket) => {
//   let currentLikes = 0;

//   socket.on('like', () => {
//     currentLikes += 1;

//     // Emita um evento updateLikes apenas para o cliente que enviou o like enviando a quantidade atual de likes.
//     io.emit('updateLikes', currentLikes);
//   });
// });

// No servidor implemente um listener para o evento starPost e emita um evento updateStars com a quantidade para todos os clientes exceto o cliente que enviou o evento.

module.exports = (io) => io.on('connection', (socket) => {
  let currentLikes = 0;
  let currentStars = 0;

  socket.on('likePost', () => {
    currentLikes += 1;

    socket.emit('updateLikes', currentLikes);
  })

  socket.on('starPost', () => {
    currentStars += 1;

    socket.broadcast.emit('updateStars', currentStars);
  })
});