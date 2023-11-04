import axios from "axios";

export const getDayname = (day: number): string => {
  switch (day) {
    case 0:
      return "sun";
    case 1:
      return "mon";
    case 2:
      return "tue";
    case 3:
      return "wed";
    case 4:
      return "thu";
    case 5:
      return "fri";
    case 6:
      return "sat";
    default:
      return "NIL";
  }
};

export const getBookedTimestampsFromDB = async (): Promise<number[]> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_CDGR_API}/api/contact/meeting`
    );
    return res.data.scheduled ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getDistanceToTopOfViewport = (element: HTMLElement): number => {
  const elementRect: DOMRect = element.getBoundingClientRect();
  return elementRect.top;
};

export const constrain = (
  value: number,
  lowerBound: number,
  upperBound: number
): number => {
  if (value < lowerBound) {
    return lowerBound;
  } else if (value > upperBound) {
    return upperBound;
  } else {
    return value;
  }
};
