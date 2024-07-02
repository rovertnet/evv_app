import React from 'react'

export default function SurveyListItems({survey, key}) {
  return (
    <>
      <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
        <img
          src={survey.image_url}
          alt={survey.title}
          className="w-full h-48 object-cover"
        />
      </div>
    </>
  );
}
