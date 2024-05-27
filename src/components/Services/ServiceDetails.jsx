export const AllServiceDetails =[
 {
  serviceOptions : [
    {
      id:"ac_s1",
      a_category : "Service",
      a_name: "Power Saver AC Service",
      a_type: "Split",
      a_price: 599,
      a_description:
        "Cleaning of AC with Foam and water jet by a TuneGuru professional for better cooling and lower power consumption",
      a_image: "https://i.imgur.com/QSTUDoN.jpeg",
      a_details: [
        "Cleaning of AC filters, cooling coil, drain tray and other parts",
        "Gas pressure check, if required",
        "Cleaning of the outdoor unit with water jet for split AC, if possible",
      ],
    },
    {
      id:"ac_s2",
      a_category : "Service",
      a_type: "Split",
      a_name: "AC Service Lite",
      a_price: 439,
      a_description:
        "Basic cleaning of AC with water jet by a TuneGuru professional for better cooling and lower power consumption",
      a_image: require('../../assests/images/AC clean.jpeg'),
      a_details: [
        "Basic water jet cleaning of indoor unit",
        "Basic cleaning of outdoor unit",
        "Final checks & clean up",
      ],
    },
    {
      id:"ac_w1",
      a_category : "Service",
      a_type: "Window",
      a_name: "Power Saver AC Service",
      a_price: 699,
      a_description:
        "Cleaning of AC with Foam and water jet by a TuneGuru professional for better cooling and lower power consumption",
      a_image: require('../../assests/images/AC Foam jet.jpeg'),
      a_details: [
        "Cleaning of AC filters, cooling coil, drain tray and other parts",
        "Gas pressure check, if required",
        "Cleaning of the outdoor unit with water jet for split AC, if possible",
      ],
    },
    {
      id:"ac_w2",
      a_category : "Service",
      a_type: "Window",
      a_name: "AC Service Lite",
      a_price: 539,
      a_description:
        "Basic cleaning of AC with water jet by a TuneGuru professional for better cooling and lower power consumption",
      a_image: require('../../assests/images/AC clean.jpeg'),
      a_details: [
        "Basic water jet cleaning of indoor unit",
        "Basic cleaning of outdoor unit",
        "Final checks & clean up",
      ],
    },
  ],
 repairOptions : [
    {
      id:"ac_s3",
      a_category : "Repair & Gas fill",
      a_type: "Split",
      a_name: "AC Repair",
      a_price: 299,
      a_description:
        "Through inspection and repairs of AC problems like less cooling, water leakage etc. by a TuneGuru menders",
      a_image: require('../../assests/images/AC Repair1.jpeg'),
      a_details: [
        "Minimum service charge for repair is ₹299, it may vary depends on repair",
        "Service charge for installing any spare part, if required",
        "Jet service, PCB repair, cost of spare parts, installation and uninstallation are not covered"
      ],
    },  
    {
      id:"ac_s4",
      a_category : "Repair & Gas fill",
      a_type: "Split",
      a_name: "Gas Leak & Refill ",
      a_price: 2000,
      a_description:
        "Through diagnosis leak identification & fixing, gas refil to avoid leakages",
      a_image: require('../../assests/images/Ac Repair and gas refilling.jpg'),
      a_details: [
        "Repair of gas leakage",
        "Cost of gas charging",
        "Checking of AC controls and functioning",
        "Cleaning of the area post service",
        "Cost of spare parts, installation & uninstallation services are not covered"
      ],
    },  
    {
      id:"ac_w3",
      a_category : "Repair & Gas fill",
      a_type: "Window",
      a_name: "AC Repair",
      a_price: 399,
      a_description:
        "Through inspection and repairs of AC problems like less cooling, water leakage etc. by a TuneGuru menders",
      a_image: require('../../assests/images/AC Repair1.jpeg'),
      a_details: [
        "Minimum service charge for repair is ₹299, it may vary depends on repair",
        "Service charge for installing any spare part, if required",
        "Jet service, PCB repair, cost of spare parts, installation and uninstallation are not covered"
      ],
    },  
    {
      id:"ac_w4",
      a_category : "Repair & Gas fill",
      a_type: "Window",
      a_name: "Gas Leak & Refill ",
      a_price: 1999,
      a_description:
        "Through diagnosis leak identification & fixing, gas refil to avoid leakages",
      a_image: require('../../assests/images/Ac Repair and gas refilling.jpg'),
      a_details: [
        "Repair of gas leakage",
        "Cost of gas charging",
        "Checking of AC controls and functioning",
        "Cleaning of the area post service",
        "Cost of spare parts, installation & uninstallation services are not covered"
      ],
    },  
  ],

installOptions : [
    {
      id:"ac_s5",
      a_category : "Installation & Uninstallation",
      a_type: "Split",
      a_name: "AC Install",
      a_price: 899,
      a_description:
        "Installaton of indoor & outdoor units with free gas check",
      a_image: require('../../assests/images/Ac install1.png'),
      a_details: [
        "Drilling, wiring connections, installation of the indoor & outdoor units & pipe fixes",
        "Gas check to prevent leakages",
        "Cooling rate & device checks followed by cleanup of service area"
      ],
    },  
    {
      id:"ac_s6",
      a_category : "Installation & Uninstallation",
      a_type: "Split",
      a_name: "AC Uninstall",
      a_price: 2000,
      a_description:
        "Uninstallation of both indoor & outdoor units",
      a_image: require('../../assests/images/AC uninstall.jpg'),
      a_details: [
        "Uninstallation of indoor & outdoor units",
        "Pipe fixes",
        "AC packing(material to be provided by the customer)",
        "Cleanup of service area",
        
      ],
    },  
    {
      id:"ac_w5",
      a_category : "Installation & Uninstallation",
      a_type: "Window",
      a_name: "AC Install",
      a_price: 899,
      a_description:
        "Installaton of indoor & outdoor units with free gas check",
      a_image: require('../../assests/images/Ac install1.png'),
      a_details: [
        "Drilling, wiring connections, installation of the indoor & outdoor units & pipe fixes",
        "Gas check to prevent leakages",
        "Cooling rate & device checks followed by cleanup of service area"
      ],
    },  
    {
      id:"ac_w6",
      a_category : "Installation & Uninstallation",
      a_type: "Window",
      a_name: "AC Uninstall",
      a_price: 1999,
      a_description:
        "Uninstallation of both indoor & outdoor units",
      a_image: require('../../assests/images/AC uninstall.jpg'),
      a_details: [
        "Uninstallation of indoor & outdoor units",
        "Pipe fixes",
        "AC packing(material to be provided by the customer)",
        "Cleanup of service area",
        
      ],
    },  
  ]
 },

]


