import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUserAction } from '../store/actions/account';

type ReturnType = {
  isAuthCheckComplete: boolean;
};

export default function useAuthGuard(): ReturnType {
  const dispatch = useDispatch();
  const [isAuthCheckComplete, setIsAuthCheckComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      console.log('[useAuthGuard] - Authentication started');
      try {
        dispatch(setCurrentUserAction());
      } catch (e) {
        console.error(`[useAuthGuard] - error when authenticating user: ${e}`);
      } finally {
        setIsAuthCheckComplete(true);
        console.log('[useAuthGuard] - Authentication completed');
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isAuthCheckComplete };
}
