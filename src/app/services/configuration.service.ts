import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  private baseUri: string;

  constructor() {
    this.baseUri = 'http://localhost:53544/api';
  }

  getBaseUri() {
    return this.baseUri;
  }
}
