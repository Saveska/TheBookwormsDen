class ArticleService {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async getAllArticles() {
      const url = `${this.baseUrl}/api/articles`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch articles, status: ${response.status}`);
      }
  
      return await response.json();
    }
  
    async getArticleById(articleId) {
      const url = `${this.baseUrl}/api/articles/${articleId}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        if (response.status === 404) {
          return null; // Handle not found case
        }
        throw new Error(`Failed to fetch article with id ${articleId}, status: ${response.status}`);
      }
  
      return await response.json();
    }
  }
  