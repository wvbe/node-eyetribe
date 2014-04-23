var net = require('net')
	util = require('util'),
	io = require('socket.io').listen(8080, {log: false}),
connectionOptions = {
	ip: 'localhost',
	port: 6555
};


var socket = net.createConnection(connectionOptions, function() {
	setInterval(function() {
		socket.write(JSON.stringify({
		    "category": "heartbeat"
		}));
	}, 2000);


	console.log('Socket on port '+connectionOptions.port+' (TheEyeTribe server) connected');

	socket.on('error', function(data) {
		console.log('TheEyeTribe error', data);
	})
	socket.on('close', function(data) {
		console.log('TheEyeTribe close');
	})
	socket.on('data', function(data) {
			try {
				data = JSON.parse(data);
				if(data.values && data.values.frame) {
					handleFrameData(data.values.frame);
				}
			} catch(e) {
				console.error('Malformed JSON', e);
			}
	})

	// Get some values
//	socket.write(JSON.stringify({
//		category: 'tracker',
//		request: 'get',
//		values: ['framerate','heartbeatinterval', 'frame']
//	}));

	// Set some values
	socket.write(JSON.stringify({
		category: 'tracker',
		request: 'set',
		values: {push: true}
	}));
});

socket.setEncoding('utf8');


function handleFrameData(data) {
	console.log(data.avg.x+'\t\t'+data.avg.y);
	io.sockets.emit('frame', data);
}