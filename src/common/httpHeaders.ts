// import { LOCAL_STORAGE_KEY } from 'src/features/Security/Login/constants';

export const basicHeaders = {
    'Content-Type': 'application/json',
};

// TODO: Clean

// export const SecureHeaders = () => ({
//     'token': localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN),
// });

// TODO: Find a way to unhardcode this?
export const secureHeaders = 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827' ;

// export const SecureHeadersWithToken = (token: string) => ({
//     'token': token,
// });
