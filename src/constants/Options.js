import deepFreeze from '../utils/deepFreeze.js';

const OPTIONS = {
  INPUT: {
    delemiter: ','
  },
  WORKPLAN: {
    minLength: 5,
    maxLength: 35
  },
  NICKNAME: {
    maxLength: 5
  },
  DATE: {
    weekend: ['토', '일'],
    daysOfWeek: ['월', '화', '수', '목', '금', '토', '일'],
    daysInMonth: {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31
    },
    holiday: {
      1: [1],
      3: [1],
      5: [5],
      6: [6],
      8: [15],
      10: [3, 9],
      12: [25]
    }
  }
};

deepFreeze(OPTIONS);

export default OPTIONS;
