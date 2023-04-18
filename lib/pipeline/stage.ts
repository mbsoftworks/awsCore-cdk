import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { EnvironmentAbbreviation } from '../constants';

/**
 * Properties for the AwsCoreStage.
 */
export interface AwsCoreStageProps extends StageProps {
  /**
   * The environment abbreviation for the environment where the stage is deployed.
   */
  environmentName: EnvironmentAbbreviation;
}

/**
 * An abstract application modeling unit consisting of Stacks that should be
 * deployed together.
 *
 * Sets the environment abbreviation context for all stacks and resources
 * in the stage.
 */
export class AwsCoreStage extends Stage {
  constructor(scope: Construct, id: string, props: AwsCoreStageProps) {
    super(scope, id, props);
    this.node.setContext('environmentAbbreviation', props.environmentName);
  }
}
