import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "../../api";
import Input from "../../components/Input/Input";
import { UserType } from "../../types/types";
import { ButtonWithMargin, Form, InputWithMargin } from "./FormAddUser.styles";
import { validate } from "./validations";

const initialValues = { email: "", name: "", number: "" } as UserType;

function FormAddUser() {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: api.addUser,
    onSuccess: () => {
      setFormErrors({ ...initialValues });
      setFormValues({ ...initialValues });
      queryClient.invalidateQueries({ queryKey: ["usersList"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = formValues.email;
    const name = formValues.name;
    const number = formValues.number;

    const errors = { ...initialValues };
    errors.email = validate.email(email);
    errors.name = validate.name(name);
    errors.number = validate.number(number);

    const hasErrors = validate.hasErrors(errors);

    if (!hasErrors) {
      mutation.mutate({ email, name, number });
    } else {
      setFormErrors(errors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const field = name as keyof UserType;
    const value = formValues[field];
    const currentError = formErrors[field];

    if (value || currentError) {
      const newError = validate[field](value);
      setFormErrors((prev) => ({ ...prev, [field]: newError }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <InputWithMargin
        name="email"
        maxLength={100}
        type="email"
        label="E-mail"
        value={formValues.email}
        autoComplete="off"
        errorMessage={formErrors.email}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <InputWithMargin
        name="name"
        maxLength={50}
        type="text"
        label="Imię"
        value={formValues.name}
        autoComplete="off"
        errorMessage={formErrors.name}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Input
        name="number"
        type="tel"
        maxLength={9}
        label="Numer"
        value={formValues.number}
        desc="Numer 9 cyfrowy"
        autoComplete="off"
        errorMessage={formErrors.number}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <ButtonWithMargin disabled={mutation.isPending}>Zapisz</ButtonWithMargin>
    </Form>
  );
}

export default FormAddUser;
