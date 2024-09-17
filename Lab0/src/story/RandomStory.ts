import bridge from "@vkontakte/vk-bridge";

const storyMethodName = 'VKWebAppShowStoryBox'
const apiURL = 'https://random.imagecdn.app/720/1080'

export async function RandomStory() {
    try {
        const response = await bridge.send(storyMethodName, {
            background_type: 'image',
            url: apiURL
        });

        if (response) {
            console.log(response);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
