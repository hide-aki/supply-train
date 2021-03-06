import CurrentStateContext from 'contexts/CurrentState';
import { useContext } from 'react';

export default function useCurrentState() {
  const { currentState, stateKey } = useContext(CurrentStateContext);
  return [currentState, stateKey];
}
