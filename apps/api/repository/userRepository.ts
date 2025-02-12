import { firestore } from "../config/firebaseConfig";
import { User } from '@repo/models/src/user';

export class UserRepository {
    private collectionName = 'users';
  
    async createUser(user: User): Promise<void> {
      await firestore.collection(this.collectionName).doc(user.id.toString()).set(user);
    }

    async getUserByEmail(email: string): Promise<User | undefined> {
        const userDoc = await firestore.collection(this.collectionName).where('email', '==', email).get();
        return userDoc.docs[0].data() as User | undefined;
    }

    async getAllUsers(): Promise<User[]> {
        const users = await firestore.collection(this.collectionName).get();
        return users.docs.map((doc) => doc.data() as User);
    }
  
    async updateUser(user: User): Promise<void> {
      await firestore.collection(this.collectionName).doc(user.id.toString()).set(user);
    }
  }