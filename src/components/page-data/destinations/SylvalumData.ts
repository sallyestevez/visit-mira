import { getDestinationData, type LandmarkList } from "@/lib/DestinationData";
import BadrBasin from "@/components/images/destinations/sylvalum/BadrBasin.jpg";
import BadrStonebridge from "@/components/images/destinations/sylvalum/BadrStonebridge.jpg";
import CauldrosThreshold from "@/components/images/destinations/sylvalum/CauldrosThreshold.jpg";
import CleansingSpring from "@/components/images/destinations/sylvalum/CleansingSpring.jpg";
import DelusiansNorthSummit from "@/components/images/destinations/sylvalum/DelusiansNorthSummit.jpg";
import EastCielSandsea from "@/components/images/destinations/sylvalum/EastCielSandsea.jpg";
import GehennaSpan from "@/components/images/destinations/sylvalum/GehennaSpan.jpg";
import HardheartCanyon from "@/components/images/destinations/sylvalum/HardheartCanyon.jpg";
import HilalMeadow from "@/components/images/destinations/sylvalum/HilalMeadow.jpg";
import LakeCiel from "@/components/images/destinations/sylvalum/LakeCiel.jpg";
import LesserAnvil from "@/components/images/destinations/sylvalum/LesserAnvil.jpg";
import NoctilucentSphere from "@/components/images/destinations/sylvalum/NoctilucentSphere.jpg";
import NorthCielSandsea from "@/components/images/destinations/sylvalum/NorthCielSandsea.jpg";
import NorthernSearoad from "@/components/images/destinations/sylvalum/NorthernSearoad.jpg";
import NorthHardheartCanyon from "@/components/images/destinations/sylvalum/NorthHardheartCanyon.jpg";
import SamuelIncline from "@/components/images/destinations/sylvalum/SamuelIncline.jpg";
import SandsprintSlope from "@/components/images/destinations/sylvalum/SandsprintSlope.jpg";
import SeabirdsBeak from "@/components/images/destinations/sylvalum/SeabirdsBeak.jpg";
import SouthCielSandsea from "@/components/images/destinations/sylvalum/SouthCielSandsea.jpg";
import SouthHardheartCanyon from "@/components/images/destinations/sylvalum/SouthHardheartCanyon.jpg";
import SouthernSearoad from "@/components/images/destinations/sylvalum/SouthernSearoad.jpg";
import SylvalumSearoad from "@/components/images/destinations/sylvalum/SylvalumSearoad.jpg";
import WestCinderdunes from "@/components/images/destinations/sylvalum/WestCinderdunes.jpg";
import XanaduOverlook from "@/components/images/destinations/sylvalum/XanaduOverlook.jpg";

export const sylvalumLandmarks: LandmarkList = [
  {
    title: "Badr Basin",
    img: BadrBasin,
  },
  {
    title: "Badr Stonebridge",
    img: BadrStonebridge,
  },
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
    title: "East Ciel Sandsea",
    img: EastCielSandsea,
  },
  {
    title: "Gehenna Span",
    img: GehennaSpan,
  },
  {
    title: "Hardheart Canyon",
    img: HardheartCanyon,
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
    title: "Lesser Anvil",
    img: LesserAnvil,
  },
  {
    title: "Noctilucent Sphere",
    img: NoctilucentSphere,
  },
  {
    title: "North Ciel Sandsea",
    img: NorthCielSandsea,
  },
  {
    title: "Northern Searoad",
    img: NorthernSearoad,
  },
  {
    title: "North Hardheart Canyon",
    img: NorthHardheartCanyon,
  },
  {
    title: "Samuel Incline",
    img: SamuelIncline,
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
    title: "South Ciel Sandsea",
    img: SouthCielSandsea,
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
    title: "Sylvalum Searoad",
    img: SylvalumSearoad,
  },
  {
    title: "West Cinderdunes",
    img: WestCinderdunes,
  },
  {
    title: "Xanadu Overlook",
    img: XanaduOverlook,
  },
];

const SylvalumData = getDestinationData(sylvalumLandmarks);
export default SylvalumData;
