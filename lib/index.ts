// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsCoreCdkProps {
  // Define construct properties here
}

export class AwsCoreCdk extends Construct {

  constructor(scope: Construct, id: string, props: AwsCoreCdkProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCoreCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
