import bridge from "@vkontakte/vk-bridge"

const storyMethodName = 'VKWebAppShowStoryBox'
const apiURL = 'https://random.imagecdn.app/720/1080'

async function fetchRandomImage(): Promise<string> {
    const url = new URL(apiURL)

    const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
            'Accept': 'image/jpg'
        }
    })

    if (!response.ok) {
        throw new Error("error fetching random image, code: " + response.status.toString())
    }

    const blob = await response.blob()
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
        reader.onloadend = () => {
            resolve(reader.result as string)
        }
        reader.onerror = reject
        reader.readAsDataURL(blob)
    })
}

export async function RandomStory() {
    try {
        const image = await fetchRandomImage()

        const response = await bridge.send(storyMethodName, {
            background_type: 'image',
            blob: image,
        })

        if (response) {
            console.log(response)
        }
    } catch (error) {
        console.error('Error:', error)
    }
}
