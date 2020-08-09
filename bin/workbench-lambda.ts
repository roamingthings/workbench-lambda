#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { WorkbenchLambdaStack } from '../lib/workbench-lambda-stack';

const app = new cdk.App();
new WorkbenchLambdaStack(app, 'WorkbenchLambdaStack');
