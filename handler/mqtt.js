const { broker } = require('../connection/mqtt');
const { log, user } = require('../controller/log')

broker.on('connect', function () {
    console.log('Mqtt is connect');
    broker.subscribe('$share/logger/log/#');
})

broker.on('disconnect', function () {
    console.log("MQTT disconnect");
})
broker.on('reconnecting', function () {
    console.log("MQTT reconnecting");
})

broker.on('message', async function (topic, message) {
    console.log(topic, message.toString());
    const payload = JSON.parse(message.toString());
    if (topic == 'log/dump') {
        console.log(payload);
        log(payload.level, payload.topic, payload.title, payload.value)
    }
    if (topic == 'log/user') {
        console.log(payload);
        user(payload.setTitle, payload.nama, payload.fullname, payload.email, payload.wa, payload.url);
    }
});