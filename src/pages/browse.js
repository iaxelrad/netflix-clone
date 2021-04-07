import React from 'react';
import BrowseContainer from '../components/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ films, series });

  return <BrowseContainer slides={slides} />;
}
