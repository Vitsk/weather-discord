const clothes = (str) => {
  switch(str) {
    case 'main: Thunderstorm':
      return 'Штурмове попередження, краще сидіть вдома';
      
    case 'main: Drizzle':
      return 'Зараз моросить, можете не брати парасолю';
      
    case 'main: Rain':
      return 'Йде дощ, візміть парасолю';

    case 'main: Snow':
      return 'Йде сніг, вдягніться тепліше';

    case 'main: Clear':
      return 'Небо чисте';

    case 'main: Clouds':
      return 'Небо в хмарах, можна гуляти';

  }
}

module.exports = clothes;