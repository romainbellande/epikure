import { environment } from '../../../environments/environment';

export class EnvService {
  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiUrl = environment.apiUrl;

  // Whether to enable debug mode
  public enableDebug = true;
}
