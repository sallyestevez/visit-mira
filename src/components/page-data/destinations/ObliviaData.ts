import { getDestinationData, type LandmarkList } from "@/lib/DestinationData";

import AaroyPlain from "@/components/images/destinations/oblivia/AaroyPlain.jpg";
import AzureLagoon from "@/components/images/destinations/oblivia/AzureLagoon.jpg";
import BigArch from "@/components/images/destinations/oblivia/BigArch.jpg";
import CrypticSign from "@/components/images/destinations/oblivia/CrypticSign.jpg";
import DemonsPocket from "@/components/images/destinations/oblivia/DemonsPocket.jpg";
import DrowningRing from "@/components/images/destinations/oblivia/DrowningRing.jpg";
import EjiriPromontory from "@/components/images/destinations/oblivia/Ejiri_Promontory.jpg";
import GiantRing from "@/components/images/destinations/oblivia/Giant_Ring.jpg";
import GreatWashingtonIsle from "@/components/images/destinations/oblivia/GreatWashingtonIsle.jpg";
import LakeBasel from "@/components/images/destinations/oblivia/LakeBasel.png";
import LeaningRing from "@/components/images/destinations/noctilum/LeaningRing.jpg";
import SandbankRuins from "@/components/images/destinations/noctilum/SandbankRuins.jpg";
import SouthAntsNest from "@/components/images/destinations/noctilum/SouthAntsNest.jpg";
import YawningGiant from "@/components/images/destinations/noctilum/YawningGiant.png";

export const obliviaLandmarks: LandmarkList = [
  { title: "Aaroy Plain", img: AaroyPlain },
  { title: "Azure Lagoon", img: AzureLagoon },
  { title: "Big Arch", img: BigArch },
  { title: "Cryptic Sign", img: CrypticSign },
  { title: "Demon's Pocket", img: DemonsPocket },
  { title: "Drowning Ring", img: DrowningRing },
  { title: "Ejiri Promontory", img: EjiriPromontory },
  { title: "Giant Ring", img: GiantRing },
  { title: "Great Washington Isle", img: GreatWashingtonIsle },
  { title: "Lake Basel", img: LakeBasel },
  { title: "Leaning Ring", img: LeaningRing },
  { title: "Sandbank Ruins", img: SandbankRuins },
  { title: "South Ant's Nest", img: SouthAntsNest },
  { title: "Yawning Giant", img: YawningGiant },
];

const ObliviaData = getDestinationData(obliviaLandmarks);
export default ObliviaData;
