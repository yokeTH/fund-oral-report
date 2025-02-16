export interface GetResponse {
  id: string
  name: string
  lastname: string
  section: string
  createAt: string
  updateAt: string
  report: Report[]
  version: string
}

export interface Report {
  id: string
  studentId: string
  videoId: string
  percentage: number
  createAt: string
  updateAt: string
  video: Video
}

export interface Video {
  id: string
  title?: string
  createAt: string
  updateAt: string
}
