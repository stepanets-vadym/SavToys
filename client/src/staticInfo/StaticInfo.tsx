export function LimitSelect() {
  const limitArr = [
    { id: 1, value: '5' , name: '5'},
    { id: 2, value: '10' , name: '10'},
    { id: 3, value: '25' , name: '25'},
    { id: 4, value: '50' , name: '50'},
    { id: 5, value: '100' , name: '100'},
  ];

  return limitArr;
}


export const sortType = {
  UNSORT : 'unSort',
  SORTBYNEW : 'sortByNew',
  SORTBYBETS : 'sortByBest',
  SORTBYEXPENSIVE : 'sortByExpensive',
  SORTBYCHEAP : 'sortByCheap',
}

export function sortProd() {
  const sortArr = [
    { id: 1, value: sortType.UNSORT , name: 'Всі'},
    { id: 2, value: sortType.SORTBYNEW , name: 'Спочатку нові'},
    { id: 3, value: sortType.SORTBYEXPENSIVE , name: 'Від дорогих до дешевих'},
    { id: 4, value: sortType.SORTBYCHEAP , name: 'Від дешевих до дорогих'},
    { id: 5, value: sortType.SORTBYBETS , name: 'Спочатку популярні'},
    
  ]
  return sortArr
}