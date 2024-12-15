import { useAppSelector } from '../store/store.ts';
import { authSelectors } from '../store/selectors.ts';

const useAuth = () => {
    const action = useAppSelector(authSelectors.selectAuthAction);
    const status = useAppSelector(authSelectors.selectAuthStatus);
    const message = useAppSelector(authSelectors.selectAuthMessage);
    const user = useAppSelector(authSelectors.selectAuthUser);

    const isSession = !!user;

    return {
        action,
        status,
        message,
        user,
        isSession,
    };
};

export { useAuth };
