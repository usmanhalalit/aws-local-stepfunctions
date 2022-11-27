import type { BaseState } from './BaseState';
import type {
  CanHaveInputPath,
  CanHaveOutputPath,
  CanHaveParameters,
  CanHaveResultPath,
  CanHaveResultSelector,
} from './InputOutputProcessing';
import type { IntermediateState } from './IntermediateState';
import type { TerminalState } from './TerminalState';

interface BaseTaskState
  extends BaseState,
    CanHaveInputPath,
    CanHaveParameters,
    CanHaveResultSelector,
    CanHaveResultPath,
    CanHaveOutputPath {
  Type: 'Task';
  Resource: string;
}

export type TaskState = (IntermediateState | TerminalState) & BaseTaskState;
