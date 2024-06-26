import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry: ReportHandler = () => {}) => {
  import('web-vitals')
    .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    })
    .catch(err => console.error('Error loading web-vitals: ', err));
};

export default reportWebVitals;
