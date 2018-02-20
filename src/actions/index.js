import payload from '../data/hobsWithJobs'

export function fetchHobsWithJobs(){
  return {type: 'HOBBIT_LOAD', payload}
}
