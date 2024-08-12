import { Client, Databases ,Storage} from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66b915530028751af44b");

export const storage = new Storage(client);
export const databases = new Databases(client);
