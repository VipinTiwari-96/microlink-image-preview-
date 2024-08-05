export interface ScreenShotModel {
  height: number;
  size: number;
  size_pretty: string;
  type: string;
  url: string;
  width: number;
}

export interface ScreenShotDataModel {
  screenshot: ScreenShotModel;
  url: string;
}
