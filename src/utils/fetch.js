async function getJson(sol, camera) {
    const resp = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=wgusvCRVbL7llvHVbALYEeOphkl2MV8nrQa9p8eF`)

    if (!resp.ok) {
        console.log(resp.statusText)
        throw new Error
    }

    const json = await resp.json()
    return json



}

async function imageUrl(sol, camera) {
    let url = ""
    try {
        let jsonArray = await getJson(sol, camera)
        url = jsonArray.photos[0].img_src
    }
    catch (Error) {
        url = "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.2.74311147.1669814742&semt=sph"
    }
    return url
}

export { getJson, imageUrl }