import * as EmailValidator from "email-validator";

interface Validate {
  email: (email: string) => string;
  name: (name: string) => string;
  number: (number: string) => string;
  hasErrors: (errors: Record<string, string>) => boolean;
}

const validate: Validate = {
  email: (email: string) => {
    let error = "";
    email = email.trim();

    if (!email) {
      error = "Podaj adres e-mail";
    } else if (!EmailValidator.validate(email)) {
      error = "Nieprawidłowy adres e-mail";
    }

    return error;
  },
  name: (name: string) => {
    let error = "";
    name = name.trim();

    const nameRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\s]+$/;

    if (!name) {
      error = "Podaj imię";
    } else if (!nameRegex.test(name)) {
      error = "Imię może zawierać tylko litery";
    }

    return error;
  },
  number: (number: string) => {
    let error = "";
    number = number.trim();

    const numberRegex = /^\d{9}$/;

    if (!number) {
      error = "Podaj numer";
    } else if (!numberRegex.test(number)) {
      error = "Numer musi składać się z 9 cyfr";
    }

    return error;
  },
  hasErrors: (errors: Record<string, string>) => {
    return Object.values(errors).some((error) => error !== "");
  },
};

export { validate };
