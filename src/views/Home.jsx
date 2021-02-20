import React, { useEffect, useState } from 'react';

import { getPedals, getPedalboards } from '../utils/api';
import AppHeader from '../components/AppHeader';
import Canvas from '../components/Canvas';
import Drawer from '../components/Drawer';
import Toolbar from '../components/Toolbar';

const Home = () => {
  const [showPedals, setShowPedals] = useState(false);
  const [showPedalboards, setShowPedalboards] = useState(false);
  const [pedals, setPedals] = useState([]);
  const [pedalboards, setPedalboards] = useState([]);

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
        pedalboards={pedalboards}
        showPedals={showPedals}
        showPedalboards={showPedalboards}
      />
      <Canvas />
    </main>
  );
};

export default Home;
