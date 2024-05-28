import 'server-only';
import postgres from 'postgres';
import { postgresConfig, setEnvironmentVariables } from '../util/config.js';

setEnvironmentVariables();
declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres(postgresConfig);
  }
  return globalThis.postgresSqlClient;
}
export const sql = connectOneTimeToDatabase();
