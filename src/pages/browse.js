import React from 'react';
import { useContent } from '../hooks';
export default function Browse() {
  // we need the series and the Films
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(series);
  console.log(films);
  //we need slides
  //pass it to the browse container

  return <div>Hello from Browse</div>;
}
