async function getJson(sol, camera){
    const resp = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=DEMO_KEY`)
    const json = await resp.json()

    return json
}

async function imageUrl(sol, camera) {
    let jsonArray = await getJson(sol, camera)
    let url = jsonArray.photos[0].img_src
    return url
}

export {getJson, imageUrl}