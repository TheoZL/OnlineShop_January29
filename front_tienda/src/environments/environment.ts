// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //aqui se declara una url para los servicios, esta apunta siempre al api
  URL_SERVICES: 'http://127.0.0.1:8000/api',
  ///Declaracion del url del backend
  URL_BACKEND: 'http://127.0.0.1:8000',
  URL_FRONTEND: 'http://127.0.0.1:4200',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
