import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div id="features" className="z-10 flex py-[45px] md:py-[15px] px-2 flex-col items-center relative md:px-8 overflow-hidden h-auto min-h-screen justify-center w-full max-w-7xl">
        <div
        className="mt-[80px] justify-between">
            <h1 className="w-full flex uppercase items-center text-[32px] font-bold justify-center mb-[40px]">Features</h1>
            <div>
              <FeatureCard label="QR-BASED CONTACT TRACING" description="The system uses Quick-Response technology for an economic fast and efficient recording and retrieving data."/>
              <FeatureCard label="EMERGENCY AND COMMUNICABLE DISEASE REPORTING" description="Using the app, users can report emergencies as well as communicable diseases such as Covid19, MonkeyPox, Tubercolusis and other communicable diseases." reverse/>
              <FeatureCard label="DYNAMIC CONTACT-TRACING REPORT GENERATION" description="Administrator can dynamically generate reports of 1st degree, 2nd degree and 3rd degree contacts with respect to the number of days of contact set by the administrator."/>
            </div>
        </div>
    </div>
  )
}
