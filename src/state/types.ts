import { SnacksState } from '../features/Snacks/reducer';

// import { SecurityState } from '../features/Security/securityReducer';
// import { MenuState } from '../features/Menu/reducer';
// import { InquiryState } from '../features/Inquiry/reducer';
// import { AppointmentState } from '../features/Appointment/reducer';
// import { ImageReviewState } from 'src/features/ImageReview/reducer';
// import { PatientInfoState } from 'src/features/Patients/reducer';

export interface RootState {
    // menu: MenuState;
    // security: SecurityState;
    // inquiry: InquiryState;
    // appointment: AppointmentState;
    // imageReview: ImageReviewState;
    // patient: PatientInfoState;
    snacks: SnacksState;
};
