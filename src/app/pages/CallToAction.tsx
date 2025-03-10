import React from "react";
import CTAcards from "../_components/CTAcards";

function CallToAction() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <CTAcards
        heading="TOP COLLECTION"
        subHeading="Top Trends Style"
        button="Shope Now"
        img="/banner-1.png"
      />
      <CTAcards
        heading="PREMIUM - ONLINE EXCLUSIVE"
        subHeading="Here Your Style"
        button="Shope Now"
        img="/banner-2.png"
      />
    </div>
  );
}

export default CallToAction;
