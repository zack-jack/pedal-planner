import React, { useEffect, useState } from 'react';

import { getPedals, getPedalboards } from '../utils/api';
import AppHeader from '../components/AppHeader';
import Canvas from '../components/Canvas';
import Drawer from '../components/Drawer';
import Toolbar from '../components/Toolbar';

const Home = () => {
  const [pedals, setPedals] = useState([]);
  const [pedalSelections, setPedalSelections] = useState([]);
  const [showPedals, setShowPedals] = useState(false);

  const [pedalboards, setPedalboards] = useState([]);
  const [pedalboardSelections, setPedalboardSelections] = useState([]);
  const [showPedalboards, setShowPedalboards] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const pedalsRes = await getPedals();
      const pedalboardsRes = await getPedalboards();

      setPedals(pedalsRes.pedals);
      setPedalboards(pedalboardsRes.pedalboards);
    };

    fetchData();
  }, []);

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

  const selectPedal = (selectionId) => {
    const pedal = pedals.find(({ id }) => id === selectionId);
    setPedalSelections([...pedalSelections, pedal]);
  };

  const selectPedalboard = (selectionId) => {
    const pedalboard = pedalboards.find(({ id }) => id === selectionId);
    setPedalboardSelections([...pedalboardSelections, pedalboard]);
  };

  return (
    <main>
      <AppHeader />
      <Toolbar
        showPedals={showPedals}
        showPedalboards={showPedalboards}
        toggleDrawer={toggleDrawer}
      />
      <Drawer
        closeDrawer={closeDrawer}
        pedals={pedals}
        selectPedal={selectPedal}
        showPedals={showPedals}
        pedalboards={pedalboards}
        selectPedalboard={selectPedalboard}
        showPedalboards={showPedalboards}
      />
      <Canvas
        pedalSelections={pedalSelections}
        pedalboardSelections={pedalboardSelections}
      />
    </main>
  );
};

export default Home;
