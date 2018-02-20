import payload from "../data/hobsWithJobs";

export function fetchHobsWithJobs() {
  return { type: "HOBBIT_LOAD", payload };
}

export function selectHobbit(hobbit) {
  return { type: "SELECT_HOBBIT", payload: hobbit };
}
