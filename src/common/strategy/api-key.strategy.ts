import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/service/auth.service';
@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
constructor(private authService: AuthService) {
super({ header: 'apiKey', prefix: '' }, true, (apikey, done, req) => {
const checkKey = authService.validateApiKey(apikey);
if (!checkKey) {
return done(false);
}
return done(true);
});
}
}