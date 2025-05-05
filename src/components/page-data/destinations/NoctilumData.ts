import {
  getDestinationData,
  type LandmarkList,
} from "@/app/lib/DestinationData";
import BidentCrossing from "@/components/images/destinations/noctilum/BidentCrossing.jpg";
import BreakwaterNarrow from "@/components/images/destinations/noctilum/BreakwaterNarrow.jpg";
import CelestialAscent from "@/components/images/destinations/noctilum/CelestialAscent.jpg";
import CelestialCleave from "@/components/images/destinations/noctilum/CelestialCleave.jpg";
import CoilTreeCape from "@/components/images/destinations/noctilum/CoilTreeCape.jpg";
import Decapotamon from "@/components/images/destinations/noctilum/Decapotamon.jpg";
import DecapotamonVista from "@/components/images/destinations/noctilum/DecapotamonVista.jpg";
import GardenSpring from "@/components/images/destinations/noctilum/GardenSpring.jpg";
import GoblinsNarrow from "@/components/images/destinations/noctilum/GoblinsNarrow.jpg";
import GreatTridentCrossing from "@/components/images/destinations/noctilum/GreatTridentCrossing.jpg";
import MillstoneRidge from "@/components/images/destinations/noctilum/MillstoneRidge.jpg";
import NarcissusTree from "@/components/images/destinations/noctilum/NarcissusTree.jpg";
import NoponHighroad from "@/components/images/destinations/noctilum/NoponHighroad.jpg";
import PottersRock from "@/components/images/destinations/noctilum/PottersRock.jpg";
import RedsnakePass from "@/components/images/destinations/noctilum/RedsnakePass.jpg";
import RustpoolBanks from "@/components/images/destinations/noctilum/RustpoolBanks.jpg";
import WhalesWeeper from "@/components/images/destinations/noctilum/WhalesWeeper.jpg";

export const noctilumLandmarks: LandmarkList = [
  { title: "Bident Crossing", img: BidentCrossing },
  { title: "Breakwater Narrow", img: BreakwaterNarrow },
  { title: "Celestial Ascent", img: CelestialAscent },
  { title: "Celestial Cleave", img: CelestialCleave },
  { title: "Coil Tree Cape", img: CoilTreeCape },
  { title: "Decapotamon", img: Decapotamon },
  { title: "Decapotamon Vista", img: DecapotamonVista },
  { title: "Garden Spring", img: GardenSpring },
  { title: "Goblin's Narrow", img: GoblinsNarrow },
  { title: "Great Trident Crossing", img: GreatTridentCrossing },
  { title: "Millstone Ridge", img: MillstoneRidge },
  { title: "Narcissus Tree", img: NarcissusTree },
  { title: "Nopon Highroad", img: NoponHighroad },
  { title: "Potter's Rock", img: PottersRock },
  { title: "Redsnake Pass", img: RedsnakePass },
  { title: "Rustpool Banks", img: RustpoolBanks },
  { title: "Whale's Weeper", img: WhalesWeeper },
];

const NoctilumData = getDestinationData(noctilumLandmarks);

export default NoctilumData;
