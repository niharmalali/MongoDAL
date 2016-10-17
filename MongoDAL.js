var config = require('./config.json');


function buildConnection(server, ports, database)
{
  return 'mongodb://'+(server||localhost)+':'+(ports||'27017')+'/'+(database||'video');
}

function getMongoDbConnection(){
  var server = config.server;
  var ports = config.ports;
  var database =config.database;
  return buildConnection(server, ports, database);
}


console.log(getMongoDbConnection());
