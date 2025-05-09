// Padding for small screens
export const mobileOnlyPadding = (padding = "1rem") => ({
    [`@media (max-width:899.95px)`]: {
      paddingLeft: padding,
      paddingRight: padding,
    },
  });
  