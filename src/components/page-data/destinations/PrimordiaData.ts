import { getDestinationData, type LandmarkList } from "@/lib/DestinationData";
import BiahnoHills from "@/components/images/destinations/primordia/BiahnoHills.png";
import BiahnoLake from "@/components/images/destinations/primordia/BiahnoLake.jpg";
import EastGatePlain from "@/components/images/destinations/primordia/EastGatePlain.jpg";
import FallshornIsle from "@/components/images/destinations/primordia/FallshornIsle.jpg";
import GreaterGeminiBridge from "@/components/images/destinations/primordia/GreaterGeminiBridge.jpg";
import GreenThreshold from "@/components/images/destinations/primordia/Green_Threshold.jpg";
import LesserGeminiBridge from "@/components/images/destinations/primordia/Lesser_Gemini_Bridge.jpg";
import NorthpointeBeach from "@/components/images/destinations/primordia/NorthpointeBeach.jpg";
import NorthpointeCove from "@/components/images/destinations/primordia/NorthpointeCove.jpg";
import PrimordiaWaters from "@/components/images/destinations/primordia/PrimordiaWaters.jpg";
import SayramLake from "@/components/images/destinations/primordia/SayramLake.jpg";
import SeasweptRise from "@/components/images/destinations/primordia/Seaswept_Rise.jpg";
import SilentMire from "@/components/images/destinations/primordia/SilentMire.jpg";
import StonelatticeCavern from "@/components/images/destinations/primordia/StonelatticeCavern.jpg";
import TurtleNest from "@/components/images/destinations/primordia/TurtleNest.jpg";
import UnicornRock from "@/components/images/destinations/primordia/Unicorn_Rock.jpg";

export const primordiaLandmarks: LandmarkList = [
  { title: "Biahno Hills", img: BiahnoHills },
  { title: "Biahno Lake", img: BiahnoLake },
  { title: "East Gate Plain", img: EastGatePlain },
  { title: "Fallshorn Isle", img: FallshornIsle },
  { title: "Greater Gemini Bridge", img: GreaterGeminiBridge },
  { title: "Green Threshold", img: GreenThreshold },
  { title: "Lesser Gemini Bridge", img: LesserGeminiBridge },
  { title: "Northpointe Beach", img: NorthpointeBeach },
  { title: "Northpointe Cove", img: NorthpointeCove },
  { title: "Primordia Waters", img: PrimordiaWaters },
  { title: "Sayram Lake", img: SayramLake },
  { title: "Seaswept Rise", img: SeasweptRise },
  { title: "Silent Mire", img: SilentMire },
  { title: "Stonelattice Cavern", img: StonelatticeCavern },
  { title: "Turtle Nest", img: TurtleNest },
  { title: "Unicorn Rock", img: UnicornRock },
];

const PrimordiaData = getDestinationData(primordiaLandmarks);

export default PrimordiaData;
