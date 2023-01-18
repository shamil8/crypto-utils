import { mathFloor } from './core.util';

type UnitTimeType = keyof typeof timeTypes;
type AsyncFuncType<A, O> = (...args: A[]) => Promise<O>;

/** timeToMs & msToTime const and types */
const timeTypes = {
  second: 1000,
  minute: 60,
  hour: 60,
  day: 24,
  week: 7,
};

const timeUnits = Object.keys(timeTypes) as UnitTimeType[];

/** The sleep func returns new promise for await something. */
export function sleepTimeout(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

/** Convert time with unit to milliseconds */
export function timeToMs(time: number, unit: UnitTimeType = 'second'): number {
  if (unit === 'second') {
    return time * timeTypes[unit];
  }

  return timeToMs(
    time * timeTypes[unit],
    timeUnits[timeUnits.indexOf(unit) - 1],
  );
}

/** Convert milliseconds to time with unit */
export function msToTime(time: number, unit: UnitTimeType = 'second'): number {
  if (unit === 'second') {
    return mathFloor(time / timeTypes[unit]);
  }

  return msToTime(
    time / timeTypes[unit],
    timeUnits[timeUnits.indexOf(unit) - 1],
  );
}

/** The parallelLoop func start with p (params) repeatEveryDays and wakeTime */
export async function parallelLoop(
  callFun: AsyncFuncType<any, void>,
  p: unknown[],
  repeatEveryDays: number,
  wakeTime?: string,
): Promise<void> {
  let diff: number | null = null;

  if (wakeTime) {
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10);
    const runDate = new Date(`${dateStr}T${wakeTime}`);

    if (runDate.getTime() < today.getTime()) {
      runDate.setDate(runDate.getDate() + repeatEveryDays);
    }

    diff = runDate.getTime() - today.getTime();

    console.log(
      `parallelLoop func: '${
        callFun.name || 'anon'
      }', will run: ${runDate.toISOString()}`,
    );
  }

  while (repeatEveryDays) {
    if (diff) {
      /** for first loop */
      await sleepTimeout(diff);
    }

    await callFun(...p);

    diff = null;

    /** for other loops */
    await sleepTimeout(timeToMs(repeatEveryDays, 'day'));
  }
}
