const getGif =()=> {

    const gifArr = [
        'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyd2NvOXEwaTltNmg2NGJuMGMybmZ1aXF2Zm96ZGl1MjhucTlpbnpreSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GDp7LycxkT3LG/200w.gif',
        'https://i.imgur.com/6n6jL0V.gif',
        'https://i0.wp.com/media4.giphy.com/media/l41YASVAGbDjStoWY/giphy.gif',
        'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyazY4M3JtcW1sdTh3OGtrM2xxbDc3cmhwMGhnNzRzZjA5azkxdm9vOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/17RaL7HOgI1CE/200w.gif'
    ]

    const randomGif = gifArr[Math.floor(Math.random() * gifArr.length)]

    return randomGif

}

module.exports = getGif