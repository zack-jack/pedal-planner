import React, { useCallback, useEffect, useState } from 'react';

import AppHeader from '../components/AppHeader';
import Canvas from '../components/Canvas';
import Drawer from '../components/Drawer';

import mockPedals from '../data/pedals.json';
import mockPedalboards from '../data/pedalboards.json';

const Home = () => {
  const [showPedals, setShowPedals] = useState(false);
  const [showPedalboards, setShowPedalboards] = useState(false);
  const [pedals, setPedals] = useState([]);
  const [pedalboards, setPedalboards] = useState([]);

  const getPedals = useCallback(() => {
    setPedals(mockPedals);
  }, []);

  const getPedalboards = useCallback(() => {
    setPedalboards(mockPedalboards);
  }, []);

  useEffect(() => {
    getPedals();
    getPedalboards();
  }, [getPedals, getPedalboards, pedals, pedalboards]);

  const toggleDrawer = (btnId) => {
    if (btnId.indexOf('add-pedal') > -1) {
      setShowPedals(!showPedals);
      setShowPedalboards(false);
    }

    if (btnId.indexOf('pedalboard') > -1) {
      setShowPedalboards(!showPedalboards);
      setShowPedals(false);
    }
  };

  const closeDrawer = () => {
    setShowPedals(false);
    setShowPedalboards(false);
  };

  return (
    <main>
      <AppHeader
        showPedals={showPedals}
        showPedalboards={showPedalboards}
        toggleDrawer={toggleDrawer}
      />
      <Drawer
        closeDrawer={closeDrawer}
        pedals={pedals}
        pedalboards={pedalboards}
        showPedals={showPedals}
        showPedalboards={showPedalboards}
      />
      <Canvas />
    </main>
  );
};

export default Home;
