interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface Article {
  id: number;
  title: string;
  snippet: string;
  url: string;
}

interface User {
  id: number;
  name: string;
  avatar: string;
}

export type { Message, Article, User };
