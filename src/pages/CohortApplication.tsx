
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import { LabBackground } from '../components/ChemistryElements';
import { useEffect } from 'react';

const CohortApplication = () => {
  useEffect(() => {
    // Redirect to HoneyBook form
    window.location.href = 'https://elementtheagency.hbportal.co/public/685b14d4594f9a001f716ba6';
  }, []);

  return (
    <div className="bg-chemist-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <LabBackground />
      
      <div className="pt-32 pb-20">
        <div className="container-content">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Redirecting to Application...
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              You're being redirected to the Content Chemistry Cohort application form.
            </p>
            <a 
              href="https://elementtheagency.hbportal.co/public/685b14d4594f9a001f716ba6"
              className="bg-chemist-orange text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Click here if you're not redirected automatically →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CohortApplication;
