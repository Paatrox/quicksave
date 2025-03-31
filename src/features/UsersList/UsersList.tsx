import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { api } from "../../api/api";
import EmptyList from "../../components/EmptyList/EmptyList";
import UserCard from "../../components/UserCard/UserCard";
import { List, ListItem } from "./UsersList.styles";

const motionParams = {
  initial: { opacity: 0, y: -13 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: -15 },
  transition: { duration: 0.2 },
};

function UsersList() {
  const { data: list } = useQuery({
    queryKey: ["usersList"],
    queryFn: api.getUsers,
  });

  const isListEmpty = list?.length === 0;

  if (isListEmpty) {
    return (
      <EmptyList>
        <motion.div {...motionParams}>
          Jeszcze nie dodano żadnych użytkowników
        </motion.div>
      </EmptyList>
    );
  }

  return (
    <List>
      <AnimatePresence>
        {list?.map((item) => (
          <motion.div key={item.id} {...motionParams}>
            <ListItem>
              <UserCard {...item} />
            </ListItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </List>
  );
}

export default UsersList;
