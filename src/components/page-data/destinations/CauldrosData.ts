import {
  getDestinationData,
  type LandmarkList,
} from "@/app/lib/DestinationData";
import DragonbonePromontory from "@/components/images/destinations/cauldros/DragonbonePromontory.jpg";
import GnahanVilla from "@/components/images/destinations/cauldros/Gnahan_Villa.jpg";
import InfernalLedges from "@/components/images/destinations/cauldros/InfernalLedges.jpg";
import MountMgando from "@/components/images/destinations/cauldros/MountMgando.jpg";
import OrrhSimCapitalRemains from "@/components/images/destinations/cauldros/Orrh_Sim_Capital_Remains.jpg";
import RuinedCity from "@/components/images/destinations/cauldros/Ruined_City.jpg";
import SunsetFalls from "@/components/images/destinations/cauldros/SunsetFalls.jpg";
import TengusPlayground from "@/components/images/destinations/cauldros/TengusPlayground.jpg";
import TphnomShelf from "@/components/images/destinations/cauldros/TphnomShelf.jpg";

export const cauldrosLandmarks: LandmarkList = [
  {
    title: "Dragonbone Promontory",
    img: DragonbonePromontory,
  },
  {
    title: "G'nahan Villa",
    img: GnahanVilla,
  },
  {
    title: "Infernal Ledges",
    img: InfernalLedges,
  },
  {
    title: "Mount M'gando",
    img: MountMgando,
  },
  {
    title: "O'rrh Sim Capital Remains",
    img: OrrhSimCapitalRemains,
  },
  {
    title: "Ruined City",
    img: RuinedCity,
  },
  {
    title: "Sunset Falls",
    img: SunsetFalls,
  },
  {
    title: "Tengus Playground",
    img: TengusPlayground,
  },
  {
    title: "T'phnom Shelf",
    img: TphnomShelf,
  },
];
const CauldrosData = getDestinationData(cauldrosLandmarks);

export default CauldrosData;
