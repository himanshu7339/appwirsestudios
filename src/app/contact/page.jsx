import React from "react";
export const metadata = {
  title: 'Enquiry',
}
const contact = () => {
  return (
    <div className="contact flex justify-center p-3  overflow-y-auto">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf31x97T8W-W7dUOlNaMXh7RnnLHOXD_3voAibl1z9iYM2w0w/viewform?embedded=true"
        width="640"
        height="1297"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default contact;
