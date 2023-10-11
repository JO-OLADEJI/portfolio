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

const DB_KEY = "scheduled";
// [interim]: use localStorage as DB
export const getBookedTimestampsFromDB = (): number[] => {
  const scheduledTimestamps: string | null = localStorage.getItem(DB_KEY);
  if (!scheduledTimestamps) {
    return [];
  }

  return JSON.stringify(scheduledTimestamps) as unknown as number[];
};

// [interim]: use localStorage as DB
export const addBookedTimestampsToDB = (newBookedTime: Date): number[] => {
  const scheduledTimestamps: number[] = getBookedTimestampsFromDB();
  scheduledTimestamps.push(newBookedTime.valueOf());
  localStorage.setItem(DB_KEY, JSON.stringify(scheduledTimestamps));
  return scheduledTimestamps;
};
