export interface Response {
  success: boolean;
  data: Data;
}

export interface Data {
  id: string;
  studentID: string;
  name: string;
  lastname: string;
  sections: Section[];
  updateAt: Date;
}

export interface Section {
  sectionName: string;
  sectionVideoData: videoData[];
}

export interface videoData {
  videoTitle: string;
  percentage: number;
}
