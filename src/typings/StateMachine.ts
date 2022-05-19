import { ChoiceState } from './ChoiceState';
import { FailState } from './FailState';
import { MapState } from './MapState';
import { PassState } from './PassState';
import { SucceedState } from './SucceedState';
import { TaskState } from './TaskState';
import { WaitState } from './WaitState';

type AllStates = TaskState | MapState | PassState | WaitState | ChoiceState | SucceedState | FailState;

export interface StateMachine {
  States: Record<string, AllStates>;
  StartAt: string;
  Comment?: string;
  Version?: string;
  TimeoutSeconds?: number;
}
