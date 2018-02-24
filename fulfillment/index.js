/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
exports.helloHttp = function helloHttp (req, res) {
  response = "This is a sample response from your webhook. Not Telegram!" //Default response from the webhook to show it's working
  resp_tele="This is a sample response from your webhook to telegram!"

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response, "data": {"telegram": {"text": resp_tele}}
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};
