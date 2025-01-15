export interface IToolsRequest {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export interface IToolsFindReqiuest {
  tag?: string;
}

export interface ITools {
  _id?: any;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export interface IToolsResponse {
  _id?: any;
  title: string;
  link: string;
  description: string;
  tags: string[];
}
