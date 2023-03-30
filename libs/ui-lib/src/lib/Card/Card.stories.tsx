import React from 'react';
import { Card } from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const primary = () => {
  return <Card type="alarms" value="30" />;
};

export const alarm = () => {
  return <Card type="alarms" value="12" />;
};
export const bill = () => {
  return <Card type="bill" value=" $ 30" />;
};
export const regions = () => {
  return <Card type="regions" value="21" />;
};
export const servers = () => {
  return <Card type="servers" value="120" />;
};
