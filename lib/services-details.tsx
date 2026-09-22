/**
 * Detailed content for each capability. Derived from the company profile
 * already reflected across the site — no unsupported services are claimed.
 */

type ServiceImage = {
  src: string;
  alt: string;
};

export type ProductDetails = {
  name: string;
  material?: string;
  feature?: string;
  size?: string;
  color?: string;
  fabric_weight?: string;
  design?: string;
  protection_level?: string;
  protection_area?: string;
  style?: string;
  type?: string;
  outer_finish?: string;
  function?: string;
  weight?: string;
  thickness?: string;
  width?: string;
  grammage?: string;
  filter?: string;
  coating?: string;
  webbing?: string;
  lining?: string;
  buckle?: string;
  capacity?: string;
  suitable_for?: string;
  application?: string;
  temperature_scale?: string;
  packing?: string;
  meast?: string;
  cover?: string;
  brand?: string;
  gender?: string;
  moq?: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  overview: string;
  approach: string[];
  benefits: string[];
  related: string[];
  images?: ServiceImage[];
  product_details?: ProductDetails[];
  operational?: string[];
  personnel?: string;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "military-apparel-supplies",
    title: "Military Apparel Supplies",
    eyebrow: "Military Apparel & Protective Equipment",
    intro:
      "Professional military and tactical apparel supplied to meet operational requirements, environmental conditions and organizational specifications, with options for standardized or customized designs.",

    overview:
      "Instant Shield supplies military, security and tactical apparel for government institutions, security organizations, corporate clients and other operational teams. Our apparel range is available in a variety of fabrics, weights, colors, camouflage patterns and designs, with sizing and customization options to meet specific client requirements.",

    approach: [
      "Product specifications aligned with the client's operational requirements.",
      "Multiple fabric, color, camouflage and design options available.",
      "Sizing and customization based on organizational requirements.",
      "Quality checks conducted before delivery.",
    ],
    product_details: [
      {
        name: "ACU/BDU/F1/F2",
        material: "Cotton / polyester, nylon/ cotton",
        fabric_weight: "180-250gm",
        feature: "Protective, functional and field-ready",
        size: "customized from XS-5XL",
        color:
          "Solid color, woodland, multicam, a tac, krytek, digital camouflage",
        design: "BDU/ACU/TDU/F1/F2 or customized.",
      },
      {
        name: "M65 Field Jacket",
        material: "Cotton/polyester, nylon/cotton",
        fabric_weight: "180-250gm",
        size: "Customized, from XS-5XL",
        color:
          "Solid color, woodland, multicam, a tac, kryptek, digital camouflage",
        design: "M65 field jacket with detachable liner.",
      },
      {
        name: "Shirt / Pants",
        material: "Wool/polyester,",
        fabric_weight: "160-230gm",
        feature: "Water repellent, oilproof, anti fouling",
        size: "Coustomized, frrom XS-5XL",
        color: "Olive green, khaki, black, coyote or camouflage.",
      },
      {
        name: "Frog Suit",
        material: "Sleeve: cotton/polyester, nylon/cotton. Body: cotton",
        fabric_weight: "180-250gm",
        size: "Customized, from XS-5XL",
        color:
          "Solid color, woodland, multicam, a tac, kryptek, digital camouflage.",
      },
      {
        name: "T Shirt",
        material: "Cotton/polyester",
        fabric_weight: "130-200gm",
        size: "Customized, from XS-5XL",
        color:
          "Solid color, woodland, multicam, a tac, kryptek, digital camouflage.",
      },
      {
        name: "Pullover",
        material: "Wool/acrylic, wool/polyester",
        fabric_weight: "500g-800g/pc",
        size: "Customized, from XS-5XL",
        color:
          "Solid color, woodland, multicam, a tac, kryptek, digital camouflage.",
      },
      {
        name: "Outdoor Clothing",
        material: "Nylon/polyester/spandex",
        feature: "Waterproof, windproof, breathable",
        size: "Customized, from XS-5XL",
        color:
          "Solid color, woodland, multicam, a tac, kryptek, digital camouflage.",
      },
      {
        name: "Poncho / Rain suit",
        material: "Nylon or polyester",
        feature: "Waterproof, windproof, breathable",
        size: "Customized, from XS-5XL",
        color:
          "Solid color, woodland, multicam, a tac, kryptek, digital camouflage.",
      },
      {
        name: "Workwear clothing",
        material: "Cotton/polyester, nylon/cotton, aramid, modacrylic",
        feature: "Flame retardant, anti-static, water repellent",
        size: "Customized, from XS-5XL",
        color:
          "Solid color, woodland, multicam, a tac, kryptek, digital camouflage.",
      },
      // {
      //   name: "",
      //   material: "",
      //   fabric_weight: "",
      //   feature: "",
      //   size: "",
      //   color: "",
      // },
    ],

    benefits: [
      "Multiple apparel configurations to suit different operational requirements",
      "Customized sizing and design options",
      "Suitable for institutional and bulk procurement",
      "Consistent specifications across organizational deployments",
    ],
    related: ["head-gear", "armour-gear", "anti-riot-gear"],
    images: [
      {
        src: "/assets/images/apparel/apparel-01.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/apparel-02.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/apparel-03.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/apparel-04.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/apparel-05.png",
        alt: "Security personnel conducting a site patrol",
      },
    ],
  },
  {
    slug: "head-gear",
    title: "Head Gear",
    eyebrow: "Military & Protective Head Gear",
    intro:
      "A range of military, tactical and protective head gear designed to provide comfort, protection and a professional appearance across demanding operational environments.",

    overview:
      "Instant Shield supplies military and tactical head gear for security organizations, government institutions, corporate clients and other operational teams. Our range includes standard and customized options designed to meet different environmental, functional and organizational requirements.",

    approach: [
      "Head gears are selected according to operational requirements and intended use.",
      "Multiple materials, colors and camouflage patterns available.",
      "Sizing and customization options available for organizational requirements.",
      "Quality checks conducted to ensure consistency before delivery.",
    ],
    benefits: [
      "Suitable for military, security and tactical applications",
      "Multiple styles, colors and camouflage options",
      "Customizable for organizational requirements",
      "Available for individual and bulk procurement",
    ],
    product_details: [
      {
        name: "Beret / BDU Cap",
      },
      {
        name: "Baseball Cap",
      },
      {
        name: "Officer Cap",
      },
      {
        name: "Bonnie Hat",
      },
      {
        name: "Scarf",
      },
    ],
    related: ["military-apparel-supplies", "armour-gear", "anti-riot-gear"],
    images: [
      {
        src: "/assets/images/apparel/headgear-01.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/headgear-02.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/headgear-03.png",
        alt: "Security personnel conducting a site patrol",
      },
    ],
  },
  {
    slug: "armour-gear",
    title: "Armour Gear",
    eyebrow: "Ballistic & Protective Equipment",
    intro:
      "Ballistic and protective equipment designed to provide reliable protection for personnel operating in high-risk and demanding environments.",

    overview:
      "Instant Shield supplies a range of ballistic and protective equipment for military, security, government and other authorized operational applications. Our armour gear range includes bulletproof vests, ballistic plates, bulletproof helmets and other protective equipment, with options selected according to the required level of protection, fit and operational use.",

    approach: [
      "Equipment specifications matched to the intended operational requirements.",
      "Selection of appropriate protection levels and configurations.",
      "Multiple sizes and equipment configurations available.",
      "Quality and specification checks carried out before delivery.",
      "Bulk supply and customized procurement options available for organizational requirements.",
    ],

    benefits: [
      "Comprehensive range of ballistic and protective equipment",
      "Options for different operational and protection requirements",
      "Multiple sizes and configurations available",
      "Suitable for institutional and bulk procurement",
      "Professional equipment suitable for demanding operational environments",
    ],
    product_details: [
      {
        name: "Bulletproof Vest",
        material: "UHMW-PE/Aramid",
        protection_level: "NIJ IIIA/III/IV",
        protection_area: "0.28sqm / 0.3sqm/ 0.34sqm/0.5sqm/0.65sqm",
        style: "Concealed / Normal / Molle System full protection.",
      },
      {
        name: "Stab Proof Vest",
        material:
          "Panel: A flexible metalic strike panel backed by non-woven UHMW-PE felt / Aramid Woven Coating Frabric / Aramid Wven Coating Fabric + 2mm Metal foil",
        protection_level: "NIJ 0115.00 Level I / NIJ 0115.00 Level II",
      },
      {
        name: "Plate Carrier",
        material:
          "1000D Nylon, Lining: 1000D Nylon Shell Fabric, 210D Polyester Reinforced, Webbing: Nylon, Buckle: POM Quick Release Buckle ",
        feature: "EVA Mold, Laser Cut",
      },
      {
        name: "Single Curve T-Type Bulletproof Plate",
        material: "PE + SIC/PE + Aluminum Alloy Ceramic / PE + Boron Carbide",
        size: "10*12 Inch or Customized",
        protection_level: "NIJ 0101.06 III OR IV",
        type: "ICW or STA",
        outer_finish: "Polyurea Sprayed / Waterproof Oxford or Nylon Cover",
      },
      {
        name: "Single Curve Bulletproof Plate With Shooter Cut",
        material: "PE + SICE/PE + Aluminum Alloy  Ceramic / PE+Boron Carbide",
        size: "10*12 Inch or Customized",
        protection_level: "NIJ 0101.06 III OR IV",
        type: "ICW or STA",
        outer_finish: "Polyurea Sprayed / Waterproof Oxford or Nylon Cover",
      },
      {
        name: "Multi Curve Bulletproof Plate With Shooter Cut",
        material: "PE + SIC/PE + Aluminum Alloy Ceramic /PE = Baron Carbide",
        size: "10*12 Inch or Customized",
        protection_level: "NIJ 0101.06 III OR IV",
        type: "ICW or STA",
        outer_finish: "Polyurea Sprayed / Waterproof Oxford or Nylon Cover",
      },
      {
        name: "Bulletproof Side Plate",
        material: "PE + SIC/PE + Aluminum Alloy Ceramic /PE = Baron Carbide",
        size: "6*8 Inch or Customized",
        protection_level: "NIJ 0101.06 III OR IV",
        outer_finish: "Polyurea Sprayed / Waterproof Oxford or Nylon Cover",
      },
      {
        name: "Bulletproof Soft Vest Panel",
        material: "Aramid or UHMW-PE",
        size: "Customized",
        protection_level: "NIJ 0101.06 IIIA",
        outer_finish: "Waterproof Oxford or Nylon Cover",
        function: "The inner of the bulletproof vest",
      },
      {
        name: "Bulletproof Soft Panel",
        material: "Aramid or UHMW-PE",
        size: "Customized",
        protection_level: "NIJ 0101.06 IIIA",
        outer_finish: "Waterproof Oxford or Nylon Cover",
        function: "To be used in conjunction with the backpack",
      },
      {
        name: "Vechicle Armored Bulletproof Panel",
        material: "Aramid or UHMW-PE",
        size: "Customized",
        protection_level: "NIJ 0101.06 IIIA",
      },
      {
        name: "Bulletproof Helmet",
        material: "UHMW-PE/Aramid",
        protection_level: "NIJ IIIA",
        protection_area: "0.127sqm",
        style: "PAGST, FAST, MICH",
        weight: "1.25kg - 1.7kg",
      },
      {
        name: "Bulletproof Fabric",
        material: "PE Fabric, Aramid Woven Fabric, Aramid UD Fabric",
        thickness: "0.18mm - 0.6mm",
        width: "1.2m - 1.6m",
        grammage:
          "110gm, 130gm, 150gm, 160gm, 195gm, 200gm, 232gm, 340gm, 410gm",
      },
      {
        name: "Bulletproof Shield",
      },
      {
        name: "Bulletproof Visor",
      },
      {
        name: "Bulletproof Glass",
      },
    ],
    related: ["head-gear", "military-apparel-supplies", "anti-riot-gear"],
    images: [
      {
        src: "/assets/images/apparel/amorgear-01.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/amorgear-02.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/amorgear-03.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/amorgear-04.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/amorgear-05.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/amorgear-06.png",
        alt: "Security personnel conducting a site patrol",
      },
    ],
  },
  {
    slug: "anti-riot-gear",
    title: "Anti-Riot Gear",
    eyebrow: "Crowd Control & Protective Equipment",
    intro:
      "Specialized protective equipment designed to help authorized personnel operate safely and effectively during crowd-control and public-order situations.",

    overview:
      "Instant Shield supplies anti-riot and public-order protective equipment for authorized security, law-enforcement and government organizations. Our range includes anti-riot shields, protective suits, helmets and related equipment designed to provide personnel with appropriate protection while maintaining mobility and operational effectiveness.",

    approach: [
      "Equipment selected according to operational requirements and intended use.",
      "Protective equipment designed to provide coverage while maintaining personnel mobility.",
      "Multiple sizes and configurations available for different operational requirements.",
      "Equipment specifications reviewed to ensure suitability before deployment.",
      "Bulk supply and organizational procurement options available.",
    ],

    benefits: [
      "Comprehensive range of anti-riot protective equipment",
      "Protection designed for demanding public-order environments",
      "Multiple sizes and equipment configurations available",
      "Suitable for institutional and bulk procurement",
      "Equipment options for different operational requirements",
    ],
    related: ["head-gear", "military-apparel-supplies", "armour-gear"],
    images: [
      {
        src: "/assets/images/apparel/anti-riot-gear-01.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/anti-riot-gear-02.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/anti-riot-gear-03.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/amorgear-04.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/amorgear-05.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/amorgear-06.png",
        alt: "Security personnel conducting a site patrol",
      },
    ],
    product_details: [
      {
        name: "Anti Riot Shield",
        material: "Transparent PC Imported aviation aluminum plate",
        feature:
          "1) Transmittance 90% 2) Puncture Resistant: Above 147J kinetic energy shock and 20J puncture 3) Service Ambient Temperature: -30C~+55C", //here
        size: "900*500*2mm, 900*500*3mm, 900*500*4mm, 1000*650*3.5mm, 1100*600*4mm, 600mm diameter*3.5mm thickness or as customer's need",
        protection_level: "",
        protection_area: "0.2/0.28/0.45", //here
        weight: "1.3 - 4kg/pc",
      },
      {
        name: "Baton",
        material: "Stainless steel / Polycarbonate / Polypropylene/ABS/Nylon",
        feature: "Resist-hitting",
        size: "Different sizes as per requirement",
        style: "Extendable / Electronic/ Tonfa",
      },
      {
        name: "Anti Riot Helment",
        material:
          "High impact-resistant ABS plastic injection shell PC face visor/steel mesh guard/thickness 2.5mm / 3.0mm made of skin-non-irritating Anti-allergic, sweat-absorbing material PC shell shields head from blunt trauma injury",
      },
      {
        name: "Gas mask with filter",
        material: "Silicone / Rubber",
        feature:
          "Long protection time, good protection effect, anti-aging, strong anti-oxidation",
        size: "All size",
        color: "Grey / Black or as customer's need",
        filter: "1L, #1, #3, #4, #7",
      },
      {
        name: "Handcuff / Leg cuff",
        material:
          "Carbonization steel with nickel plated/plastic /Nylon can be produced according to NIJ standard.",
      },
    ],
  },
  {
    slug: "military-shoes",
    title: "Military Shoes",
    eyebrow: "Military & Tactical Footwear",
    intro:
      "Durable military and tactical footwear designed to provide comfort, stability and reliable performance across demanding operational environments.",

    overview:
      "Instant Shield supplies military and tactical footwear for security personnel, military organizations, government institutions and other authorized operational teams. Our range includes combat boots, tactical boots and other specialized footwear designed for durability, mobility and extended use in challenging environments.",

    approach: [
      "Footwear selected according to operational requirements and intended environment.",
      "Durable construction designed for extended field use.",
      "Multiple sizes, styles and configurations available.",
      "Options suitable for different terrain and working conditions.",
      "Bulk supply and organizational procurement options available.",
    ],

    benefits: [
      "Durable footwear suitable for demanding operational environments",
      "Multiple boot and footwear configurations available",
      "Designed for comfort, stability and mobility",
      "Suitable for military, security and institutional use",
      "Available for individual and bulk procurement",
    ],
    related: ["head-gear", "military-apparel-supplies", "military-backpacks"],
    images: [
      {
        src: "/assets/images/apparel/millitary-shoes-01.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/millitary-shoes-02.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/millitary-shoes-03.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/millitary-shoes-04.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/millitary-shoes-05.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/millitary-shoes-06.png",
        alt: "Security personnel conducting a site patrol",
      },
    ],
    product_details: [
      {
        name: "Military Boots",
        material:
          "Upper: Genuine Leather/PU/Oxford Fabric or Customize Lining: Leather/Mesh/Customize Outsole: Rubber/EVA/PU/Double density Construction: Cement/Sewing/Goodyear/Double Denesity Design: Slip on/zipper/Magic Poster or Customize",
        fabric_weight: "",
        feature:
          "Breathable, comfortable, lightweight, waterproof, deodorant, high temperature resistant, suitable for tactical training, mountaining, and other environments",
      },
      {
        name: "Desert Boots",
        material:
          "Upper: Genuine Leather/PU/Oxford Fabric or Customize Lining: Leather/Mesh/Customize Outsole: Rubber/EVA/PU/Double density Construction: Cement/Sewing/Goodyear/Double Denesity Design: Slip on/zipper/Magic Poster or Customize",
        feature:
          "Breathable, comfortable, lightweight, waterproof, deodorant, high temperature resistant, suitable for tactical training, mountaining, and other environments.",
      },
      {
        name: "Canvas Shoes",
      },
      {
        name: "Officer Shoes",
        material:
          "Upper: Genuine Leather/PU/Microfiber/Canvas or Customize Lining: Leather/Mesh/Customize Outsole: Rubber/EVA/PU/Double denisty Construction: Cement/Sewing/Goodyear/Double Denesity Design: Slip on/zipper/Magic Poster or Customize",
        feature:
          "Breathable, comfortable, lightweight, waterproof, deodorant, high temperature resistant, suitable for tactical training, mountaining, and other environments.",
      },
      {
        name: "SAFETY SHOES",
      },
    ],
  },
  {
    slug: "military-backpacks",
    title: "Military Backpacks",
    eyebrow: "Military & Tactical Carrying Equipment",
    intro:
      "Durable military and tactical backpacks designed to support personnel with reliable storage, organization and mobility in demanding operational environments.",

    overview:
      "Instant Shield supplies military and tactical backpacks for security personnel, military organizations, government institutions and other authorized operational teams. Our range includes field packs, tactical backpacks and specialized carrying systems designed to accommodate equipment and personal gear while supporting mobility and extended field operations.",

    approach: [
      "Backpacks selected according to operational requirements and intended use.",
      "Durable construction designed for demanding field environments.",
      "Multiple capacities, configurations and compartment options available.",
      "Ergonomic designs developed for comfort during extended use.",
      "Bulk supply and organizational procurement options available.",
    ],

    benefits: [
      "Durable construction for demanding operational environments",
      "Multiple capacities and configurations available",
      "Organized storage for operational and personal equipment",
      "Designed for mobility and extended use",
      "Suitable for military, security and institutional applications",
    ],
    related: ["head-gear", "military-apparel-supplies", "military-shoes"],
    images: [
      {
        src: "/assets/images/apparel/backpack-01.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/backpack-02.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/backpack-03.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/backpack-04.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/backpack-05.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/backpack-06.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/backpack-07.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/backpack-08.png",
        alt: "Security personnel conducting a site patrol",
      },
    ],
    product_details: [
      {
        name: "Outdoor Tactical Backpack",
        material: "Polyester / Nylon",
        color: "Camouflage or Solid Color as Request",
        design: "Molle /Laser Cut",
        coating: "PVC / PU",
        webbing: "Nylon / Polyester / PP",
        lining: "Nylon / Polyester",
        buckle: "POM",
        capacity: "35-35L / 65-80L",
      },
      {
        name: "Gun Holster",
        material: "Plastic",
        color: "Camouflage or Solid Color as Request",
        buckle: "POM",
        suitable_for: "BERRETA / GLOCK / 1911 / M92 / USP / P226",
      },
      {
        name: "Long Gun Case",
        material: "Nylon / Polyester",
        color: "Camouflage or Solid Color as Request",
        coating: "PVC / PU",
        lining: "Nylon / Polyester",
        buckle: "POM",
        webbing: "Nylon / Polyester / PP",
      },
      {
        name: "Hydration Pack",
        material: "Nylon / Polyester",
        color: "Camouflage or Solid Color as Request",
        coating: "PVC / PU",
        buckle: "POM 1L / 2L / 3L / TPU or EVA Hydration Bladder",
        webbing: "PP / Nylon / Polyester",
      },
      {
        name: "Duffle Bag",
        material: "Canvas / Nylon / Polyester",
        capacity: "About 100L",
        color: "Camouflage or Solid Color as Request",
      },
      {
        name: "First-aid Bag",
        material: "Nylon / Polyester",
      },
      {
        name: "Tactical Vest",
        material: "Nylon / Polyesterc",
        color: "Camouflage or Solid Color as Request",
        coating: "PVC / PU Multi-function Pouches",
      },
      {
        name: "Alice Bag",
        material: "Nylon / Polyester",
        webbing:
          "PP / Polyester / Nylon Snap Button Metal, Eyelets, Metal Frame",
      },
      {
        name: "Canvas Bag",
        material: "Canvas",
        color: "Khaki, Army Gren, Camouflage",
      },
    ],
  },
  {
    slug: "outdoor-gears-accessories",
    title: "Outdoor Gears & Accessories",
    eyebrow: "Outdoor & Field Equipment",
    intro:
      "Practical outdoor and field equipment designed to support personnel during extended outdoor operations, expeditions, training and challenging environmental conditions.",

    overview:
      "Instant Shield supplies outdoor equipment and accessories for military, security, government, corporate and other authorized users. Our range includes sleeping bags, tents, camping equipment and other field accessories designed to support accommodation, mobility and basic operational needs in outdoor environments.",

    approach: [
      "Equipment selected according to environmental and operational requirements.",
      "Durable products suitable for outdoor and field conditions.",
      "Multiple sizes, capacities and configurations available.",
      "Equipment options suitable for individual and group deployments.",
      "Bulk supply and organizational procurement options available.",
    ],

    benefits: [
      "Equipment suitable for extended outdoor operations",
      "Range of camping and field accommodation solutions",
      "Multiple sizes and configurations available",
      "Designed for practical field use",
      "Suitable for individual, institutional and bulk procurement",
    ],
    related: ["head-gear", "military-apparel-supplies", "military-backpacks"],
    images: [
      {
        src: "/assets/images/apparel/outdoor-01.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/outdoor-02.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/outdoor-03.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/outdoor-04.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/outdoor-05.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/outdoor-06.png",
        alt: "Security personnel conducting a site patrol",
      },
      {
        src: "/assets/images/apparel/outdoor-07.png",
        alt: "Security personnel managing access control",
      },
      {
        src: "/assets/images/apparel/outdoor-08.png",
        alt: "Security personnel conducting a site patrol",
      },
    ],
    product_details: [
      {
        name: "Sleeping Bag",
        material:
          "Outshell material: 210T polyester fabric, Lining material:  210T polyesterponge fabric, Filing material: Polyester Fiber",
        weight: "1-3kg",
        function: "Waterproof / anti-mildew / anti-allergic material",
        size: "185cm(Medium) / 200cm(Large)",
        color: "Solid / camouflaget",
        application: "Disaster / emergency, shelter / outdoor living",
        temperature_scale: "15degree / +20 degrees",
        packing: "1pcs in a pp bag and a pouch 6pcs in a carton",
        meast: "605037cm",
      },
      {
        name: "Individual tent",
        material:
          "Cover fabric: 100% nylon / polyester, Floor fabric: 200g/m2 PE, Net: Polyester, Frame: Fiber or aluminum, Parts: Pegs and ropes",
        size: "L:2M W:1M H:2M",
        color: "Solid/Camouflage",
        function: "Waterproof and flame retardant",
        application: "Disaster / emergency, shelter / outdoor living",
        packing: "1pcs in a carrying bag 6pcs in a carton",
      },
      {
        name: "Military tent",
        material: "100% polyester/cotton canvas",
        color: "Solid/Camouflage",
        capacity: "10/20/30/50/100persons",
        function: "waterproof and flame retardant",
        application: "Disaster / emergency, shelter / outdoor living",
      },
      {
        name: "Military Camping Bed",
        material:
          "Fabric: 600D polyester with coating PVC, Tube: Steel/aluminum",
        thickness: "0.8mm",
        size: "1906242cm",
        weight: "4.8kg/pcs",
        application: "Disaster / emergency, shelter / outdoor living",
      },
      {
        name: "Sleeping Mat",
        material: "210T composite PVC fabric",
        size: "190703cm/customized",
        color: "Solid/Camouflaget",
        function: "Wterproof",
        application: "Camping/hiking",
      },
      {
        name: "Camping Hammock",
        material: "Nylon / polyester / cotton canvas",
        size: "Customized",
        color: "Solid/Camouflage",
        function: "Waterproof",
        application: "Camping/hiking",
        packing: "1pcs in a pouch 6pcs in a carton",
      },
      {
        name: "Ghillie Suit",
        material: "100% polyester",
        color: "Solid/Camouflage",
        function:
          "Waterproof / UV protector / IR resistant/anti-thermal/radar resistant",
        application: "Military use/hunting/camping/decoration",
        packing: "1pcs in a pouch",
      },
      {
        name: "Camouflage Net",
        material: "210T polyester",
        size: "3*6m",
        color: "Solid/Camouflage",
        function:
          "Waterproof / UV protector / IR resistant/anti-thermal/radar resistant",
        application: "Military use/hunting/camping/decoration",
        packing: "1 pcs in a pouch",
      },
      {
        name: "Police Duty Belt",
        material: "Plastic",
      },
      {
        name: "Elbow pad $ Knee pad",
        material: "600D Polyester, PVC cap, EVA foam, Neoprene, or custom",
        color:
          "Available colors Different colors, other OEM colors can as your request Certifications CE;TUV",
      },
      {
        name: "Ammo Box",
      },
      {
        name: "Army Knee Pads",
        material: "600D Polyester fabric, PVC shell, EVA foam, or custom ",
        feature: "Logo: As for your request",
        size: "One size fits most",
        packing: "Header card + PE bag, Mesh bag + Header card",
      },
      {
        name: "Folding Shovel",
        material: "Steel/aluminum",
        fabric_weight: "",
        feature: "Smooth appearance/multipurpose",
        size: "Unfolded L 103W14.8cm , folded 2414.8cm",
        color: "Black/golden",
        weight: "992g",
        application: "Army / hunting / hiking / outdoor",
        packing: "1pcs in a pouch and a box",
      },
      {
        name: "Army Water Bottle",
        material: "Aluminum Plastic",
        color: "Cover Color: Armry Green, Black, Khaki, Camouflage",
        cover: "Polyester, Nylon",
        capacity: "0.75L - 1L",
      },
      {
        name: "BELT-Tactical Belt",
        material:
          "Alloy / Iron / Brass / Zinc Alloy / Stainless Steel / Aluminum,",
        size: "Normal 5.5cm length/ 3.5cm width/ 1cm thickness or can be adjustable as yours",
        color:
          "Any Belt Buckles color as your requirement(various colors options)",
        protection_level: "",
        brand: "Customized",
        gender: "male",
        style: "Cassual / Fashion",
        moq: "Customized 1000PCS",
      },
      {
        name: "Gun Sling",
        material: "NYLON / POLYESTER / PP",
        brand: "Customized",
        feature:
          "Different choice for width and colors, 2*-wide webbing Black metal snapp hooks Adjustable elastic strap Quick-release buckle",
        gender: "Male",
        color:
          "Any Belt Buckles color as your requirement(various colors options)",
        style: "Casual / Fashion",
        buckle: "POM",
      },
    ],
  },
  {
    slug: "vehicles",
    title: "Vehicles",
    eyebrow: "Specialized Security & Operational Vehicles",
    intro:
      "Specialized vehicles designed to support security, transportation, logistics and operational requirements in demanding environments.",

    overview:
      "Instant Shield provides specialized vehicles for government institutions, security organizations, corporate clients and other authorized users. Our vehicle range includes riot-control vehicles, cash-in-transit vehicles, armored vehicles and other purpose-built platforms configured to meet specific transportation, protection and operational requirements.",

    approach: [
      "Vehicles selected according to operational and transportation requirements.",
      "Configurations tailored to the intended application and operating environment.",
      "Options available for security, logistics and specialized transportation needs.",
      "Vehicle specifications reviewed against client requirements before procurement.",
      "Customization and organizational procurement options available.",
    ],

    benefits: [
      "Specialized vehicles for security and operational applications",
      "Configurations designed for specific operational requirements",
      "Options for protected transportation and logistics",
      "Suitable for government, institutional and corporate requirements",
      "Procurement options for individual and fleet requirements",
    ],
    related: ["head-gear", "military-apparel-supplies", "military-backpacks"],
    images: [
      {
        src: "/assets/images/apparel/vehicles-01.png",
        alt: "Security personnel providing site protection",
      },
      {
        src: "/assets/images/apparel/vehicles-02.png",
        alt: "Security personnel managing access control",
      },
    ],
    product_details: [
      {
        name: "ANTI WATER CANNON VEHICLE",
      },
      {
        name: "CASH TRANSIT CARRIER",
      },
      {
        name: "Turbo Jet Anti-riot Vehicle",
      },
      {
        name: "China Tiger Armored Personnel Carrier",
      },
      {
        name: "Armored Toyota Land Cruiser 200",
      },
      {
        name: "Armored Toyota Hilux Pick-up",
      },
      {
        name: "Movable Kitchen",
      },
      {
        name: "Light Tactical Vehicle",
      },
    ],
  },
  {
    slug: "military-civilian-airborne-gears",
    title: "Military & Civilian Airborne Gears",
    eyebrow: "Airborne & Aviation Equipment",
    intro:
      "Specialized airborne equipment designed to support military and civilian aviation operations, airborne activities and personnel operating in demanding aerial environments.",

    overview:
      "Instant Shield supplies specialized airborne gear for authorized military and civilian applications. Our range is designed to support personnel involved in airborne operations, aviation activities, training and related operational requirements, with equipment selected according to the intended application and applicable specifications.",

    approach: [
      "Equipment selected according to the intended airborne or aviation application.",
      "Specifications matched to operational and environmental requirements.",
      "Options available for military and civilian applications.",
      "Equipment requirements reviewed before procurement and deployment.",
      "Bulk supply and organizational procurement options available.",
    ],

    benefits: [
      "Equipment suitable for military and civilian airborne applications",
      "Options for different operational and aviation requirements",
      "Designed for demanding aerial environments",
      "Multiple configurations available",
      "Suitable for institutional and organizational procurement",
    ],
    related: ["vehicles", "outdoor-gears-accessories", "military-backpacks"],
  },
  {
    slug: "protective-gears",
    title: "Protective Gears",
    eyebrow: "Personal Protective Equipment",
    intro:
      "Specialized personal protective equipment designed to help protect personnel from workplace, operational and environmental hazards across demanding working conditions.",

    overview:
      "Instant Shield supplies protective equipment for military, security, industrial, government and other authorized applications. Our range includes protective helmets, body protection, gloves, protective eyewear, hearing protection and other personal protective equipment selected according to the hazards and requirements of the intended environment.",

    approach: [
      "Protective equipment selected according to identified hazards and operational requirements.",
      "Equipment specifications matched to the intended working environment.",
      "Multiple sizes, configurations and protection options available.",
      "Equipment requirements reviewed to ensure appropriate coverage and usability.",
      "Bulk supply and organizational procurement options available.",
    ],

    benefits: [
      "Wide range of personal protective equipment",
      "Protection options for different operational environments",
      "Multiple sizes and configurations available",
      "Suitable for military, security and industrial applications",
      "Available for institutional and bulk procurement",
    ],
    related: [
      "vehicles",
      "outdoor-gears-accessories",
      "military-civilian-airborne-gears",
    ],
  },
];

export function getServiceDetail(slug: string) {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}
