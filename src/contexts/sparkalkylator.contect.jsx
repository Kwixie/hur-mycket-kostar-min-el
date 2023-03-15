import { createContext, useState, useEffect } from "react";

export const SparkalkylatorContext = createContext({
  isSubmitTrue: false,
  setIsSubmitTrue: () => {},
  calculatorDevices: [],
  addDeviceToCalculator: () => {},
  removeDeviceFromCalculator: () => {},
  clearDevicesFromCalculator: () => {},
  totalSavings: 0,
});
