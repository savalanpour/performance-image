import moment from "moment";

export const covertLighthouseResult = (json) => {
  return {
    time: moment(new Date(json.lighthouseResult.fetchTime)).format(
      "YYYY-MM-DD HH:mm:ss"
    ),
    url: json.loadingExperience.initial_url,
    performance: json.lighthouseResult.categories.performance.score,
    "First Contentful Paint (FCP)":
      json.lighthouseResult.audits["first-contentful-paint"].displayValue,
    "Largest Contentful Paint (LCP)":
      json.lighthouseResult.audits["largest-contentful-paint"].displayValue,
    "Total Blocking Time (TBT)":
      json.lighthouseResult.audits["total-blocking-time"].displayValue,
    "Cumulative Layout Shift (CLS)":
      json.lighthouseResult.audits["cumulative-layout-shift"].displayValue,
    "Speed Index (SI)":
      json.lighthouseResult.audits["speed-index"].displayValue,
  };
};

export const sheetHeader = () => {
  return [
    "performance",
    "First Contentful Paint (FCP)",
    "Largest Contentful Paint (LCP)",
    "Total Blocking Time (TBT)",
    "Cumulative Layout Shift (CLS)",
    "Speed Index (SI)",
  ];
};
