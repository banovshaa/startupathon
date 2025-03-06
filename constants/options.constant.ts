import OngoingImg from "@/assets/images/shared/icons/volume.png";
import GuideImg from "@/assets/images/shared/icons/guide.png";
import PastImg from "@/assets/images/shared/icons/done.png";
import MentorImg from "@/assets/images/shared/icons/hand.png";

import SalaryImg from "@/assets/images/rewards/salary.png";
import FundingImg from "@/assets/images/rewards/funding.png";
import EquityImg from "@/assets/images/rewards/equity.png";
import AwsImg from "@/assets/images/rewards/aws.png";
import ChatgptImg from "@/assets/images/rewards/chatgpt.png";
import IbmImg from "@/assets/images/rewards/ibm.png";
import ServiceImg from "@/assets/images/rewards/service.png";
import AirtableImg from "@/assets/images/rewards/airtable.png";

export const heroButtons = [
  { name: "Ongoing Startupathon", value: "ongoing", icon: OngoingImg },
  { name: "Startupathon Guide", value: "guide", icon: GuideImg },
  { name: "Past Startupathons", value: "past", icon: PastImg },
  { name: "Mentor Network", value: "mentor", icon: MentorImg },
];

export const rewards = [
  { name: "Competitive Salary", value: "Salary", icon: SalaryImg },
  {
    name: "≥ $10,000 USD in Company Funding",
    value: "Funding",
    icon: FundingImg,
  },
  { name: "≥ 10% Founder Equity", value: "Equity", icon: EquityImg },
  { name: "≥ $100,000 USD AWS Credits", value: "AWS", icon: AwsImg },
  { name: "$1,000 OpenAI Credits", value: "OpenAI", icon: ChatgptImg },
  { name: "$120,000 USD IBM Cloud Credits", value: "IBM", icon: IbmImg },
  { name: "$2,500 Twilio Credits", value: "Twilio", icon: ServiceImg },
  { name: "$2,000 Airtable Credits", value: "Airtable", icon: AirtableImg },
];
