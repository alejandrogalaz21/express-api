// Minimum eight characters, at least one letter and one number
// Reference: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
export const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

// That is personal_info@domain. The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters
// Reference: https://www.w3resource.com/javascript/form/email-validation.php
export const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
