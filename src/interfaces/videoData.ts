export interface VideoData {
  [studentId: string]: {
    name: string;
    lastname: string;
    studentID: string;
    updateTime?: Date;
    sections: {
      [sec: string]: { video: string; percentage: string }[];
    };
  };
}
