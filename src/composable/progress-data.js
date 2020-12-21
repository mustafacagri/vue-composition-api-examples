
export function useProgressData() {
  const stateProgressData = {
    progresses : [
        {title:'Percentage 1', data: {percentage: 90, delay: 500, bg: 'warning', striped: true, animation: true}},
        {title:'Percentage 2', data: {percentage: 75, delay: 2000, bg: 'pinkglamour', striped: true, animation: true}},
        {title:'Percentage 3', data: {percentage: 60, delay: 3500, bg: 'americanriver', striped: true, animation: true}}
    ]
  }
  return { stateProgressData }
}