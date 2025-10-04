// hooks/useGoogleCalendar.js
import useAuth from '@/hooks/useAuth';
import { axiosPrivate } from '@/services/api';
import { authSelector } from '../redux/authSlice';
import { useSelector } from 'react-redux';

export const useGoogleCalendar = () => {
    // const { auth } = useAuth();
    const auth = useSelector(authSelector);

    const linkGoogleCalendar = () => {
        const baseUrl = axiosPrivate.defaults.baseURL;
        window.location.href = `${baseUrl}/integrations/calendar/google/link?user_id=${auth?.user_id}`;
    };

    return { linkGoogleCalendar };
};