require('dotenv').config({ path: '../.env' });
// -- Mqtt
var mqtt = require('mqtt');
// Prodution mqtt
var broker = mqtt.connect(process.env.mqtt_host, {
    username: process.env.mqtt_username,
    password: process.env.mqtt_password,
    clientId: process.env.mqtt_client_id + Math.random().toString(16),
    connectTimeout: 1000,
    keepalive: 10
});
module.exports = {
    broker,
}