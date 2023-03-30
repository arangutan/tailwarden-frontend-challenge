import React from 'react';
import { Card } from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const primary = () => {
  return (
    <div style={{ maxWidth: 250 }}>
      <Card type="servers" value="120" />
    </div>
  );
};

export const alarm = () => {
  return (
    <div style={{ maxWidth: 250 }}>
      <Card type="alarms" value="30" />
    </div>
  );
};

export const bill = () => {
  return (
    <div style={{ maxWidth: 250 }}>
      <Card type="bill" value=" $ 30" />
    </div>
  );
};
export const regions = () => {
  return (
    <div style={{ maxWidth: 250 }}>
      <Card type="regions" value="21" />
    </div>
  );
};
export const servers = () => {
  return (
    <div style={{ maxWidth: 250 }}>
      <Card type="servers" value="120" />
    </div>
  );
};
