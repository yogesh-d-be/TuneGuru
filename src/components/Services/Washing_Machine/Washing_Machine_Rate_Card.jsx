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

function WASHING_MACHINE_RATE_CARD({ isOpenCard, closeCard }) {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sectionTitles = [
        "Semi-Automatic Power Unit",
        "Semi-Automatic Wash Issue",
        "Semi-Automatic Spin Issue",
        "Semi-Automatic Water Leakage",
        "Semi-Automatic Accessories",
        "Top Load WM Power Unit",
        "Top Load WM Wash Issue",
        "Top Load WM Spin Issue",
        "Top Load WM Water Leakage",
        "Top Load WM Accessories",
        "Front Load WM Power Unit",
        "Front Load WM Wash Issue",
        "Front Load WM Noise Issue",
        "Front Load WM Spin Issue",
        "Front Load WM Water Leakage",
        "Front Load WM Accessories",
        "Minor Repair",
        "Installation",
        "Descaling"
      ];

    const sectionData = rateCards[2].wmRateCard.map((item, index) => {
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
        title="Washing Machine Rate Card"
        centered
        open={isOpenCard}
        footer={null}
        onCancel={closeCard}
        width={700}
      >
        <div>
        <p className="bg-blue-200 py-2 px-4 rounded pl-4 ml-6 w-full max-w-[602px] ta:w-[460px] ta:m-auto mo:w-[250px] mo:m-auto">Labour Charges are capped at ₹299 per appliance</p>
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

export default WASHING_MACHINE_RATE_CARD;
