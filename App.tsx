import { useState } from 'react';

import { Circle } from 'components/Circle';
import { CurrentSector } from 'components/CurrentSector';
import { Layout, Spacer } from 'components/shared';
import { Sector } from 'components/Circle/types';
import { TextField } from 'components/TextField';

const App: React.FC = () => {
  const [sectorsNumber, setSectorsNumber] = useState('');
  const [currentSector, setCurrentSector] = useState<Sector>();

  const onChangeSectors = (text: string) => {
    setSectorsNumber((prevText) => (prevText !== text ? text : prevText));
    setCurrentSector(undefined);
  };

  const changeCurrentSector = (sector?: Sector) => {
    if (sector) {
      setCurrentSector((prevSector) => (prevSector?.id !== sector.id ? sector : prevSector));
    }
  };

  return (
    <Layout>
      <CurrentSector sector={currentSector} />
      <Spacer size={4} />
      <TextField
        label="Number of sectors (more than 1)"
        value={sectorsNumber}
        keyboardType="number-pad"
        autoFocus
        onChangeText={onChangeSectors}
      />
      <Spacer size={8} />
      <Circle
        numberOfSectors={Number(sectorsNumber) > 0 ? Number(sectorsNumber) : undefined}
        changeCurrentSector={changeCurrentSector}
      />
    </Layout>
  );
};

export default App;
