export const BUTTON_COLORS = {
  PRIMARY:
    'text-black hover:text-gray-600 bg-white hover:bg-gray-200 border-black hover:border-gray-600 focus:ring-gray-300',
};

export type ButtonColorsType =
  (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS];
