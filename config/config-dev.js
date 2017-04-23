module.exports = {
    mongoConnection: 'mongodb://localhost:27017/ecommerce',
    mongoOptions: {
        //auto_reconnect: true,
        db: {
            w: 1,
        },
        server: {
            socketOptions: {
                keepAlive: 1,
            },
        },
    },
    port: "3000"
}