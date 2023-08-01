import { createClient } from "contentful";

const Content = () => {
    // const apiKey = process.env.API_KEY
    // const apiSecret = process.env.API_SECRET

    const client = createClient({
        space: "apiKey",
        accessToken: "apiSecret",
        host: "cdn.contentful.com"
    })

    const getFootball = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "football",
                select: "fields"
            })

            const cleanEntries = entries.items.map((item) => {
                const id = item.sys.id
                const image = item.fields.image.fields.file.url
                return { ...item.fields, id, image }
            })

            // const entry = await client.getEntry(id, {
            //     content_type: 'football',
            //     select: 'fields'
            // })
            // const cleanEntry = {
            //     id : entry.sys.id,
            //     image : entry.fields.image.fields.file.url
            // }
            return cleanEntries

        } catch (error) {
            console.log(`Error fetching footballs: ${error}` );
        }
    }


    const getBasketball = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "basketball",
                select: "fields"
            })
    
            const cleanEntries = entries.items.map((item) => {
                const id = item.sys.id
                const image = item.fields.image.fields.file.url
                return { ...item.fields, id, image }
            })
    
            return cleanEntries
    
        } catch (error) {
            console.log(`Error fetching basketballs: ${error}` );
        }
    }

    return { getFootball, getBasketball }

}

export default Content