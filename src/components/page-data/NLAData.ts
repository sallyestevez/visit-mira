import {
  getDestinationData,
  type LandmarkList,
} from "@/app/lib/DestinationData";
import AdministrativeDistrict from "@/components/images/nla/ArmoryAlley.jpg";
import CommercialDistrict from "@/components/images/nla/CommercialDistrict.png";
import IndustrialDistrict from "@/components/images/nla/IndustrialDistrict.png";
import ResidentialDistrict from "@/components/images/nla/ResidentialDistrict.jpg";

export const NLALandmarks: LandmarkList = [
  { title: "Administrative District", img: AdministrativeDistrict },
  { title: "Commercial District", img: CommercialDistrict },
  { title: "Industrial District", img: IndustrialDistrict },
  { title: "Residential District", img: ResidentialDistrict },
];

const NLAData = getDestinationData(NLALandmarks);

export default NLAData;
