var body = $response.body;
body = '\/*\n@supported 84615B7615A8\n*\/\n' + body;

$done(body);
