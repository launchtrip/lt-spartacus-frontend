import axios from 'axios';

export default function syncDMP(value, isProp) {
  // try {
  let ip = null;
  let url = null;
  let keyword = null;
  console.log('raw values', value);

  if (isProp) {
    ip = value.req.headers ? value.req.headers["x-forwarded-for"] : null;
    url = value.req.headers ? value.req.headers["referer"] + value.resolvedUrl : null;
    keyword = value.query ? value.query.q : null;
    console.log(ip, url, keyword);
  } else {
    ip = value.headers ? value.headers["x-forwarded-for"] : null;
  }

  if (ip) {
    fetch(`https://ipinfo.io/${ip}/json`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log('JOSE2', myJson.ip + ' - ' + myJson.city + ' - ' + myJson.region + ' - ' + myJson.country + ' - ' + myJson.loc + ' - ' + myJson.timezone)
        const payload = {
          ip: myJson.ip,
          origin: 'UNIFY',
          url: url,
          city: myJson.city,
          state: myJson.region,
          country: myJson.country,
          latitude: myJson.loc,
          longitude: myJson.loc,
          timezone: myJson.timezone,
          keyword: keyword,
        }
        console.log('payload===>>>', payload);
        axios.post('https://lt-dmp.herokuapp.com/internal/add', payload);
      }).catch(function (error) {
        console.log("Error: " + error);
      });
  }
  // } catch (e) {
  //   console.log(`Error on syncDMP! ${JSON.stringify(e)}`)
  // }
};
