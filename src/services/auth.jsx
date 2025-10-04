import { axiosPublic } from '@/services/api';

export async function getAccessToken(email, password) {
  try {
    const response = await axiosPublic.post('/auth/token', 
      { username: email, password },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    handleAuthError(error);
  }
}

export async function registerUser(userData) {
  try {
    const { email, password, firstName, lastName, title, firmName } = userData;
    const response = await axiosPublic.post('/users/register', 
      {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        phone_number: "6470000630"
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.detail) {
      const errorDetails = error.response.data.detail;
      if (Array.isArray(errorDetails)) {
        const errorMessages = errorDetails.map(err => `${err.loc[1]}: ${err.msg}`);
        throw new Error(errorMessages.join(', '));
      }
    }
    handleAuthError(error);
  }
}

export async function requestPasswordReset(email) {
  try {
    const response = await axiosPublic.post('/auth/forgot-password',
      { email },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    handleAuthError(error);
  }
}

export async function resetPassword(token, newPassword) {
  try {
    const response = await axiosPublic.post('/auth/reset-password',
      { 
        token,
        new_password: newPassword
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    handleAuthError(error);
  }
}

function handleAuthError(error) {
  if (error.response) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.detail || 'Unauthorized');
    } else {
      throw new Error(error.response.data.detail || 'An error occurred during authentication');
    }
  } else if (error.request) {
    throw new Error('No response from server. Please try again later.');
  } else {
    throw new Error('An error occurred during authentication');
  }
}

// Add other auth-related API calls here
