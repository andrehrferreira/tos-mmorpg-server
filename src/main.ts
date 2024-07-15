import * as bodyParser from "body-parser";
import * as dotenv from 'dotenv';

import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule, OnLoadModules } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { WsAdapter, AllExceptionsFilter } from "@utils";
import { Logger } from "@nestjs/common";

process.env.UV_THREADPOOL_SIZE = "12";
process.on("uncaughtException", () => {});
process.on('warning', (warning) => {});

const cors = {
	origin: [
		"http://localhost:3002",
		"http://localhost:3001",
		"http://localhost:3022",
		"http://localhost:5173",
		"https://dash.tos.world",
		"https://account.tos.world",
		"https://marketplace.tos.world",
		"https://marketplace.uzminetwork.com/",
		"https://marketplace.uzmi.network/",
		"https://guilds.tos.world",
		"https://*.uzminetwork.com",
		"https://uzmi.network",
		"https://*.uzmi.network",
		"https://uzmigames.com.br",
		"https://*.uzmigames.com.com.br",
		"https://uzmi.games",
		"https://*.uzmi.games",
		"http://*.tos.world",
		"http://*.tos.world/*",
		"http://*.uzmi.games/*",
		"http://*.uzmi.network/*",
		"*",
	],
	methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
	preflightContinue: false,
	optionsSuccessStatus: 204,
	credentials: true,
	allowedHeaders: [
		"Accept",
		"Content-Type",
		"Authorization",
		"Content-Range",
		"X-Applicant",
		"User-Agent",
		"Agent"
	]
};

async function bootstrap() {
	dotenv.config();

	const port = parseInt(process.env.SERVER_PORT) || 3000;
	const app = await NestFactory.create(AppModule, { 
		cors: true,
		logger: ['error', 'debug', 'verbose'],		
	});

	const httpAdapterHost = app.get(HttpAdapterHost);
	app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));
	app.useWebSocketAdapter(new WsAdapter(app));
	app.enableCors(cors);
	app.use(bodyParser.json({ limit: "50mb" }));
  	app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
	app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

	OnLoadModules.subscribe(async () => {
		Logger.verbose(`Start Game Server in ${port}`, "GameServer");
		await app.listen(port);
	});
}
bootstrap();
