socket.on('message', function (message) {
		console.log('Got message: ', message);
    // For a real app, should be room only (not broadcast)
		socket.emit('message', message);
	});

	socket.on('create or join', function (room) {
		var numClients = 0 ;//io.sockets.clients(room).length;

		console.log('Room ' + room + ' has ' + numClients + ' client(s)');
		console.log('Request to create or join room', room);

		if (numClients == 0){
			//socket.join(room);
			socket.emit('created', room);
		} else if (numClients == 1) {
			//io.sockets.in(room).emit('join', room);
			//socket.join(room);
			socket.emit('joined', room);
		} else { // max two clients
			socket.emit('full', room);
		}
		socket.emit('emit(): client ' + socket.id + ' joined room ' + room);
		//socket.broadcast.emit('broadcast(): client ' + socket.id + ' joined room ' + room);

	});