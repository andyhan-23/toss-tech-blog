import { setupWorker } from "msw";
import main from "../api/get-main";
import detail from "../api/get-detail";

const initMocks = () => {
  try {
    const mockJSON = [main, detail].map((data) => {
      return data();
    });
    const worker = setupWorker(...mockJSON);
    worker.start();
    return true;
  } catch (e) {
    if (import.meta.env.DEV) {
      console.error(`failed to start worker. error:${e}`);
    }
    return false;
  }
};

export { initMocks };
