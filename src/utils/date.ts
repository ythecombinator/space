import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

const format = (date: string) => dayjs(date).format("MMM Do YYYY");

export { format };
