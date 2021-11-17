import React from 'react';
import { useToast as useNBToast } from 'native-base';
import { useSelector } from 'react-redux';
import { AlertModel } from '../domain/interfaces/alert';
import { State } from '../store';
import { AlertState } from '../store/interface';

type ReturnType = {
  showToast: () => void;
  alerts: AlertModel[];
};

export default function useToast(): ReturnType {
  const alerts = useSelector<State, AlertState>((state) => state.alert);
  const toast = useNBToast();
  const showToast = () => {
    alerts &&
      alerts.map((alert: AlertModel) => {
        return toast.show({
          id: alert._id,
          title: alert.message,
          duration: 4000,
          placement: 'top',
          status: alert.type,
          isClosable: false,
          variant: 'solid'
        });
      });
  };
  return { showToast, alerts };
}
