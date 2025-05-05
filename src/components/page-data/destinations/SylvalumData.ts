import {
  getDestinationData,
  type LandmarkList,
} from "@/app/lib/DestinationData";
import CauldrosThreshold from "@/components/images/destinations/sylvalum/Threshold.jpg";
import CleansingSpring from "@/components/images/destinations/sylvalum/CleansingSpring.jpg";
import DelusiansNorthSummit from "@/components/images/destinations/sylvalum/Delusians_North_Summit.jpg";
import GehennaSpan from "@/components/images/destinations/sylvalum/GehennaSpan.jpg";
import HilalMeadow from "@/components/images/destinations/sylvalum/HilalMeadow.jpg";
import LakeCiel from "@/components/images/destinations/sylvalum/LakeCiel.jpg";
import NoctilucentSphere from "@/components/images/destinations/sylvalum/Noctilucent_sphere.jpg";
import SandsprintSlope from "@/components/images/destinations/sylvalum/Sandsprint_Slope.jpg";
import SeabirdsBeak from "@/components/images/destinations/sylvalum/SeabirdsBeak.jpg";
import SouthHardheartCanyon from "@/components/images/destinations/sylvalum/South_Hardheart_Canyon.jpg";
import SouthernSearoad from "@/components/images/destinations/sylvalum/SouthernSearoad.jpg";
import WestCinderdunes from "@/components/images/destinations/sylvalum/WestCinderdunes.jpg";

export const sylvalumLandmarks: LandmarkList = [
  {
    title: "Cauldros Threshold",
    img: CauldrosThreshold,
  },
  {
    title: "Cleansing Spring",
    img: CleansingSpring,
  },
  {
    title: "Delusians North Summit",
    img: DelusiansNorthSummit,
  },
  {
    title: "Gehenna Span",
    img: GehennaSpan,
  },
  {
    title: "Hilal Meadow",
    img: HilalMeadow,
  },
  {
    title: "Lake Ciel",
    img: LakeCiel,
  },
  {
    title: "Noctilucent Sphere",
    img: NoctilucentSphere,
  },
  {
    title: "Sandsprint Slope",
    img: SandsprintSlope,
  },
  {
    title: "Seabird's Beak",
    img: SeabirdsBeak,
  },
  {
    title: "South Hardheart Canyon",
    img: SouthHardheartCanyon,
  },
  {
    title: "Southern Searoad",
    img: SouthernSearoad,
  },
  {
    title: "West Cinderdunes",
    img: WestCinderdunes,
  },
];

const SylvalumData = getDestinationData(sylvalumLandmarks);
export default SylvalumData;
