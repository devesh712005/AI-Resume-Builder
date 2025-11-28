import React from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";
function ResumePreview({ data, template, accentColor, classes = "" }) {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };
  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={
          "border border-gray-200 print:shadow-none print:border-none" + classes
        }
      >
        {renderTemplate()}
      </div>
      <style jsx>
        {`
          @page {
            size: letter;
            margin: 0;
          }
<<<<<<< HEAD

          @media print {
            body * {
              visibility: hidden;
            }

            #resume-preview,
            #resume-preview * {
              visibility: visible;
            }

=======
          @media print {
            html,
            body {
              width: 8.5in;
              height: 11in;
              overflow: hidden;
            }
            body * {
              visibility: hidden;
            }
>>>>>>> b43400eeab3a617561a46002ee29a7207d7ef77f
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
<<<<<<< HEAD
              margin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
              background: white;
=======
              height: auto;
              mrgin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
>>>>>>> b43400eeab3a617561a46002ee29a7207d7ef77f
            }
          }
        `}
      </style>
    </div>
  );
}

export default ResumePreview;
