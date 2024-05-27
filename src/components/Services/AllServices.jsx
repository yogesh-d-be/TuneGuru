export const servicesAvailable = [
  {
    heading: [
      "Appliances Services",
      "Electrician",
      "Plumber",
      "Carpenter",
      "Device Services",
      "Cleaning Services",
      "Pest Control",
      "Vehicle Services",
      "Water Purifier",
      "Painting",
    ],

    scroll: ["ac", "el", "pl", "ca", "de", "cl", "pe", "ve", "wa", "pa"],
    Appliances: [
      {
        head: "Appliances Services",
        icon: [
          require("../../assests/Icons/air-conditioner.png"),
          require("../../assests/Icons/fridge.png"),
          require("../../assests/Icons/washing-machine.png"),
          require("../../assests/Icons/television.png"),
          require("../../assests/Icons/blender.png"),
          require("../../assests/Icons/inventer.png"),
        ],
        service: [
          "AC Repair & Service",
          "Refridgerator Repair",
          "Washing Machine Repair",
          "TV Repair",
          "Mixer & Grinder Repair",
          "Inverter Repair & Service",
        ],
        path: [
          "/ac_repair_service",
          "/fridge_repair",
          "/washing_machine_repair",
          "/tv_repair",
          "/mixer&grinder_repair",
          "/inverter_repair&service",
        ],
      },
    ],

    Electrician: [
      {
        head: "Electrician",
        icon: [
          require("../../assests/Icons/e_install.png"),
          require("../../assests/Icons/broken-cable.png"),
        ],
        service: ["Installation", "Repair"],
        path: ["/electrician_installation", "/electrician_repair"],
      },
    ],

    Plumber: [
      {
        head: "Plumber",
        icon: [
          require("../../assests/Icons/plumber (2).png"),
          require("../../assests/Icons/leaking.png"),
        ],
        service: ["Installation", "Repair"],
        path: ["/plumber_installation", "/plumber_repair"],
      },
    ],
    Carpenter: [
      {
        head: "Carpenter",
        icon: [
          require("../../assests/Icons/carpenter (2).png"),
          require("../../assests/Icons/carpenter (1).png"),
        ],
        service: ["Installation", "Service"],
        path: ["/carpenter_installation", "/carpenter_repair"],
      },
    ],
    DeviceServices: [
      {
        head: "Device Services",
        icon: [
          require("../../assests/Icons/iphone.png"),
          require("../../assests/Icons/laptop (1).png"),
          require("../../assests/Icons/computer (1).png"),
          require("../../assests/Icons/printer.png"),
        ],
        service: [
          "Mobile Repair",
          "Laptop Service & Repair",
          "Computer Service & Repair",
          "Printer Service & Repair",
        ],
        path: [
          "/mobile_repair",
          "/laptop_service&repair",
          "/computer_service&repair",
          "/printer_service&repair",
        ],
      },
    ],
    CleaningServices: [
      {
        head: "Cleaning Services",
        icon: [
          require("../../assests/Icons/kitchen.png"),
          require("../../assests/Icons/mansion.png"),
        ],
        service: ["Kitchen & Bathroom Cleaning", "Full Home Cleaning"],
        path: ["/kitchen&bathroom_cleaning", "/full_home_cleaning"],
      },
    ],
    PestControl: [
      {
        head: "Pest Control",
        icon: [
          require("../../assests/Icons/pesticide.png"),
          require("../../assests/Icons/insect.png"),
          require("../../assests/Icons/insect (1).png"),
        ],
        service: [
          "General Pest & Rodent Control",
          "Cockroach Pest Control",
          "Mosquito Pest Control",
        ],
        path: [
          "/general_pest&rodent_control",
          "/cockroach_pest_control",
          "mosquito_pest_control",
        ],
      },
    ],
    VehicleServices: [
      {
        head: "Vehicle Services",
        icon: [
          require("../../assests/Icons/repair-shop.png"),
          require("../../assests/Icons/bike.png"),
        ],
        service: ["Car Service & Repair", "Bike Service & Repair"],
        path: ["/car_service&repair", "/bike_service&repair"],
      },
    ],
    WaterPurifier: [
      {
        head: "Water Purifier",
        icon: [require("../../assests/Icons/purified-water.png")],
        service: ["Water Purifier Service & Repair"],
        path: ["/water_purifier_service&repair"],
      },
    ],
    Painting: [
      {
        head: "Painting",
        icon: [require("../../assests/Icons/paint.png")],
        service: ["Home Painting"],
        path: ["/home_painting"],
      },
    ],
  },
];
