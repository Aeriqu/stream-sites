import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretAccessService {

  currentToken: string = '';

  // simply base64 because I don't want to build out something serious
    // likely the people that will see this access prompt won't look at source nor care
  acceptableTokens: string[] = [
    'c29tZSBhY2Nlc3MgdG9rZW4=', // some access token
    'cG9zdCByZWxlYXNlIGFjY2VzcyB0b2tlbg==' // post release access token
  ]

  accessMatrix: Record<string, Array<string>> = {
    [this.acceptableTokens[0]]: [
      'some access item'
    ],
    [this.acceptableTokens[this.acceptableTokens.length - 1]]: []
  }

  constructor() { }

  checkToken(token: string): boolean {

    if(this.acceptableTokens.indexOf(token) > -1) {
      this.currentToken = token;
      return true;
    }

    return false;
  }

  checkAccess(item: string): boolean {
    return this.currentToken == this.acceptableTokens[this.acceptableTokens.length - 1] || 
      this.accessMatrix[this.currentToken].includes(item);
  }
}
