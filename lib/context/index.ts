import {
  Stack,
} from "aws-cdk-lib";
import { IConstruct } from 'constructs';

import { EnvironmentAbbreviation } from '../constants';

/**
 * Get the environment abbreviation from the context.
 *
 * @param construct The construct to get the environment abbreviation from.
 * @returns The environment abbreviation.
 * @throws Error if the environment abbreviation is not defined in the context.
 */
export function getEnvironmentAbbreviation(construct: IConstruct): EnvironmentAbbreviation {
  const stack = Stack.of(construct);
  const environmentAbbreviation: EnvironmentAbbreviation = stack.node.tryGetContext('environmentAbbreviation')!;
  if (environmentAbbreviation === undefined) {
    throw new Error('Environment abbreviation must be defined in the context');
  }
  return environmentAbbreviation;
}

/**
 * Get the project name from the context.
 *
 * @param construct The construct to get the project name from.
 * @returns The project name.
 * @throws Error if the project name is not defined in the context.
 */
export function getProjectName(construct: IConstruct): string {
  const stack = Stack.of(construct);
  const projectName: string = stack.node.tryGetContext('projectName');
  if (projectName === undefined) {
    throw new Error('Project name must be defined in the context');
  }
  return projectName;
}

/**
 * Create a resource name, according to our naming convention.
 *
 * A resource name has three parts
 * * the name of the current project
 * * the abbreviation of the environment where the resource will be deployed
 * * the arbitrary name for the resource
 *
 * @param construct The construct to get the resource name from.
 * @param name The arbitrary part of the resource name.
 * @returns A resource name that contains the name of the project, an abbreviation
 * of the environment where the resource is deployed along with an arbitrary name
 * that is suitable for the resource.
 * @see {@link getProjectName}
 * @see {@link getEnvironmentAbbreviation}
 */
export function createResourceName(construct: IConstruct, name: string): string {
  const projectName = getProjectName(construct);
  const environmentAbbreviation = getEnvironmentAbbreviation(construct);
  return formatResourceName(name, projectName, environmentAbbreviation);
}

/**
 * Format a resource name, according to our naming convention.
 *
 * This should normally not be called directly, but rather through {@link createResourceName}.
 * This is exposed for cases where there is no construct to get the project name or environment
 * abbreviation from.
 *
 * @param name The arbitrary part of the resource name.
 * @param projectName The name of the project.
 * @param environmentAbbreviation The abbreviation of the environment where the resource will be deployed.
 * @returns A resource name formatted according to our naming convention.
 */
export function formatResourceName(name: string, projectName: string, environmentAbbreviation: EnvironmentAbbreviation): string {
  return `${projectName}-${name}-${environmentAbbreviation}`;
}
