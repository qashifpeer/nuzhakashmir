interface Author {
    _id: string;
    name: string;
    slug: string;
  }
  
  interface Category {
    _id: string;
    name: string;
  }
  
  interface Post {
    _id: string;
    title: string;
    shortDescription: string;
    slug: string;
    image: string;
    publishedAt: string;
    body: string;
    author: Author;
    categories: Category[];
    content: any;
  }

  interface fetchedData {
    _id: string;
    title: string;
    shortDescription: string;
    slug: string;
    image: string;
    publishedAt: string;
    body: string;
    author: Author;
    categories: Category[];
    content: any;
  }

  interface postType {
    _id: string;
    title: string;
    shortDescription: string;
    slug: string;
    image: string;
    publishedAt: string;
    body: string;
    author: Author;
    categories: Category[];
    content: any;

  }
  
  
  