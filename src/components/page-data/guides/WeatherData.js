import Aurora from "@/components/images/guides/weather/Aurora.png";
import BrimstoneRain from "@/components/images/guides/weather/Brimstone_Rain.png";
import Clear from "@/components/images/guides/weather/Clear.png";
import Cloudy from "@/components/images/guides/weather/Cloudy.png";
import CrimsonAurora from "@/components/images/guides/weather/Crimson_Aurora.png";
import DenseFog from "@/components/images/guides/weather/Dense_Fog.png";
import ElectromagneticStorms from "@/components/images/guides/weather/Electromagnetic_Storms.png";
import EnergyMist from "@/components/images/guides/weather/Energy_Mist.png";
import HeatWave from "@/components/images/guides/weather/Heat_Wave.png";
import HeavyRain from "@/components/images/guides/weather/Heavy_Rain.png";
// import Lightning from "@/components/images/guides/weather/Lightning.png";
import MeteorShowers from "@/components/images/guides/weather/Meteor_Showers.png";
import Rain from "@/components/images/guides/weather/Rain.png";
import Rainbow from "@/components/images/guides/weather/Rainbow.png";
import RisingEnergyMist from "@/components/images/guides/weather/RisingEnergyMist.png";
import Sandstorms from "@/components/images/guides/weather/Sandstorms.png";
import Spores from "@/components/images/guides/weather/Spores.png";
// import Sunshower from "@/components/images/weather/Sunshower.png";
import Thunderstorms from "@/components/images/guides/weather/Thunderstorms.png";

var WeatherData = [
  {
    id: "clear",
    title: "Clear",
    description: "Marked by blue skies with scattered clouds.",
    img: Clear,
    continent1: "Primordia",
    continent2: "Noctilum",
    continent3: "Oblivia",
    continent4: "Cauldros",
  },

  {
    id: "cloudy",
    title: "Cloudy",
    description:
      "Marked by a dense cloud cover. The moons are not visible and the skies have a constant glow.",
    img: Cloudy,
    continent1: "Sylvalum",
    continent2: "Cauldros",
  },
  {
    id: "rain",
    title: "Rain",
    description: "Marked by moderate rainfall and slightly reduced visibility.",
    img: Rain,
    continent1: "Primordia",
    continent2: "Noctilum",
    continent3: "Oblivia",
  },
  {
    id: "heavy-rain",
    title: "Heavy Rain",
    description:
      "Marked by a torrential downpour and heavily reduced visibility.",
    img: HeavyRain,
    continent1: "Primordia",
  },
  {
    id: "thunderstorm",
    title: "Thunderstorm",
    description:
      "Marked by heavy rain weather combined with periodic bolts of lightning.",
    img: Thunderstorms,
    continent1: "Primordia",
    continent2: "Noctilum",
  },
  {
    id: "rainbow",
    title: "Rainbow",
    description:
      "Occurs when rain, heavy rain, thunderstorm, or brimstone rain weather naturally expires. It is marked by a rainbow across the sky and clear weather.",
    img: Rainbow,
    continent1: "Primordia",
    continent2: "Noctilum",
    continent3: "Oblivia",
    continent4: "Cauldros",
  },
  {
    id: "meteor-shower",
    title: "Meteor Shower",
    description:
      "Marked by sporadic streaks of light in the sky. Only occurs at night.",
    img: MeteorShowers,
    continent1: "Primordia",
    continent2: "Oblivia",
  },
  {
    id: "aurora",
    title: "Aurora",
    description:
      "Marked by waving bands of green and blue lights in the sky. A shimmering sound can be heard. Only occurs at night.",
    img: Aurora,
    continent1: "Primordia",
    continent2: "Oblivia",
  },
  {
    id: "dense-fog",
    title: "Dense Fog",
    description:
      "Marked by a thick cloud of fog. Only occurs from early morning until evening.",
    img: DenseFog,
    continent1: "Noctilum",
  },
  {
    id: "energy-mist",
    title: "Energy Mist",
    description:
      "Marked by a thin fog of white particles. Only occurs at night.",
    img: EnergyMist,
    continent1: "Noctilum",
  },
  {
    id: "heat-wave",
    title: "Heat Wave",
    description:
      "Marked by wavy heat distortions in the distance. Only occurs during the day.",
    img: HeatWave,
    continent1: "Oblivia",
  },
  {
    id: "sandstorm",
    title: "Sandstorm",
    description:
      "Marked by a thick brown dust cloud and sand blowing everywhere.",
    img: Sandstorms,
    continent1: "Oblivia",
  },
  {
    id: "electromagnetic-storm",
    title: "Electromagnetic Storm",
    description:
      "Marked by cloudy weather and bolts of lightning. Electric damage is periodically dealt. Occurs in Oblivia at any time and Cauldros during early morning.",
    img: ElectromagneticStorms,
    continent1: "Oblivia",
    continent2: "Cauldros",
  },
  {
    id: "spore-clouds",
    title: "Spore Clouds",
    description:
      "Marked by blizzard-like fog of spores so thick that visibility is reduced to nearly nothing. Only occurs during the afternoon and evening.",
    img: Spores,
    continent1: "Sylvalum",
  },
  {
    id: "crimson-aurora",
    title: "Crimson Aurora",
    description:
      "Marked by waving bands of red light in the sky, combined with a glowing red ambience. A shimmering sound effect can be heard. Only occurs at night.",
    img: CrimsonAurora,
    continent1: "Sylvalum",
  },
  {
    id: "rising-energy-mist",
    title: "Rising Energy Mist",
    description:
      "Marked by particles of white light moving upwards. Only occurs at night.",
    img: RisingEnergyMist,
    continent1: "Sylvalum",
  },
  {
    id: "brimstone-rain",
    title: "Brimstone Rain",
    description:
      "Marked by flaming particles falling from the sky and a reddened, glowing atmosphere. Occurs at any time except early morning. People can take heavy damage when exposed to the weather.",
    img: BrimstoneRain,
    continent1: "Cauldros",
  },
];

export default WeatherData;
