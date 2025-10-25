export interface IMessage {
  conversationId: string;
  senderId: string;
  content: string;
  sendDate: Date;
  type?: string; // enum: text, image, audio, video, file
  read?: boolean;
}
