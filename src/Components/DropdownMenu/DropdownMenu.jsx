import React, { useState } from "react";
import icons from "../../img/icons.svg";
import s from "./DropdownMenu.module.css";

const DropdownMenu = ({ title, options, isOpenDefault = false }) => {
  const initialSelectedOptions = {
    "< 200 ₴ ": true,
  };

  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected options:", selectedOptions);
  };

  return (
    <div className={s.col}>
      <div className={s.dropdown}>
        <button
          type="button"
          className={`${s.btn} ${s.btnPrimary} ${s.dropdownToggle}`}
          onClick={toggleDropdown}
        >
          {title}
          <svg className={s.downIcon} width="16" height="18">
            <use href={`${icons}#icon-down`} />
          </svg>
        </button>
        {isOpen && (
          <form className={`${s.dropdownMenu} ${s.p4}`} onSubmit={handleSubmit}>
            <div className={s.mb3}>
              <label className={s.formCheckLabel}></label>
              {options.map((option, index) => (
                <div className={s.formCheck} key={index}>
                  <input
                    type="checkbox"
                    className={s.formCheckInput}
                    id={`checkbox-${title}-${index}`}
                    checked={selectedOptions[option] || false}
                    onChange={() => handleCheckboxChange(option)}
                  />

                  <label
                    className={s.formCheckLabel}
                    htmlFor={`checkbox-${title}-${index}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className={`${s.btn} ${s.btnPrimary} ${s.subBtn}`}
            >
              Застосувати
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
