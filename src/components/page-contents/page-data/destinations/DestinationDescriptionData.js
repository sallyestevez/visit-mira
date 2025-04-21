import Mira from "../../../images/home/Mira.png";
import NewLosAngeles from "../../../images/nla/New_Los_Angeles.jpg";
import Primordia from "../../../images/destinations/primordia/Primordia.jpg";
import Noctilum from "../../../images/destinations/noctilum/Noctilum.jpg";
import Oblivia from "../../../images/destinations/oblivia/Oblivia.jpg";
import Sylvalum from "../../../images/destinations/sylvalum/Sylvalum.jpg";
import Cauldros from "../../../images/destinations/cauldros/Cauldros.jpg";

var DestinationDescriptionData = [
  {
    id: "home",
    title: "Welcome to Mira!",
    img: Mira,
    img_alt: "Mira scenery",
    description:
      "Are you tired of old planet Earth? Do you want some excitement in your life? Do you want to start your life over somewhere else? If so, come over to Mira!",
    description2: "Trust us, you've never seen anything like this!",
  },
  {
    id: "nla",
    title: "New Los Angeles",
    img: NewLosAngeles,
    img_alt: "New Los Angeles overview",
    description:
      "This location is based on the city of Los Angeles on Earh. It is separated into four districts: Administrative, Commercial, Industrial, and Residential.",
    description2:
      "Visitors will be staying in the Residential District, and can shop to their heart's content in the Commercial District. The Administrative and Industrial Districts are off-limits to visitors.",
    neighboring_region: "Primordia",
  },
  {
    id: "primordia",
    title: "Primordia",
    img: Primordia,
    img_alt: "Primordia scenery",
    description:
      'Surrounded by grassy plains, mountains, and beaches. Primordia is a very "welcoming" region with tons of locations to explore, and lots of wildlife to encounter. New Los Angeles (NLA) is located here.',
    neighboring_region:
      "Noctilum (northwest), Oblivia (east), Sylvalum (north)",
  },
  {
    id: "noctilum",
    title: "Noctilum",
    img: Noctilum,
    img_alt: "Noctilum scenery",
    description:
      "Tropical jungle! Full of lush greenery and lots of swamps. Home to tons of hostile wildlife. The forest glows at night. If the plants seem to be attacking you, don't worry: that's their way of welcoming you.",
    neighboring_region: "Primordia (southeast)",
  },
  {
    id: "oblivia",
    title: "Oblivia",
    img: Oblivia,
    img_alt: "Oblivia scenery",
    description:
      "A dry, arid region, so make sure to bring plenty of water. Vegetation is uncommon. Contains the ruins of an ancient civilization. Sandstorms are frequent. Try to avoid the endless pit to nowhere!",
    neighboring_region: "Primordia (west)",
  },
  {
    id: "sylvalum",
    title: "Sylvalum",
    img: Sylvalum,
    img_alt: "Sylvalum scenery",
    description:
      "Characterized by its white sand. Contains a lot of weird plants and trees, but that's Mira for you. Lots of people say it looks very pretty at night!",
    neighboring_region: "Primordia (south), Cauldros (north)",
  },
  {
    id: "cauldros",
    title: "Cauldros",
    img: Cauldros,
    img_alt: "Cauldros scenery",
    description:
      "The most dangerous region! Its volcanic terrain is broken by pools of molten rock, ancient battlefields, and the ruins of an ancient city. Hostile weather is constant. If you feel as if this place is too hot, go back to the hotel in NLA. After all, it got five stars for its air conditioning.",
    neighboring_region: "Sylvalum (south)",
  },
];

export default DestinationDescriptionData;
