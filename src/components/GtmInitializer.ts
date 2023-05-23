
import { useEffect } from 'react';

import GTM_ID from 'react-gtm-module';



const GtmInitializer = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: GTM_ID,
    };

    window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push(dataLayerConfig);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${tagManagerArgs.gtmId}`;
    document.body.appendChild(script);

    return () => {
      // Remove o script do Google Tag Manager ao desmontar o componente
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default GtmInitializer;