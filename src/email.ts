import * as path from "path";
import * as dotenv from 'dotenv';
import * as nodemailer from "nodemailer";
import * as fs from 'fs';

import * as AWS from 'aws-sdk';

dotenv.config();

AWS.config.update({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const transporter = nodemailer.createTransport({
    SES: new AWS.SES(),
    sendingRate: 1,
});

const emailTemplatePath = path.resolve("./src/templates/emailUzmiAcademy.html");
const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');

async function main() {
    try {
        const info = await transporter.sendMail({
            from: `"Uzmi Games" <${process.env.EMAIL_FROM}`,
            to: "guilherme@uzmigames.com.br, andrehrf@gmail.com, xedowww@gmail.com, amortuss@gmail.com",
            subject: "🚀 Desperte o Desenvolvedor de Games em Você com a Uzmi Academy!",
            html: emailTemplate,
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email: %s", error);
    }
}

main().catch(console.error);
