import React from 'react'
import { useParams } from 'react-router-dom';
import { LocationContainer } from '../container/LocationContainer';

export default function Location() {
  const {loc} = useParams()
  return (
    <LocationContainer location={loc} />
  )
}
