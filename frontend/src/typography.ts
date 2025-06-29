export const fontUrls = {
  setalBold: '/fonts/setal/setalBold.woff',
  bryantBold: '/fonts/setal/bryantBold.woff',
  // robotoMono: '',
};

export const computerTextConfig = (fontSize:number = 0.27) => ({
  fontSize,
  font: fontUrls.setalBold,
  letterSpacing: 0 * fontSize,
});
