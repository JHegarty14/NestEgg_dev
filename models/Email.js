const recoveryEmail = {};
module.exports = recoveryEmail;

recoveryEmail.server = require('emailjs/email').server.connect(
    {
        host: process.env.EMAIL_HOST || 'smtp.nestegg.com',
        email: process.env.EMAIL_USER || 'default@gmail.com',
        password: process.env.EMAIL_PASS || 'N3sTeg6',
        ssl: true
   }
);

recoveryEmail.sendPasswordResetLink = function(account, callback) 
{
    EM.server.send({
        from: process.env.EMAIL_FROM || 'Nestegg Account Services <noreply@nestegg.com>',
        to: account.email,
        subject: 'Reset Your Password',
        text: '',
        attachment: EM.composeEmail(account)
    }, callback);
}

recoveryEmail.composeEmail = function(i)
{
    const link = 'https://nestegg.com/reset-password?e='+i.email+'&p='+i.pass;
    const html = "<html><body>";
        html += "Hi "+i.name+",<br><br>";
        html += "Not <b>"+i.user+"? Please disregard this message.</b><br><br>";
        html += "<a href='"+link+"'>Click here to reset your password</a><br><br>";
        html += "Nestegg<br><br>";
        html += "</body></html>";
    return [{data: html, alternative: true}];
}