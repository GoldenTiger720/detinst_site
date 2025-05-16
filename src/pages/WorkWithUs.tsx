import React from "react";
import TeamSection from "@/components/work/TeamSection";
import RecruitmentSection from "@/components/work/RecruitmentSection";
import CoreValuesSection from "@/components/work/CoreValuesSection";
import WhatWeOfferSection from "@/components/work/WhatWeOfferSection";
import WorkTestimonialsSection from "@/components/work/WorkTestimonialsSection";

const WorkWithUs = () => {
  return (
    <div className="min-h-screen ">
      <TeamSection />
      <RecruitmentSection />
      <CoreValuesSection />
      <WhatWeOfferSection />
      <WorkTestimonialsSection />

      {/* More sections will be added here as we build the page */}
    </div>
  );
};

export default WorkWithUs;
