import React from 'react';
import { getClassList } from '../../api/firebase';
import { useAuthContext } from '../../context/AuthContext';
import AddClassToast from './AddClassToast';
import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard';

export default function Main() {
  const { user } = useAuthContext();
  const { data: classes } = useQuery(
    ['myClasses', user.uid],
    () => getClassList(user.uid),
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  return (
    <>
      {classes && (
        <ul>
          {classes.myClasses.map((myClass) => (
            <ClassCard key={myClass} code={myClass} />
          ))}
        </ul>
      )}
      <AddClassToast />
    </>
  );
}
