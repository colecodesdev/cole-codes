import React from 'react';

    function MyMapComponent() {
      const apiKey = process.env.GOOGLE_MAPS_API_KEY; 
        return (
          <div>
            {apiKey ? (
              <p>API Key: {apiKey}</p>
            ) : (
              <p>API key not found</p>
            )}
          </div>
      );
    }

    export default MyMapComponent;