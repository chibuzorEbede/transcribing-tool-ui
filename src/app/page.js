"use client";
import { isMobile } from "@/utils";

export default function Home() {
  //determine if user is on mobile or desktop
  if (isMobile()) {
    console.log("in mobile mode");
  } else {
    return <div>Please access via mobile phone</div>;
  }
  return (
    <div>
      <p>howdy</p>
    </div>
  );
}
