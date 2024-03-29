import { Timestamp } from "firebase/firestore";

export interface UserInterface {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  userDocument?: UserDocument;
}

export interface UserDocument {
  onbordingIsCompleted: boolean;
  uid: string;
  email: string;
  how_did_her: string;
  creation_date: Timestamp;
  displayName: string;
  expertise: string;
  biography: string;
  photoURL: string | null;
}
