/** Constants for the AWS account numbers. */
export enum AwsAccount {
  /** Management account. */
  MANAGEMENT_DEV = '835587456551',
  /** Management account. */
  MANAGEMENT_PROD = '318431121995',
  /** Markus developer sandbox account. */
  MARKUS_SANDBOX_DEV = '682282777957',
  /** Pipeline account. */
  PIPELINE_DEV = '022792759860',
  /** Pipeline account. */
  PIPELINE_PROD = '285467044686',
  /** Raul developer sandbox account. */
  RAUL_SANDBOX_DEV = '252429921993',
  /** Team sandbox account. */
  SANDBOX_DEV = '042728578057',
  /** Team sandbox account. */
  SANDBOX_PROD = '477286323930',
  /** Security account. */
  SECURITY_DEV = '863722166140',
  /** Security account. */
  SECURITY_PROD = '302353750276',
}

/** Constants for the AWS regions. */
export enum AwsRegion {
  /** Frankfurt. */
  FRANKFURT = 'eu-central-1',
  /** Ireland. */
  IRELAND = 'eu-west-1',
  /** North Virginia. */
  N_VIRGINIA = 'us-east-1',
}

/**
 * Constants for the environment abbreviations.
 */
export enum EnvironmentAbbreviation {
  /** Abbreviation for development accounts. */
  DEVELOPMENT = 'dev',
  /** Abbreviation for production accounts. */
  PRODUCTION = 'prd',
  /** Abbreviation for sandbox accounts. */
  SANDBOX = 'sbx',
  /** Abbreviation for staging accounts. */
  STAGING = 'stg',
}
