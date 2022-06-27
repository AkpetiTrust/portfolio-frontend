import { api } from "../../constants";

export const deleteSelectedMessages = async (messages) => {
  let messageIds = messages
    .filter((message) => message.selected)
    .map((message) => message.id);
  messageIds = JSON.stringify(messageIds);

  await api.post("delete-messages", {
    authIsRequired: true,
    body: { ids: messageIds },
  });

  return { type: "DELETE_SELECTED_MESSAGES" };
};
