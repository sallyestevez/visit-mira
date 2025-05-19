import { getDestinationData, type LandmarkList } from "@/lib/DestinationData";
import CapitalWreckage from "@/components/images/destinations/cauldros/CapitalWreckage.jpg";
import DragonbonePromontory from "@/components/images/destinations/cauldros/DragonbonePromontory.jpg";
import EmerianBattlegrounds from "@/components/images/destinations/cauldros/EmerianBattlegrounds.jpg";
import ForgottenMiningFrigates from "@/components/images/destinations/cauldros/ForgottenMiningFrigates.jpg";
import GnahanVilla from "@/components/images/destinations/cauldros/GnahanVilla.jpg";
import InfernalLedges from "@/components/images/destinations/cauldros/InfernalLedges.jpg";
import KitsuneStronghold from "@/components/images/destinations/cauldros/KitsuneStronghold.jpg";
import KwarahCloister from "@/components/images/destinations/cauldros/KwarahCloister.jpg";
import KwarahVilla from "@/components/images/destinations/cauldros/KwarahVilla.jpg";
import MgandoVolcanicCrater from "@/components/images/destinations/cauldros/MgandoVolcanicCrater.jpg";
import MountMgando from "@/components/images/destinations/cauldros/MountMgando.jpg";
import OrrhSimCapitalRemains from "@/components/images/destinations/cauldros/OrrhSimCapitalRemains.jpg";
import OrrhSimCastleRuins from "@/components/images/destinations/cauldros/OrrhSimCastleRuins.jpg";
import RuinedCityofOrrhSim from "@/components/images/destinations/cauldros/RuinedCityofOrrhSim.jpg";
import ScholesBattleground from "@/components/images/destinations/cauldros/ScholesBattleground.jpg";
import SlavebirdIsle from "@/components/images/destinations/cauldros/SlavebirdIsle.jpg";
import SunsetFalls from "@/components/images/destinations/cauldros/SunsetFalls.jpg";
import TengusPlayground from "@/components/images/destinations/cauldros/TengusPlayground.jpg";
import TernionFork from "@/components/images/destinations/cauldros/TernionFork.jpg";
import TitansTable from "@/components/images/destinations/cauldros/TitansTable.jpg";
import TphnomShelf from "@/components/images/destinations/cauldros/TphnomShelf.jpg";
import WhitePhosphorLake from "@/components/images/destinations/cauldros/WhitePhosphorLake.jpg";

export const cauldrosLandmarks: LandmarkList = [
  {
    title: "Capital Wreckage",
    img: CapitalWreckage,
  },
  {
    title: "Dragonbone Promontory",
    img: DragonbonePromontory,
  },
  {
    title: "Emerian Battlegrounds",
    img: EmerianBattlegrounds,
  },
  {
    title: "Forgotten Mining Frigates",
    img: ForgottenMiningFrigates,
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
    title: "Kitsune Stronghold",
    img: KitsuneStronghold,
  },
  {
    title: "K'warah Cloister",
    img: KwarahCloister,
  },
  {
    title: "K'warah Villa",
    img: KwarahVilla,
  },
  {
    title: "M'gando Volcanic Crater",
    img: MgandoVolcanicCrater,
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
    title: "O'rrh Sim Castle Ruins",
    img: OrrhSimCastleRuins,
  },
  {
    title: "Ruined City of O'rrh Sim",
    img: RuinedCityofOrrhSim,
  },
  {
    title: "Scholes Battleground",
    img: ScholesBattleground,
  },
  {
    title: "Slavebird Isle",
    img: SlavebirdIsle,
  },
  {
    title: "Sunset Falls",
    img: SunsetFalls,
  },
  {
    title: "Tengu's Playground",
    img: TengusPlayground,
  },
  {
    title: "Ternion Fork",
    img: TernionFork,
  },
  {
    title: "Titan's Table",
    img: TitansTable,
  },
  {
    title: "T'phnom Shelf",
    img: TphnomShelf,
  },
  {
    title: "White Phosphor Lake",
    img: WhitePhosphorLake,
  },
];
const CauldrosData = getDestinationData(cauldrosLandmarks);

export default CauldrosData;
