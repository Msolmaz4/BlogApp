interface Data {
  categoryId: string;
  comments: string[];
  content: string;
  countOfVisitors: number;
  createdAt: string;
  image: string;
  isPublish: boolean;
  likes: string[];
  title: string;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
}
interface User {
    bio: string;
    createdAt: string;
    email: string;
    firstName: string;
    image: string;
    isActive: boolean;
    isAdmin: boolean;
    isStaff: boolean;
    lastName: string;
    password: string;
    updatedAt: string;
    username: string;
    __v: number;
    _id: string;
  }
  
  interface ApiResponse {
    data?: {
      token: string;
      user?: User;
    };
    error?: {
      data: {
        error: boolean;
        message: string;
      };
    };
  }
  interface In {
    darkTheme:()=>void;
    theme: string;
  }
  interface RegisterIn {
    username: string,
    firstName:string,
    lastName: string,
    email: string,
    image: string,
    bio: string,
    password: string,
    
  }

  interface Blogs {
    error:boolean,
    details: Details,
    data:Data,
  }

  interface Details {
    filter:string,
    limit:number,
    page:number,
    pages:boolean,
    search:string,
    skip:number,
    sort:string
   totalRecords: number,

   }


   interface Register {
    bio: string;
    createdAt: string;
    email: string;
    firstName: string;
    image: string;
    isActive: boolean;
    isAdmin: boolean;
    isStaff: boolean;
    lastName: string;
    password: string;
    updatedAt: string;
    username: string;
    __v: number;
    _id: string;
  }
  
  interface ErrorResponse {
    status: number;
    data: {
      error: boolean;
      message: string;
    };
  }
  
  
  
  
  interface MutationResult {
    data?: Register;
    error?: ErrorResponse;
    token?: string;
  }
  