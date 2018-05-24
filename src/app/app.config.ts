import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
export interface IAppConfig {
  appTitle: string;
  apiEndpoint: any;
}

export const AppConfig: IAppConfig = {
  appTitle: 'Taleb',
  apiEndpoint: {
    home: '/server/data/dataEN/home.json',
    portfolio: '/server/data/dataEN/portfolio.json',
    contactme: '/server/data/dataEN/contactme.json'

  }};
