import { memo } from "react";
import { UserResponseType } from "../../types/types";
import { capitalizeFirstLetter, formatPhoneNumber } from "../../utils/utils";
import DeleteAction from "./DeleteAction/DeleteAction";
import {
  Actions,
  Container,
  Info,
  LetterIcon,
  Link,
  Name,
  Row,
} from "./UserCard.styles";

function UserCard({ name, email, number, id }: UserResponseType) {
  const nameCapitalized = capitalizeFirstLetter(name);
  const numberFormatted = formatPhoneNumber(number);
  const firstLetter = name.charAt(0);

  return (
    <Container>
      <LetterIcon>{firstLetter}</LetterIcon>
      <Info>
        <Name>{nameCapitalized}</Name>
        <Row>
          <Link href={`mailto:${email}`}>{email}</Link>
        </Row>
        <Row>
          <Link href={`tel:+48${number}`}>{numberFormatted}</Link>
        </Row>
      </Info>
      <Actions>
        <DeleteAction id={id} name={nameCapitalized} />
      </Actions>
    </Container>
  );
}

export default memo(UserCard);
