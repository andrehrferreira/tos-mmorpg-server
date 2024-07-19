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
const emailListPath = path.resolve("./secure/emails.txt");
const emailIndexPath = path.resolve("./secure/emailIndex.txt");
const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');
const emailList = fs.readFileSync(emailListPath, 'utf-8').split('\r\n').map(email => email.trim()).filter(email => email);

async function sendEmail(to: string) {
    try {
        const info = await transporter.sendMail({
            from: `"Uzmi Games" <${process.env.EMAIL_FROM}`,
            to: to,
            subject: "🚀 Desperte o Desenvolvedor de Games em Você com a Uzmi Academy!",
            html: emailTemplate,
        });
        console.log("Message sent to %s: %s", to, info.messageId);
    } catch (error) {
        console.error("Error sending email to %s: %s", to, error);
    }
}

function loadIndex(): number {
    if (fs.existsSync(emailIndexPath)) {
        const indexStr = fs.readFileSync(emailIndexPath, 'utf-8').trim();
        return parseInt(indexStr, 10) || 0;
    }
    return 0;
}

function saveIndex(index: number) {
    fs.writeFileSync(emailIndexPath, index.toString(), 'utf-8');
}

async function main() {
    let index = loadIndex();

    const interval = setInterval(async () => {
        if (index >= emailList.length) {
            clearInterval(interval);
            console.log("All emails sent!");
            fs.unlinkSync(emailIndexPath); 
            return;
        }

        const email = emailList[index];
        await sendEmail(email.trim());
        index++;
        saveIndex(index);
    }, 1000); // 1 email per second
}

main().catch(console.error);
