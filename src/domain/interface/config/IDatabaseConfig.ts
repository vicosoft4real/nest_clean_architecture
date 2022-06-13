export interface IDatabaseConfig {
  /**
   * @summary Get the database host
   * @returns string
   */
  getDatabaseHost(): string;
  /**
   * @summary Get the database port
   * @returns number
   */
  getDatabasePort(): number;
  /**
   * @summary Get the datase user name
   * @returns string
   */
  getDatabaseUser(): string;
  /**
   * @summary Get the database password
   * @returns string
   */
  getDatabasePassword(): string;
  /**
   * @summary Get database name
   * @returns string
   */
  getDatabaseName(): string;
  /**
   * @summary Get database schema
   * @returns string
   */
  getDatabaseSchema(): string;
  /**
   * @summary Get database sync
   * @returns boolean
   */
  getDatabaseSync(): boolean;
}
