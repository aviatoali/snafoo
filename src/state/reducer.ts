import { combineReducers } from 'redux';
import { RootState } from "./types";
import snacksReducer from '../features/Snacks/reducer';
// import securityReducer from '../features/Security/securityReducer';
// import menuReducer from '../features/Menu/reducer';
// import inquiryReducer from '../features/Inquiry/reducer';
// import appointmentReducer from '../features/Appointment/reducer';
// import imageReviewReducer from '../features/ImageReview/reducer';
// import patientsReducer from '../features/Patients/reducer';

const rootReducer = combineReducers<RootState>({
    // security: securityReducer,
    // menu: menuReducer,
    // inquiry: inquiryReducer,
    // appointment: appointmentReducer,
    // imageReview: imageReviewReducer,
    // patient: patientsReducer
    snacks: snacksReducer
});

export default rootReducer;