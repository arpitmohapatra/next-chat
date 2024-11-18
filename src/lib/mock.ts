import { Article } from "./interfaces";

const mockArticles = (query: string): Article[] => {
  // Mock articles based on the query
  return [
    {
      id: 1,
      title: "Article 1",
      snippet: `This is a snippet for ${query}`,
      url: "https://example.com/article1",
    },
    {
      id: 2,
      title: "Article 2",
      snippet: `This is another snippet for ${query}`,
      url: "https://example.com/article2",
    },
    // ... more articles
  ];
};

export default mockArticles;
