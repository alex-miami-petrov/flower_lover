// import React, { useState } from "react";
// import s from "./OrderForm.module.css";
// import icons from "../../img/icons.svg";
// import line from "../../img/OrderForm/line.jpg";

// const OrderForm = () => {
//   const [formData, setFormData] = useState({ name: "", phone: "" });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Обов'язкове поле";
//     if (!formData.phone) newErrors.phone = "Обов'язкове поле";
//     else if (!/^\+?\d{10,15}$/.test(formData.phone))
//       newErrors.phone = "Некоректний номер телефону";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Submitted data:", formData);
//       setFormData({ name: "", phone: "" });
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={s.form}>
//       <div className={`${s.inputGroup} ${errors.name ? s.errorGroup : ""}`}>
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Ім’я"
//           className={s.input}
//         />
//         <img className={s.line} height="72" src={line} alt="line" />
//         <svg className={s.icon} width="24" height="24">
//           <use href={`${icons}#icon-name`} />
//         </svg>
//         {errors.name && <div className={s.error}>{errors.name}</div>}
//       </div>
//       <div className={`${s.inputGroup} ${errors.phone ? s.errorGroup : ""}`}>
//         <input
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Телефон"
//           className={s.input}
//         />
//         <img className={s.line} height="72" src={line} alt="line" />

//         <svg className={s.icon} width="24" height="24">
//           <use href={`${icons}#icon-phone`} />
//         </svg>
//         {errors.phone && <div className={s.error}>{errors.phone}</div>}
//       </div>
//       <button type="submit" className={s.submitButton}>
//         Залишити заявку
//       </button>
//     </form>
//   );
// };

// export default OrderForm;

import React, { useState } from "react";
import s from "./OrderForm.module.css";
import icons from "../../img/icons.svg";
import line from "../../img/OrderForm/line.jpg";

const OrderForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // Стан для подяки
  const [showModal, setShowModal] = useState(false); // Стан для модального вікна

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Обов'язкове поле";
    if (!formData.phone) newErrors.phone = "Обов'язкове поле";
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Невірний формат";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onFormSubmit(formData);
      setFormData({ name: "", phone: "" });
      setSubmitted(true);
      setShowModal(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitted(false);
  };

  return (
    <div className={s.formContainer}>
      {!submitted ? (
        <form onSubmit={handleSubmit} className={s.form}>
          <div className={`${s.inputGroup} ${errors.name ? s.errorGroup : ""}`}>
            <input
              name="name"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
                setErrors((prevErrors) => ({ ...prevErrors, name: "" })); // Очистити помилку на зміну
              }}
              placeholder="Ім’я"
              className={s.input}
            />
            <img className={s.line} height="72" src={line} alt="line" />
            <svg className={s.icon} width="24" height="24">
              <use href={`${icons}#icon-name`} />
            </svg>
            {errors.name && <div className={s.error}>{errors.name}</div>}
          </div>
          <div
            className={`${s.inputGroup} ${errors.phone ? s.errorGroup : ""}`}
          >
            <input
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                handleChange(e);
                setErrors((prevErrors) => ({ ...prevErrors, phone: "" })); // Очистити помилку на зміну
              }}
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
      ) : null}

      {/* Модальне вікно подяки */}
      {showModal && (
        <div className={s.modalOverlay}>
          <div className={s.modalContent}>
            <button className={s.closeModalButton} onClick={closeModal}>
              <svg className={s.closeIcon} width="24" height="24">
                <use href={`${icons}#icon-mc`} />
              </svg>
            </button>
            <h2 className={s.modalTitle}>Дякуємо!</h2>
            <p className={s.modalText}>
              Найближчим часом наш менеджер звʼяжеться з вами.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
