import * as JWT from "jsonwebtoken";
import { Observable } from 'rxjs';
import { Injectable, CanActivate, ExecutionContext, Logger, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        
        const authorizationHeader = request.headers.authorization;

        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer '))
            return false;
        
        const token = authorizationHeader.split(' ')[1]; 
        const result = validateToken(token);
        
        if(!result)
            throw new UnauthorizedException();

        const decoded = JWT.decode(token, process.env.TOS_JWT_SECRET);
        request.token = token;
        request.masterId = decoded.data.masterId;

        return result;
    }
}

@Injectable()
export class ParseAuthorizationGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();        
        const authorizationHeader = request.headers.authorization;      
        
        if(authorizationHeader){
            const token = authorizationHeader.split(' ')[1]; 
            const decoded = JWT.decode(token, process.env.TOS_JWT_SECRET);
            request.token = token;
            request.masterId = decoded.data.masterId;
        }
        else{
            request.token = null;
            request.masterId = null;
        }
        
        return true;
    }
}

function validateToken(token: string): boolean {
    try{
        JWT.verify(token, process.env.TOS_JWT_SECRET);
        return true;
    }
    catch(e){
        Logger.error(e.message);
        return false;
    }
}