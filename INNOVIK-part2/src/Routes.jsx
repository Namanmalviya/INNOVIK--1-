import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PatientRegistration from './pages/patient-registration';
import AppointmentBooking from './pages/appointment-booking';
import PatientDashboard from './pages/patient-dashboard';
import MedicineAvailability from './pages/medicine-availability';
import DigitalHealthRecords from './pages/digital-health-records';
import VideoConsultation from './pages/video-consultation';
import Symptomchecker from './pages//patient-dashboard/components/Symptomchecker';


const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<PatientRegistration />} />
        <Route path="/patient-registration" element={<PatientRegistration />} />
        <Route path="/appointment-booking" element={<AppointmentBooking />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/medicine-availability" element={<MedicineAvailability />} />
        <Route path="/digital-health-records" element={<DigitalHealthRecords />} />
        <Route path="/video-consultation" element={<VideoConsultation />} />
         <Route path="/symptomchecker" element={<Symptomchecker />} /> 
       
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
