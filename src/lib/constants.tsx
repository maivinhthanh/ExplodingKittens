export const publicUrl = import.meta.env.VITE_PUBLISH_URL!;
export const apiUrl = import.meta.env.VITE_API_URI! || 'http://localhost:3000';
export const isStaging = import.meta.env.VITE_IS_STAGING === 'true';
export const baseUrl = import.meta.env.VITE_APP_URI || 'http://127.0.0.1:5173';
export const socketUrl = import.meta.env.VITE_API_SOCKET || 'http://localhost:4000'
export const API_FETCH_TIMEOUT = 20;

export const ERROR_CODES = {
  NOT_ENOUGH_CREDIT: {
    code: 'NOT_ENOUGH_CREDIT',
    description: 'Tài khoản không đủ tiền hoặc không phải là tài khoản công nợ',
    http_code: 406,
    internal: '',
    title: 'Not enough credit',
  },
  NOT_AUTHORIZED: {
    code: 'NOT_AUTHORIZED',
    description:
      'Không có quyền thực hiện thao tác này, vui lòng kiểm tra lại.',
    http_code: 401,
    title: 'Thao tác bị từ chối.',
  },
  REFRESH_TOKEN_HAS_EXPIRED: {
    code: 'REFRESH_TOKEN_HAS_EXPIRED',
    http_code: 401,
    title: 'Token expired',
    description: 'Your token has expired, please sign in again.',
    internal: '',
  },
};