// import React, { useContext } from "react";
// import { StoreContext } from "./CartId";
// // import AC from "./AC"; // Import the component you're rendering
// import Add_To_Cart from "./AddToCart";
// import AC from "./AC";

// function ServiceDataMap() { // Renamed function to start with uppercase
//     const { serviceOptions, repairOptions, installOptions } = useContext(StoreContext);

//     // Merge all options into a single array
//     // const allOptions = [...serviceOptions, ...repairOptions, ...installOptions];

//     return (
//         <>
//             {serviceOptions.map((service, index) => (
//                 <AC
//                     key={index}
//                     ac_id={service.id}
//                     ac_type={service.a_type}
//                     ac_name={service.a_name}
//                     ac_price={service.a_price}
//                     ac_description={service.a_description}
//                     ac_image={service.a_image}
//                     ac_details={service.a_details}
//                 />
//             ))}
//         </>
//     );
// }

// export default ServiceDataMap;
