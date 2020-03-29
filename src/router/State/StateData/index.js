import React from 'react';
import {
  useCurrentStateTotalCases,
  useCurrentStateNewCases,
  useCurrentStateActiveCases,
  useCurrentStateCriticalCases,
} from 'hooks/useCurrentStateData';
import Input from 'components/Input';
import Button from 'components/Button';
import useInputState from 'hooks/useInputState';

function StateDataPage() {
  const totalCases = useCurrentStateTotalCases();
  const newCases = useCurrentStateNewCases();
  const activeCases = useCurrentStateActiveCases();
  const [criticalCases, setCriticalCases] = useCurrentStateCriticalCases();
  const [updatedCritical, handleUpdatedCriticalChange] = useInputState(criticalCases);
  return (
    <div>
      <h3>
        Total:
        {totalCases}
      </h3>
      <h3>
        New Cases:
        {newCases}
      </h3>
      <h3>
        Active Cases:
        {activeCases}
      </h3>
      <h3>
        Critical Cases:
        {criticalCases}
      </h3>
      <div>
        <Input
          labelText="Set New Critical"
          type="number"
          value={updatedCritical}
          onChange={handleUpdatedCriticalChange}
        />
        <Button onClick={() => {
          setCriticalCases(updatedCritical);
        }}
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default StateDataPage;
