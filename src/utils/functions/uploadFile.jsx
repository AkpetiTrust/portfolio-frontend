import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../constants";

export const uploadFile = async (file) => {
  const storageRef = ref(storage, file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);

  return url;
};
