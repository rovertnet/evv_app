import React from 'react'

export default function TButton(
  color = "indigo",
  to = "",
  circle = false,
  href = "",
  link = false,
  target = "_blank",
  children
) {

  let classes = [
    "flex",
    "items-center",
    "whitespace-nowrap",
    "text-sm",
    "border",
    "border-2",
    "border-transparent",
  ];

  if (link) {
    classes = [...classes, "transition-colors"];

    switch (color) {
      case "indigo":
        classes = [...classes, "text-indigo-500", "focus:border-indigo-500"];
        break;
      case "red":
        classes = [...classes, "text-red-500", "focus:border-red-500"];
    }
  } else {
    classes = [...classes, "text-white", "focus:ring-2", "focus:ring-offset-2"];

    switch (color) {
      case "indigo":
        classes = [
          ...classes,
          "bg-indigo-600",
          "hover:bg-indigo-700",
          "focus:ring-indigo-500",
        ];
        break;
      case "red":
        classes = [
          ...classes,
          "bg-red-600",
          "hover:bg-red-700",
          "focus:ring-red-500",
        ];
        break;
      case "green":
        classes = [
          ...classes,
          "bg-emerald-500",
          "hover:bg-emerald-600",
          "focus:ring-emerald-400",
        ];
        break;
    }
  }

  return( 
    <>

    </>
  );
}
