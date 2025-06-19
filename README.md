# Project description

This is an app to play your customer audios in a kids-friendly style player, without any ads or paid content.

# Dependencies

## References

- [Get free songs at ximalaya.com](https://www.ximalaya.com/songs)
- [代码托管](https://gitee.com)
- [github](https://github.com/)
- [versel](https://vercel.com/)
- [favicon converter](https://favicon.io/favicon-converter/)
- [free svg converter](https://picsvg.com/)
- [Antd](https://ant-design.antgroup.com/index-cn)
- [Antd Components](https://4x.ant.design/components/overview-cn/)

## tools

- [Hex color picker](https://imagecolorpicker.com/)

# Get free audio files

## recommended

Find a website which provides songs online play services, right click your mouse, click "inspect",
免费下载音频资源的方法如下 1：
打开一个音乐网站并找到你想要下载的歌曲。
在歌曲播放页面的空白处右击鼠标，选择“检查”或者按下【F12】功能键，进入审查元素界面。
在审查元素界面中，点击【网络】-【媒体】，然后按下【F5】刷新页面。
保持音乐在播放状态，下方列表会显示当前播放的音频文件。鼠标右键选择该文件，并选择【在新标签页中打开】。
在新标签页中，点击播放按钮试听音频，如果满意，点击音频文件右侧的三个点，并选择【下载】。
如果你希望将所有下载的音乐转换成统一的 MP3 格式，可以使用如“迅捷音频转换器”等工具。将音乐文件拖拽进转换器，选择输出格式为“MP3”，然后点击【开始转换】。
注意： 在执行上述操作时，请确保遵守所在国家或地区的版权法律，仅限下载供个人使用的音乐，不得用于商业或其他侵权用途。

## Utilizing Website's Download Feature:

Look for Download Links: Some websites directly provide download links for their audio content.
Right-Click and Save: If available, right-click on the audio file and select "Save as" to download it.

## Online Audio Extractors:

Upload or Paste URL: Some websites, like Biteable, allow you to upload a video file or paste its URL.
Extract Audio: Use the website's tool to extract the audio from the video.
Download the Audio: Download the extracted audio file.

## Developer Tools:

Inspect Element: Open the website's developer tools (usually by pressing F12).
Network Tab: Find the network tab and filter for audio files.
Locate and Download: Identify the audio file and its download link.

## Legitimate Sources:

Free Music Archives: Explore websites like Free Music Archive, Jamendo Music, and others that offer legal free music downloads.
YouTube Audio Library: Check out the YouTube Audio Library for royalty-free music.

# Change audio files

To update the audio files, update `data` object, which is a list of files names in App.js, while keep the data with same strings as names in the folder APP_ROOT_PATH/audios, in `.m4a` format.

# Available Scripts

## Create the app

`create-react-app myapp`

## Start the app

In the project directory, you can run:
`npm start`

## if error shows:

`Cannot find module 'ajv/dist/compile/codegen'`
then run `npm install ajv`

# open the application

## In development environment

in the browser type `localhost:3000`

## Deployment

Currently, it is deployed on git-pages.
