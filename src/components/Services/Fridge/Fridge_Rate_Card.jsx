import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { rateCards } from "../Rate_Card";

const Section = ({ title, show, toggle, data }) => (
  <div className="relative m-auto mb-8">
    <h1
      className="bg-blue-400 py-3 mt-8 pl-4 ml-6 font-semibold text-lg w-full max-w-[602px] ta:w-[460px] ta:m-auto mo:w-[250px] mo:m-auto"
      onClick={toggle}
    >
      {title}
      <span className="right-2 absolute m-auto ta:right-8 mo:right-8">
        <FontAwesomeIcon
          icon={show ? faCircleChevronUp : faCircleChevronDown}
          style={{ color: "#000000" }}
          onClick={toggle}
        />
      </span>
    </h1>

    {show && (
      <div className="overflow-x-auto">
        <table className="border border-black w-full max-w-[600px] border-collapse m-auto ta:w-[460px] mo:w-[250px] mo:m-auto ">
          <thead className="">
            <tr className="">
              <th className="border border-black p-2 mo:text-sm mo:p-1 ">Description</th>
              <th className="border border-black p-2 mo:text-sm mo:p-1 ">Total Price (incl. of GST)</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, itemIndex) => (
              <tr key={itemIndex} className="">
                <td className="border border-black p-2 ta:text-sm mo:text-[10px] ">
                  {item.description.map((desc, descIndex) => (
                    <span key={descIndex} className="py-1 flex flex-col items-start justify-center ta:mb-[5px] ta:py-[5px] ">
                      {desc}
                    </span>
                  ))}
                </td>
                <td className="border border-black p-2 ta:text-sm mo:text-[10px] ">
                  {item.price.map((price, priceIndex) => (
                    <span key={priceIndex} className="py-1 flex flex-col items-center justify-center ">
                      ₹{price}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

function FRIDGE_RATE_CARD({ isOpenCard, closeCard }) {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sectionTitles = [
      "Single Door Power Unit",
      "Single Door Cooling Issue",
      "Single Door Gas Change",
      "Single Door Gas Charge",
      "Single Door Compressor",
      "Single Door Accessories",
      "Single Door Minor Repair",
      "Double Door Power Unit",
      "Double Door Defrost Issue",
      "Double Door Gas Charge",
      "Double Door Compressor Unit",
      "Double Door Cooling Issue",
      "Double Door Accessories",
      "Side By Side Power Unit",
      "Side By Side Cooling Issue",
      "Side By Side Gas Charge",
      "Side By Side Compressor Unit",
      "Side By Side Defrost Issue",
      "Side By Side Ice Water Dispenser",
      "Side By Side Accessories",
      "Side By Side Minor Repair"
    ];

    const sectionData = rateCards[1].fridgeRateCard.map((item, index) => {
      const key = Object.keys(item)[0];
      return {
        title: sectionTitles[index],
        data: item[key]
      };
    });

    setSections(sectionData);

    if (isOpenCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpenCard]);

  const toggleSection = (index) => {
    setSections((prevSections) =>
      prevSections.map((section, i) => {
        if (i === index) {
          return { ...section, show: !section.show };
        }
        return section;
      })
    );
  };

  return (
    <>
      <Modal
        title="Fridge Rate Card"
        centered
        open={isOpenCard}
        footer={null}
        onCancel={closeCard}
        width={700}
      >
        <div>
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              show={section.show}
              toggle={() => toggleSection(index)}
              data={section.data}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}

export default FRIDGE_RATE_CARD;
