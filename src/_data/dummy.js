const EleventyFetch = require('@11ty/eleventy-fetch');

async function getData() {
  try {
    let url = `https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`;

    const response = EleventyFetch(url, {
      duration: "1d",
      type: "json"
    });

    const data = response
    return data
  } catch(e) {
    return {
      // my failure fallback data
    }
  }
}

module.exports = getData;