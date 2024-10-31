import { Client, Databases, Account } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6722d96d000cfdc2503e');

export const account = new Account(client);
export const databases = new Databases(client);
