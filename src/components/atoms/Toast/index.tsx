import React from 'react';
import { Toast as RNUILIBToast } from 'react-native-ui-lib';
import { useSelector } from 'react-redux';
import { AlertModel } from '../../../domain/interfaces/alert';
import { State } from '../../../store';
import { AlertState } from '../../../store/interface';
import theme from '../../../styles/constants/theme';

const AlertBackgroundColour = {
  success: theme.color.success,
  error: theme.color.error,
  warning: theme.color.warning,
  info: theme.color.info
};

const Toast = () => {
  const alerts = useSelector<State, AlertState>((state) => state.alert);
  return (
    <React.Fragment>
      {alerts &&
        alerts.map((alert: AlertModel) => (
          <RNUILIBToast
            key={alert._id}
            visible={true}
            position={'top'}
            backgroundColor={AlertBackgroundColour[alert.type]}
            message={alert.message}
          />
        ))}
    </React.Fragment>
  );
};

export default Toast;
