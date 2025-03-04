import React from 'react';
import cn from 'classnames';
import s from './status.module.scss';

// Для чистоты кода я бы вынес это в отдельные файлы, на так как это тестовое, да и компонент не большой, оставлю тут
// status.interface
interface Status {
  name: string;
  color: 'green' | 'red' | 'orange';
}

// status-types.type
type StatusTypes = 'Scheduled' | 'Ongoing' | 'Finished';

// statuses.data
const statuses: Record<StatusTypes, Status> = {
  Scheduled: { name: 'Match preparing', color: 'orange' },
  Ongoing: { name: 'Live', color: 'green' },
  Finished: { name: 'Finished', color: 'red' }
};

interface Props {
  status: StatusTypes;
}

export const Status: React.FC<Props> = ({ status }) => {
  const currentStatus: Status = statuses[status];

  return (
    <div className={ cn(s.status, s[currentStatus.color]) }>
      { currentStatus.name }
    </div>
  );
};