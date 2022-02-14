import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import { useAnimation } from 'framer-motion';
import AnimationDelta from './animation-delta';
import Background from './components/background';
import Table from './components/table';
import Prop from './components/prop';

function fetchCallback(
  data: any,
  setData: Dispatch<SetStateAction<any>>,
  animationDelta: AnimationDelta
) {
  // use url params to load the scenes and related settings
  const params = new URLSearchParams(window.location.search);
  const scene = params.get('scene');
  const scope = params.get('scope');

  if(scene === null || scope === null) {
    return (
      <p>A scene, scope, or both were not provided.</p>
    )
  }
  setData(data[scene]);
}

function App() {
  // Set up states
  const [data, setData] = useState(Object);
  const dayControls = useAnimation();
  const nightControls = useAnimation();

  // Set up animation controller
  const animationDelta = new AnimationDelta(dayControls, nightControls);

  useEffect(() => {
    // Animation controller setup
    animationDelta.updateDelta();
  })

  // Fetch the json containing data and load things in
  useEffect(() => {
    fetch('./assets/data/scenes.json')
      .then((res) => res.json())
      .then((data) => {
        fetchCallback(data, setData, animationDelta);
      })
  }, []);

  // Parameter validity check
  const params = new URLSearchParams(window.location.search);
  const scene = params.get('scene');
  const scope = params.get('scope');

  if(scene === null || scope === null) {
    return (
      <p>A scene, scope, or both were not provided.</p>
    )
  }

  // If config data has not been received yet
  if(Object.keys(data).length === 0) {
    return (
      <p>Fetching config data...</p>
    )
  }

  // Background rendering
  if(scope === 'background') {
    return (
      <Background day={data.background.day} night={data.background.night} dayControl={dayControls} nightControl={nightControls}></Background>
      )
  }
  // Table + Prop rendering
  else if(scope === 'table') {
    const propItems = Object.keys(data.items).map((key: string) => 
      <Prop key={key} day={data.items[key].day} night={data.items[key].night} scale={data.items[key].scale} dayControl={dayControls} nightControl={nightControls}></Prop>
    );
    return (
      <div>
        {/* <Background day={data.background.day} night={data.background.night} dayControl={dayControls} nightControl={nightControls}></Background> */}
        <Table day={data.table.day} night={data.table.night} offset={data.table.offset} dayControl={dayControls} nightControl={nightControls}></Table>
        {propItems}
      </div>
    )
  }

  return (
    <p>Unable to load anything from provided parameters.</p>
  );
}

export default App;
