import React, { useEffect } from 'react';

const LinkedInProfilePost = () => {
  useEffect(() => {
    // Check if the script already exists
    if (!document.querySelector("script[src='https://widgets.sociablekit.com/linkedin-profile-posts/widget.js']")) {
      const script = document.createElement('script');
      script.src = 'https://widgets.sociablekit.com/linkedin-profile-posts/widget.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // No cleanup needed since we don't want to remove the script when the component unmounts
  }, []);

  return (
    <div>
      {/* LinkedIn Profile Post Embed */}
      <div className='sk-ww-linkedin-profile-post bg-black-200 p-10 xs:w-[320px] w-full' data-embed-id='25475141' />
    </div>
  );
};

export default LinkedInProfilePost;
