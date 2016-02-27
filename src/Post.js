var https  = require('https');
var querystring = require('querystring');
var Word = require('./Wording');
var Conf = require('./Config');

module.exports = {
  
  post : function(){

    var options = {
        hostname: 'typetalk.in',
        path: '/api/v1/topics/' + Conf.topicId + '?typetalkToken=' + Conf.typetalkToken,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    var req = https.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      res.on('data', function (chunk) {
//      console.log('BODY: ' + chunk);
      });
    });
     req.write(querystring.stringify({'message': Word.weekMessage}));
     //req.write(querystring.stringify({'message': 'おはよう hello' }));
     req.end();
  } 
}

