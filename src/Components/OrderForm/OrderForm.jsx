import React, { useState } from "react";
import s from "./OrderForm.module.css";
import icons from "../../img/icons.svg";
import line from "../../img/OrderForm/line.jpg";

const OrderForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Обов'язкове поле";
    if (!formData.phone) newErrors.phone = "Обов'язкове поле";
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Некоректний номер телефону";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitted data:", formData);
      setFormData({ name: "", phone: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={`${s.inputGroup} ${errors.name ? s.errorGroup : ""}`}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ім’я"
          className={s.input}
        />
        <img className={s.line} height="72" src={line} alt="line" />
        <svg className={s.icon} width="24" height="24">
          <use href={`${icons}#icon-name`} />
        </svg>
        {errors.name && <div className={s.error}>{errors.name}</div>}
      </div>
      <div className={`${s.inputGroup} ${errors.phone ? s.errorGroup : ""}`}>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Телефон"
          className={s.input}
        />
        <img className={s.line} height="72" src={line} alt="line" />

        <svg className={s.icon} width="24" height="24">
          <use href={`${icons}#icon-phone`} />
        </svg>
        {errors.phone && <div className={s.error}>{errors.phone}</div>}
      </div>
      <button type="submit" className={s.submitButton}>
        Залишити заявку
      </button>
    </form>
  );
};

export default OrderForm;
