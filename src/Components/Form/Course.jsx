import React from "react";

const Course = ({
  radioName,
  courseTitle,
  firstOption,
  secondOption,
  thirdOption,
  register
}) => {

  return (
    <div className="Form_menu_item">
      <label className="Form_menu_label">
        <span className="Form_item_title">{courseTitle}</span>
      </label>
      <div className="Form_menu_options">
        <div className="Form_course_wrapper">
          <input
            name={radioName}
            type="radio"
            value={firstOption}
            ref={register({ required: true })}
          />
          <label>{firstOption}</label>
        </div>
        <div className="Form_course_wrapper">
          <input
            name={radioName}
            type="radio"
            value={secondOption}
            ref={register({ required: true })}
          />
          <label>{secondOption}</label>
        </div>
        {thirdOption && (
          <div className="Form_course_wrapper">
            <input
              name={radioName}
              type="radio"
              value={thirdOption}
              ref={register({ required: true })}
            />
            <label>{thirdOption}</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
