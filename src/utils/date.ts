import dayjs from 'dayjs';

/**
 * 格式化日期时间
 * @param date 日期字符串或日期对象
 * @param format 格式化模板
 * @returns 格式化后的日期字符串
 */
export const formatDateTime = (
  date: string | Date,
  format: string = 'YYYY-MM-DD HH:mm:ss'
): string => {
  return dayjs(date).format(format);
};

/**
 * 格式化日期范围
 * @param startDate 开始日期
 * @param endDate 结束日期
 * @returns 格式化后的日期范围字符串
 */
export const formatDateRange = (
  startDate: string | Date,
  endDate: string | Date
): string => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  
  // 如果是同一天，只显示日期
  if (start.isSame(end, 'day')) {
    return start.format('YYYY-MM-DD');
  }
  
  // 如果是同一年，省略年份
  if (start.isSame(end, 'year')) {
    return `${start.format('MM-DD')} to ${end.format('MM-DD')}`;
  }
  
  return `${start.format('YYYY-MM-DD')} to ${end.format('YYYY-MM-DD')}`;
};

/**
 * 判断日期是否在今天
 * @param date 日期字符串或日期对象
 * @returns 是否在今天
 */
export const isToday = (date: string | Date): boolean => {
  return dayjs(date).isSame(dayjs(), 'day');
};

