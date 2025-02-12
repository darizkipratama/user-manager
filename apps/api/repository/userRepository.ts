import { firestore } from "../config/firebaseConfig";
import { User } from '@repo/models/src/user';

export class UserRepository {
    private collectionName = 'users';
  
    async createUser(user: User): Promise<void> {
      await firestore.collection(this.collectionName).doc(user.id.toString()).set(user);
    }
  
    async getUserById(id: number): Promise<User | undefined> {
      const userDoc = await firestore.collection(this.collectionName).doc(id.toString()).get();
      return userDoc.data() as User | undefined;
    }
  
    async updateUser(user: User): Promise<void> {
      await firestore.collection(this.collectionName).doc(user.id.toString()).set(user);
    }
  }