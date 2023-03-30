import { StyledCard, TileHeader } from './Card.styles';
import { IconMoney, IconServer, IconWorld, IconAlarm } from '../Icons/Icons';

export interface CardProps {
  type: 'bill' | 'servers' | 'regions' | 'alarms' | string;
  value: string;
}

export function Card({ type, value }: CardProps) {
  const getIcon = () => {
    switch (type) {
      case 'bill':
        return <IconMoney />;

      case 'servers':
        return <IconServer />;

      case 'regions':
        return <IconWorld />;

      case 'alarms':
        return <IconAlarm />;
    }
  };

  return (
    <StyledCard>
      {getIcon()}
      <TileHeader>
        <p>{type}</p>
        <h3>{value}</h3>
      </TileHeader>
    </StyledCard>
  );
}
