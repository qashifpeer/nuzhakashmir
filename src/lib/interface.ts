interface Author {
    _id: string;
    name: string;
    slug: string;
  }
  
  interface Category {
    _id: string;
    name: string;
    slug : {current: string}
  }
  
  interface Post {
    _id: string;
    title: string;
    shortDescription: string;
    slug: {current: string};
    image: string;
    publishedAt: string;
    body: string;
    author: Author;
    categories: Category[];
    content: any;
  }

  interface FetchedData {
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

  interface PostType {
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
  
  
  